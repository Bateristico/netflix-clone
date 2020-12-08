import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//deleted export for seed <-

// seed the database

// we need config here
const config = {
    apiKey: "AIzaSyCp0DC-3FvusN1XuSb5TvE5pI2TcM6xYGg",
    authDomain: "netflix-clone-8e5f4.firebaseapp.com",
    databaseURL: "https://netflix-clone-8e5f4.firebaseio.com",
    projectId: "netflix-clone-8e5f4",
    storageBucket: "netflix-clone-8e5f4.appspot.com",
    messagingSenderId: "653161307569",
    appId: "1:653161307569:web:72846d8fac72a08e347190"
};

const firebase = Firebase.initializeApp(config);

//deleted seedDatabase 


export { firebase };
