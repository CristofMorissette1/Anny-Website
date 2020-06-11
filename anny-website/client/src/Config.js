import firebase from 'firebase';


export const firebaseConfig = {
    apiKey: "AIzaSyDKKdHZbUGZefcMB7pEy1VEM-Mhryxgz5g",
    authDomain: "anny-site-personelle.firebaseapp.com",
    databaseURL: "https://anny-site-personelle.firebaseio.com",
    projectId: "anny-site-personelle",
    storageBucket: "anny-site-personelle.appspot.com",
    messagingSenderId: "357002400057",
    appId: "1:357002400057:web:b014779c8ca67e322418e8",
    measurementId: "G-K14RZ7XVVR"
  };

  const FbApp = firebase.initializeApp(firebaseConfig)

  export default FbApp