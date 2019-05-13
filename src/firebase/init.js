import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyD2024xw9M66Q0JgXq4N-fS_R_ja7ohv_0",
    authDomain: "puku-crm-2.firebaseapp.com",
    databaseURL: "https://puku-crm-2.firebaseio.com",
    projectId: "puku-crm-2",
    storageBucket: "puku-crm-2.appspot.com",
    messagingSenderId: "567874726875"
 };

 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({ timestampsInSnapshots:true})

 export default firebaseApp.firestore()
