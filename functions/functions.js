import firebase from 'firebase';
import Router from 'next/router';
import axios from 'axios';


export function signIn(email, password, type) {
    this.setState({ error: false, errorMessage: '', loading: true }, () => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    if (type == 'user')
                        Router.push('/s/db/udash').then(() => window.scrollTo(0, 0));
                    else if (type == 'driver')
                        Router.push('/s/db/ddash').then(() => window.scrollTo(0, 0));
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
        alert('Topic needed', 'Please pick a topic to contact us about. If you do not have one, please pick "Other"')
    else {
        this.setState({ loading: true }, () => {
            const userDetails = this.state.userDetails;
            firebase.database().ref(`userFeedback/${userDetails.userID}`).update({
                [new Date().getTime()]: {
                    body: this.state.message,
                    subject: this.state.topic,
                    status: 'UNPROCESSED',
                    date: getDate(),
                }
            }).then(() => {
                this.setState({ topic: 'unselected', form: '', loading: false })
            }).catch(error => { console.log(error.message) })
        })
    }
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