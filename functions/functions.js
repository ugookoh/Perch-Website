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
                        firebase.database().ref(`users/${userID}/summarizedHistory`).once('value', snapshot => {
                            if (snapshot.val().phoneVerified == true)
                                Router.push('/s/db/udash').then(() => window.scrollTo(0, 0));
                            else
                                this.setState({ displayVerification: true, loading: false });
                        }).catch(error => { console.log(error.message) });

                    }
                    else if (type == 'driver') {
                        const userID = firebase.auth().currentUser.uid;
                        firebase.database().ref(`users/${userID}/summarizedHistory`).once('value', snapshot => {
                            if (snapshot.val().phoneVerified == true && snapshot.val().emailVerified == true)
                                firebase.database().ref(`users/${userID}/driverVerified`).once('value', snap => {
                                    if (snap.val() == 'VERIFIED')
                                        Router.push('/s/db/ddash').then(() => window.scrollTo(0, 0));
                                    else
                                        Router.push('/s/db/d_app_dash').then(() => window.scrollTo(0, 0));
                                }).catch(error => { console.log(error.message) })
                            else
                                this.setState({ displayVerification: true, loading: false });
                        }).catch(error => { console.log(error.message) });
                    }
                })
                .catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false }) });
        }).catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false }) });
    })
}

export function signUp(firstName, lastName, email, phoneNumber, password) {

    this.setState({ error: false, errorMessage: '', loading: true }, () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                const userID = firebase.auth().currentUser.uid;
                axios.post('https://us-central1-perch-01.cloudfunctions.net/createUserDetails', { firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, userID: userID })
                    .then((result => {
                        if (result.data == 'COMPLETE')
                            this.setState({ displayVerification: true, loading: false });
                    }))
                    .catch(error => { this.setState({ errorMessage: error.message, loading: false }) });
            }).catch(error => { this.setState({ error: true, errorMessage: error.message, loading: false }) });
    })
};

export function signOut(doNotReroute) {
    firebase.auth().signOut()
        .then(() => {
            if (!doNotReroute)
                Router.push('/');
        })
        .catch(error => { console.log(error.message) })
}

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
                    }
                }).then(() => {
                    this.setState({ topic: 'unselected', message: '', loading: false }, () => { this.loadResult() })
                }).catch(error => { console.log(error.message) });
            }
            else
                firebase.database().ref(`userFeedbackEmail`).update({
                    [makeid(5)]: {
                        body: this.state.message,
                        subject: this.state.topic,
                        status: 'UNPROCESSED',
                        date: getDate(),
                        email: this.state.userEmail,
                    }
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
                        firebase.database().ref(`users/${userID}`).remove().catch(error => { console.log(error.message) });
                        firebase.database().ref(`deletedAccountReasons`).update({
                            [userID]: {
                                reason: this.state.deleteAccountReason,
                                reviewed: false,
                                userDetails: this.state.userDetails,
                            },
                        }).catch(error => { console.log(error.message) })
                    })
                    .catch(error => this.setState({ errorMessage: error.message, loading: false, password1: '' }));
            })
            .catch(error => this.setState({ errorMessage: error.message, loading: false, password1: '' }));
    })
};

//MAKE A RANDOMID
export function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `${new Date().getTime()}${result}`;
};

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

function deg2rad(deg) {
    return deg * (Math.PI / 180)
};
