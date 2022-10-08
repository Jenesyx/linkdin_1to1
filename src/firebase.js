import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDs8qJsfkrt3P1ef64qVjtmfM198hiY0Fg",
    authDomain: "linkdin-1to1.firebaseapp.com",
    projectId: "linkdin-1to1",
    storageBucket: "linkdin-1to1.appspot.com",
    messagingSenderId: "835294232505",
    appId: "1:835294232505:web:0ee1fd4453b88fd0ac8068"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db , auth}