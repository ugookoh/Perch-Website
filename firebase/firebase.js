// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZ3CufY3xl6dyv2whIZ_-VWQLQ3_IRh0c",
    authDomain: "perch-01.firebaseapp.com",
    databaseURL: "https://perch-01.firebaseio.com",
    projectId: "perch-01",
    storageBucket: "perch-01.appspot.com",
    messagingSenderId: "89897349326",
    appId: "1:89897349326:web:fc38609d8f58e32818609f",
    measurementId: "G-RKPPQQ9LNM"
};
if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

export default firebase;