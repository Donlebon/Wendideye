import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdl0WfQPbnPPgy77ff6TXq2hfqB31sXN0",
    authDomain: "wendideye.firebaseapp.com",
    projectId: "wendideye",
    storageBucket: "wendideye.appspot.com",
    messagingSenderId: "450992917439",
    appId: "1:450992917439:web:d51474e7cf03f39e8d6f0a"
};

// initialize firebase

firebase.initializeApp(firebaseConfig)

// Initialize Firestore

const projectFirestore = firebase.firestore()

export {projectFirestore}