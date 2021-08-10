import firebase from 'firebase';
import Router from 'next/router';
import axios from 'axios';

export function signIn(email, password, type) {
    this.setState({ error: false, errorMessage: '', loading: true }, () => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    if (type == 'user') {
                        const userID = firebase.auth().currentUser.uid;
                        firebase.database().ref(`users/${userID}`).once('value', snapshot => {
                            if (snapshot.val().summarizedHistory.phoneVerified == true)
                                Router.push('/s/db/udash').then(() => window.scrollTo(0, 0));
                            else
                                this.setState({ displayVerification: true, loading: false, userDetails: snapshot.val(), error: false }, () => {
                                    //send a verification phonenumber
                                    sendVerification(userID, 'phoneNumber', 'storeAndSend', 'nocode', snapshot.val().phoneNumber, snapshot.val().email, snapshot.val().firstName,);
                                    firebase.auth().signOut().catch(error => { console.log(error.message) })
                                });
                        }).catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false, }) });
                    }
                    else if (type == 'driver') {
                        const userID = firebase.auth().currentUser.uid;
                        firebase.database().ref(`users/${userID}`).once('value', snapshot => {
                            if (snapshot.val().summarizedHistory.phoneVerified == true && snapshot.val().summarizedHistory.emailVerified == true)
                                firebase.database().ref(`users/${userID}/driverVerified`).once('value', snap => {
                                    if (snap.val() == 'VERIFIED')
                                        Router.push('/s/db/ddash').then(() => window.scrollTo(0, 0));
                                    else
                                        Router.push('/s/db/d_app_dash').then(() => window.scrollTo(0, 0));
                                }).catch(error => { console.log(error.message) })
                            else {
                                this.setState({
                                    displayVerification: true,
                                    loading: false, userDetails: snapshot.val(),
                                    phoneVerified: snapshot.val().summarizedHistory.phoneVerified,
                                    emailVerified: snapshot.val().summarizedHistory.emailVerified,
                                    error: false,
                                }, () => {
                                    //send an email or phonenumber verification
                                    if (!snapshot.val().summarizedHistory.phoneVerified)
                                        sendVerification(userID, 'phoneNumber', 'storeAndSend', 'nocode', snapshot.val().phoneNumber, snapshot.val().email, snapshot.val().firstName,);
                                    if (!snapshot.val().summarizedHistory.emailVerified)
                                        sendVerification(userID, 'email', 'storeAndSend', 'nocode', snapshot.val().phoneNumber, snapshot.val().email, snapshot.val().firstName,);

                                    firebase.auth().signOut().catch(error => { console.log(error.message) })
                                });
                            }
                        }).catch(error => { console.log(error.message) });
                    }
                })
                .catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false }) });
        }).catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false }) });
    })
};
export function adminSignIn(email, password) {
    this.setState({ error: false, errorMessage: '', loading: true }, () => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    const userID = firebase.auth().currentUser.uid;
                    firebase.database().ref(`adminAuthorized/${userID}`)
                        .once('value', snapshot => {
                            if (snapshot.val())
                                Router.push('/admin/dash').then(() => window.scrollTo(0, 0));
                            else
                                this.setState({ error: true, errorMessage: 'You do not have access to this portion of the site. Please contact us for help. Excess unauthorized logins might result in an IP block.', loading: false }, () => {
                                    firebase.auth().signOut().catch(error => { console.log(error.message) });
                                })
                        })
                        .catch(error => { console.log(error.message) })
                })
                .catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false }) });
        }).catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false }) });
    })
};
export function signUp(firstName, lastName, email, countryCode, phoneNumber, password, isDriver, referralCode) {

    this.setState({ error: false, errorMessage: '', loading: true }, () => {
        axios.post(`https://us-central1-perch-01.cloudfunctions.net/checkIfPhoneNumberIsFree`, { phoneNumber: `+${countryCode}${phoneNumber}` })
            .then(r => {
                if (r.data) {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(() => {
                            const userID = firebase.auth().currentUser.uid;
                            axios.post('https://us-central1-perch-01.cloudfunctions.net/createUserDetails', {
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                phoneNumber: `+${countryCode}${phoneNumber}`,
                                userID: userID,
                                isDriver: isDriver,
                                referralCode: referralCode,
                            })
                                .then(() => {
                                    firebase.database().ref(`users/${userID}`).once('value', snapshot => {
                                        firebase.auth().signOut().catch(error => { console.log(error.message) })
                                        this.setState({ displayVerification: true, loading: false, error: false, userDetails: snapshot.val() });
                                    }).catch(error => { this.setState({ error: true, errorMessage: error.message }) })

                                })
                                .catch(error => { this.setState({ errorMessage: error.message, loading: false }) });
                        }).catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false }) });
                }
                else
                    this.setState({ error: true, errorMessage: 'This phone number is currently registered with another account, contact us for help', loading: false })
            })
            .catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false }) });

    })
};
export function signOut(doNotReroute) {
    firebase.auth().signOut()
        .then(() => {
            if (!doNotReroute)
                Router.push('/');
        })
        .catch(error => { console.log(error.message) })
};
export function sendVerification(userID, type, action, code, phoneNumber, email, name,) {
    axios.post(`https://us-central1-perch-01.cloudfunctions.net/sendVerificationCode`,
        {
            userID: userID,
            type: type,
            action: action,
            code: code,
            phoneNumber: phoneNumber,
            email: email,
            name: name
        })
        .then((r) => {
            const result = r.data;
            if (action == 'check') {
                if (result) {
                    if (type == 'phoneNumber')
                        this.setState({ phoneVerified: true, verificationPhoneLoader: false })
                    else if (type == 'email')
                        this.setState({ emailVerified: true, verificationEmailLoader: false })
                }
                else {
                    if (type == 'phoneNumber')
                        this.setState({ verificationPhoneLoader: false })
                    else if (type == 'email')
                        this.setState({ verificationEmailLoader: false })
                    this.setState({
                        error: true,
                        errorMessage: 'The verification code was not correct. Please check again or click resend.',
                    });
                }
            }
        })
    //.catch((error) => { this.setState({ error: true, errorMessage: error.message }) })
};
export function changeEmailOrPhoneNumber(type, userID, phoneNumber, email) {
    axios.post(`https://us-central1-perch-01.cloudfunctions.net/changeEmailOrPhoneNumber`, { userID: userID, email: email, type: type, phoneNumber: phoneNumber })
        .then((r) => {
            this.setState({ userDetails: r.data, changeEmail_PhoneNumber: false, error: false, errorMessage: '', changeEmailLoader: false, changePhoneLoader: false, })
        })
        .catch(error => { this.setState({ error: true, errorMessage: `${error.message}, this field might already be in use by another user` }) })
};
export function sendFeedback() {
    if (this.state.topic == 'unselected')
        this.setState({ errorMessage: 'A topic is needed. Please pick a topic to contact us about. If you do not have one, please pick "Other"' })
    else if (this.state.message == '')
        this.setState({ errorMessage: 'Please enter a message' })
    else {
        this.setState({ loading: true }, () => {
            if (this.state.userDetails) {
                const ref = this.state.userDetails.driverID ? `driverFeedback/${this.state.userDetails.driverID}` : `userFeedback/${this.state.userDetails.userID}`;
                firebase.database().ref(ref).update({
                    [new Date().getTime()]: {
                        body: this.state.message,
                        subject: this.state.topic,
                        status: 'UNPROCESSED',
                        date: getDate(),
                        timestamp: new Date().getTime(),
                    }
                }).then(() => {
                    this.setState({ topic: 'unselected', message: '', loading: false }, () => { this.loadResult() })
                }).catch(error => { console.log(error.message) });
            }
            else
                axios.post(`https://us-central1-perch-01.cloudfunctions.net/guestSendFeedback`, {
                    body: this.state.message,
                    subject: this.state.topic,
                    status: 'UNPROCESSED',
                    date: getDate(),
                    email: this.state.userEmail,
                    timestamp: new Date().getTime(),
                    nonUser: true,
                    case: 'send',
                }).then(() => {
                    this.setState({ topic: 'unselected', message: '', loading: false })
                }).catch(error => { console.log(error.message) });
        })
    }
};
export function changePassword(email_, oldPassword, newPassword) {
    this.setState({ loading: true }, () => {

        const email = email_;
        const password = oldPassword;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUser.updatePassword(newPassword)
                    .then(() => {
                        this.setState({ loading: false, toShow: 'default', currentPassword: '', newPassword: '', confirmNewPassword: '' });
                    })
                    .catch(error => this.setState({ errorMessage: error.message, loading: false, newPassword: '', confirmNewPassword: '' }));
            })
            .catch(error => this.setState({ errorMessage: error.message, loading: false, newPassword: '', confirmNewPassword: '' }));
    })
};
export function deleteAccount(email, password) {
    this.setState({ loading: true }, () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebase.auth().currentUser;
                const userID = user.uid;
                user.delete()
                    .then(() => {
                        axios.post(`https://us-central1-perch-01.cloudfunctions.net/deleteUser`, {
                            userID: userID,
                            deleteAccountReason: this.state.deleteAccountReason,
                            userDetails: this.state.userDetails,
                        }).catch(error => { alert(error.message) })
                    }).catch(error => this.setState({ errorMessage: error.message, loading: false, password1: '' }));
            }).catch(error => this.setState({ errorMessage: error.message, loading: false, password1: '' }));
    })
};
export function sendPasswordResetLink(email) {
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            this.setState({ error: false, errorMessage: '', forgotPassword: false })
        }).catch(error => { this.setState({ error: true, errorMessage: error.message }) })
};
export function sendEmail(name, email, type, subject) {
    axios.post(`https://us-central1-perch-01.cloudfunctions.net/sendVerificationEmail`, { name: name, email: email, type: type, subject: subject })
        .catch(error => { console.log(error.message) })
};
export function resetPassword(code, newPassword, email) {
    this.setState({ errorMessage: '', loading: true }, () => {
        firebase.auth().confirmPasswordReset(code, newPassword)
            .then(() => {
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
                    firebase.auth().signInWithEmailAndPassword(email, newPassword)
                        .then(() => {
                            const userID = firebase.auth().currentUser.uid;
                            firebase.database().ref(`users/${userID}/firstName`)
                                .once('value', snap => {
                                    sendEmail(snap.val(), email, 'passwordHasBeenReset', 'Password has been reset');
                                })
                                .catch(error => { console.log(error.message) });
                        })
                        .catch(error => { console.log(error.message) });
                }).catch(error => { console.log(error.message) });
                Router.push('/');//send an email that password has been set 
            })
            .catch(() => { this.setState({ errorMessage: 'The link is no longer valid, please go to the login page and request a new password reset link', loading: false }) })
    })
};
export function validateVehicle(userID, timestamp, dateFormat) {
    axios.post(`https://us-central1-perch-01.cloudfunctions.net/validateVehicle`, { userID: userID, timestamp: timestamp, dateFormat: dateFormat })
        .catch(error => { alert(error.message) })
};
export function replyFeedback(response, riderOrDriver, senderID, timestamp) {
    const ref = riderOrDriver == 'Rider' ? `userFeedback/${senderID}/${timestamp}` : `driverFeedback/${senderID}/${timestamp}`;
    const nonUser = this.state.toShow.nonUser;
    if (nonUser)
        axios.post(`https://us-central1-perch-01.cloudfunctions.net/guestSendFeedback`, {
            email: this.state.toShow.email,
            subject: `Re:[${this.state.toShow.subject}]`,
            response: response,
            case: 'reply',
        }).catch(error => {
            alert(error.message)
        })

    firebase.database().ref(ref).update({
        response: response,
        status: 'PROCESSED',
        responseDate: getDate(),
    }).then(() => {
        this.setState({
            responseDate: new Date().getTime(),
            showResponse: true,
        })
    }).catch(error => {
        alert(error.message)
    })
};
export function sendUserEmail(email, subject, text) {
    axios.post(`https://us-central1-perch-01.cloudfunctions.net/sendEmail`, {
        email: email,
        subject: subject,
        text: text,
    }).then(() => {
        this.setState({ email: '', subject: '', text: '', loading: false })
    }).catch(error => {
        alert(error.message);
        this.setState({ loading: false });
    })
}
export function validateDriver(userID, timestamp, dateFormat) {
    axios.post(`https://us-central1-perch-01.cloudfunctions.net/validateDriver`, { userID: userID, timestamp: timestamp, dateFormat: dateFormat })
        .then(() => {
            this.loadResult();
            this.setState({ showDocs: false, vehicle: {}, verified: [] });
        })
        .catch(error => { alert(error.message) })
};
//MAKE A RANDOMID
export function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
export function driverAppplicationAdvance() {
    const { selected } = this.state;

    switch (selected.stage) {
        case 'three': {
            firebase.database().ref(`driverApplications/${selected.userID}`)
                .update({
                    progress: JSON.stringify(["done", "done", "done", "ongoing", "undone"]),
                    stage: "four",
                })
                .then(() => {
                    //MAKE ARRANGEMENTS TO SEND DRIVER AN OFFER LETTER
                    this.setState({ showDocs: false }, () => { this.loadResult() })
                })
                .catch(error => { alert(error.message) })
        } break;
        case 'four': {//THE INDEPENNDENT CONTRACTOR DOCUMENT HAS BEEN SIGNED AND WE ARE GOOD TO GO
            firebase.database().ref(`driverApplications/${selected.userID}`)
                .update({
                    progress: JSON.stringify(["done", "done", "done", "done", "done"]),
                    stage: "five",
                })
                .then(() => { this.setState({ showDocs: false }, () => { this.loadResult() }) })
                .catch(error => { alert(error.message) })
        } break;
    };
}
export function getDate() {
    const DAY = new Date().getDate();
    const MONTH = new Date().getMonth();
    const YEAR = new Date().getFullYear();
    const HOUR = new Date().getHours();
    const MIN = new Date().getMinutes();
    const SECOND = new Date().getSeconds();

    return (`${YEAR}-${MONTH}-${DAY}-${HOUR}-${MIN}-${SECOND}`);
};
export function dateformat(time) {
    let slash1 = 0, slash2 = 0, slash3 = 0;
    for (let k = 0; k < time.length; k++) {
        if (time.charAt(k) == '-')
            slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;

        if (slash3 != 0)
            break;
    };

    const y = time.substring(0, slash1);
    const m = time.substring(slash1 + 1, slash2);
    const d = time.substring(slash2 + 1, slash3);

    return `${d}/${Number(m) + 1}/${y}`;
};
export function polylineLenght(data) {
    let distance = 0;
    for (let k = 0; k < data.length - 1; k++)
        distance += distanceCalculator(data[k][0], data[k][1], data[k + 1][0], data[k + 1][1])

    return (distance)
};
export function timeAndDate(time, month, year) {
    let slash1 = 0, slash2 = 0, slash3 = 0;
    for (let k = 0; k < time.length; k++) {
        if (time.charAt(k) == '-')
            slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;
    }

    const HOUR = Number(time.substring(slash1 + 1, slash2)) == 0 ? 12 : Number(time.substring(slash1 + 1, slash2)) > 12 ? Number(time.substring(slash1 + 1, slash2)) - 12 : Number(time.substring(slash1 + 1, slash2));
    const MIN = Number(time.substring(slash2 + 1, slash3)) < 10 ? `0` + time.substring(slash2 + 1, slash3) : Number(time.substring(slash2 + 1, slash3));
    const MERIDIAN = Number(time.substring(slash1 + 1, slash2)) < 12 ? 'AM' : 'PM';
    const DAY = time.substring(0, slash1);
    const MONTH = M.indexOf(month) + 1;
    const formattedDate = `${DAY}/${MONTH}/${year}, ${HOUR}:${MIN} ${MERIDIAN}`;

    return (formattedDate);
};
export function distanceCalculator(lat1, lon1, lat2, lon2) {
    let R = 6371 * 1000; // Radius of the earth in m
    let dLat = deg2rad(lat2 - lat1);  // deg2rad below
    let dLon = deg2rad(lon2 - lon1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in m
    return d;
};
export function emailFormat(email, type) {
    //@ is stored as -(hyphen)
    //. is stored as _(underscore)
    switch (type) {
        case 'emailToString': {
            return (email.replace('@', '-').replace('.', '_'));
        } break;
        case 'stringToEmail': {
            return (email.replace('-', '@').replace('_', '.'));
        } break;
    }
};
function deg2rad(deg) {
    return deg * (Math.PI / 180)
};
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};
export function dateOfQuery(timestamp) {
    return `${formatAMPM(new Date(timestamp)).toUpperCase()} ${('0' + new Date(timestamp).getDate()).slice(-2)}/${('0' + (new Date(timestamp).getMonth() + 1)).slice(-2)}/${new Date(timestamp).getFullYear()}`
};
export const M = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const colors = {
    GREEN: "#4EB848",
    WHITE: "#FFFFFF",
    GREY: "#959AAC",
    BLACK: "#000000",
    RED: "#FF0000",
    BLUE_TEXT: "#284ED6",
    BLUE: "#1970A7",
    PURPLE: "#A031AF",
    YELLOW: "#F0E23D",
    GOLD: "#FFAA00",
};
export function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
};
export function deleteCard(userID, last4, selected) {
    axios.post(`https://us-central1-perch-01.cloudfunctions.net/deleteStripeCard`, { userID: userID, last4: last4, selected: selected })
        .catch(error => { console.log(error.message) });
};
export function storeCard(userID, cardObject, setLoading, setErrorMessage, cancel) {
    let c = cardObject;
    c.card.cardId = cardObject.card.id;
    axios.post(`https://us-central1-perch-01.cloudfunctions.net/storeStripeCard`, { userID: userID, cardObject: c })
        .then(() => {
            cancel();
        })
        .catch(error => {
            setLoading(false)
            setErrorMessage(error.message);
        });
};
export function buyKilometers(toSend) {
    this.setState({ paymentLoading: true }, () => {
        axios.post(`https://us-central1-perch-01.cloudfunctions.net/buyPerchKilometers`, { ...toSend, status: 'initial' })
            .then(result => {
                const { status, client_secret, id } = result.data;
                toSend.paymentIntentId = id;
                toSend.status = 'confirm_payment';

                if (status == 'succeeded') {
                    this.setState({ paymentCompleted: true })
                }
                else if (status == 'requires_action') {
                    stripe.authenticatePaymentIntent({
                        clientSecret: client_secret
                    }).then(data => {
                        if (data.status == 'requires_confirmation') {
                            axios.post(`https://us-central1-perch-01.cloudfunctions.net/buyPerchKilometers`, { ...toSend, paymentIntentId: id, status: 'confirm_payment' })
                                .then((result_) => {
                                    const status_ = result_.data.status;
                                    if (status_ == 'succeeded') {
                                        this.setState({ paymentCompleted: true })
                                    }
                                })
                                .catch(error => {
                                    this.setState({ paymentError: true, paymentErrorMessage: error.message });
                                })
                        }
                    }).catch(error => {
                        this.setState({ paymentError: true, paymentErrorMessage: error.message });
                    })
                }
            })
            .catch(error => {
                this.setState({ paymentError: true, paymentErrorMessage: error.message });
            });
    });
};
export function formatDateAllValues(d) {
    return d.getFullYear().toString() + "/" + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "/" + (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " - " + formatAMPM(d).toUpperCase();
};
export function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
};
export function cancelledTripResolver(toSend) {
    axios.post(`https://us-central1-perch-01.cloudfunctions.net/cancelledTripResolver`, toSend)
        .then(() => {
            let newResult = this.state.result;
            delete newResult[toSend.cancelled_UNRESOLVED_KEY];
            this.setState({
                currentData: null,
                refundRiderAmount: '',
                refundRiderPerchKms: '',
                payFirstDriver: '',
                paySecondDriver: '',
                payThirdDriver: '',
                adminCut: '',
                result: newResult,
                loading: false,
            })
        }).catch(error => { alert(error.message); })

};
export function pendingProcessesFunction(toSend) {
    this.setState({ loading: true, errorMessage: '' }, () => {
        axios.post(`https://us-central1-perch-01.cloudfunctions.net/pendingProcesses`, toSend)

            .then((data) => {
                let newV = toSend.isNewProcess ? [] : this.state.listOfProcesses;
                const time = new Date().getTime()
                newV.push({
                    title: toSend.title,
                    details: toSend.details,
                    timeCreated: time,
                });
                this.setState({
                    addProcess: false,
                    isNewProcess: false,
                    viewList: true,
                    pushId: data.data,
                    title: '',
                    details: '',
                    loading: false,
                    listOfProcesses: newV,
                }, () => {
                    if (toSend.isNewProcess)
                        this.setState({ timeCreated: time })
                })
            }).catch(error => { alert(error.message); })
    });
};
export function pendingProcessesFunctionDelete(pushId) {
    this.setState({ loading1: true, }, () => {
        axios.post(`https://us-central1-perch-01.cloudfunctions.net/pendingProcessesDelete`, { pushId: pushId })
            .then(() => {
                let newV = { ...this.state.result };
                delete newV[pushId];
                this.setState({
                    result: newV,
                    loading1: false,
                    addProcess: false,
                    isNewProcess: false,
                    viewList: false,
                    pushId: '',
                    userID: '',
                    type: '',
                    listOfProcesses: [],
                    mainTopic: '',
                    title: '',
                    details: '',
                    errorMessage: '',
                })
            }).catch(error => { alert(error.message); })
    });
};