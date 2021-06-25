import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseContig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDoamin: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGA_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
}

firebase.initializeApp(firebaseContig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }