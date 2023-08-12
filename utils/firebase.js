import "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import localforage from "localforage";

const firebaseCloudMessaging = {
    init: async () => {
        // Initialize the Firebase app with the credentials
        const app = initializeApp({
            apiKey: "AIzaSyB8_aE1ZnWM4WZQMLwQDWXAFIgTdYsgyDE",
            authDomain: "stackoverflow-393008.firebaseapp.com",
            projectId: "stackoverflow-393008",
            storageBucket: "stackoverflow-393008.appspot.com",
            messagingSenderId: "158373193437",
            appId: "1:158373193437:web:4d5f788757ced6e6ea9d34",
            measurementId: "G-K0ZY0RL43N"
        });

        try {
            const messaging = getMessaging(app)
            const tokenInLocalForage = await localforage.getItem("fcm_token");

            // Return the token if it is alredy in our local storage
            if (tokenInLocalForage !== null) {
                return tokenInLocalForage;
            }

            // Request the push notification permission from browser
            const status = await Notification.requestPermission();
            if (status && status === "granted") {
                // Get new token from Firebase
                const fcm_token = await getToken(messaging, {
                    vapidKey: "BJ8H374VJBO5XgXOmwmvbAfos7ymGvoaQqMWAVdQMYmAPjxZCGiiYmrm6mXczZYo3SWM68lc8eIfMoNp4zLdsq0",
                });

                // Set token in our local storage
                if (fcm_token) {
                    localforage.setItem("fcm_token", fcm_token);
                    return fcm_token;
                }
            }
        } catch (error) {
            console.error(error);
            return null;
        }

    },
};
export { firebaseCloudMessaging };