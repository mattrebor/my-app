import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyAuXIN73IV-VuDswzTxKjmfbcx9jjUZCtw",
    authDomain: "firegram-82150.firebaseapp.com",
    databaseURL: "https://firegram-82150.firebaseio.com",
    projectId: "firegram-82150",
    storageBucket: "firegram-82150.appspot.com",
    messagingSenderId: "886452136775",
    appId: "1:886452136775:web:8d909c3a43b61cbcd53a62",
    measurementId: "G-QQG8YLEEYF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};
