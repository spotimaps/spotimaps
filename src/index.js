import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

firebase.initializeApp({
    apiKey: "AIzaSyBwYM4XJ0a_SwikgEaAXFIm5WCvG4x623k",
    authDomain: "spotimaps-44ae9.firebaseapp.com",
    databaseURL: "https://spotimaps-44ae9.firebaseio.com",
    projectId: "spotimaps-44ae9",
    storageBucket: "spotimaps-44ae9.appspot.com",
    messagingSenderId: "230927739844",
    appId: "1:230927739844:web:819c98bc082e1bd1015291",
    measurementId: "G-4D8G2Y42EX"

});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
