importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyB8_aE1ZnWM4WZQMLwQDWXAFIgTdYsgyDE",
    authDomain: "stackoverflow-393008.firebaseapp.com",
    projectId: "stackoverflow-393008",
    storageBucket: "stackoverflow-393008.appspot.com",
    messagingSenderId: "158373193437",
    appId: "1:158373193437:web:4d5f788757ced6e6ea9d34",
});

const messaging = firebase.messaging();