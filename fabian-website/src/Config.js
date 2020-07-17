import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAq0bSLL9RAdCoZceZHakIy15P8WoelpKY",
    authDomain: "fabians-project.firebaseapp.com",
    databaseURL: "https://fabians-project.firebaseio.com",
    projectId: "fabians-project",
    storageBucket: "fabians-project.appspot.com",
    messagingSenderId: "888422976092",
    appId: "1:888422976092:web:a4b3403ddf285c5260b499",
    measurementId: "G-Y5FGFGBN9D"
};


const fire = firebase.initializeApp(firebaseConfig)
export default fire; 