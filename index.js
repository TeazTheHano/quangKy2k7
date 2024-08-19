/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlGyMCHumJCKhoFUTu8O3AuyAds2sE7o4",
    // TODO: use evn variable for this api
    authDomain: "quangky2k7.firebaseapp.com",
    projectId: "quangky2k7",
    storageBucket: "quangky2k7.appspot.com",
    messagingSenderId: "6896856820",
    appId: "1:6896856820:web:5b97a268b9afdc35bdf8a1",
    measurementId: "G-KLT0FCVBEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// FIXME: getAnalytics is not a function
// const analytics = getAnalytics(app).isSupported();
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

AppRegistry.registerComponent(appName, () => App);
