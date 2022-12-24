// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxN5qOOvVOLophcUZrXwf4ckigzFO5k-w",
    authDomain: "techmaxa.firebaseapp.com",
    projectId: "techmaxa",
    storageBucket: "techmaxa.appspot.com",
    messagingSenderId: "712594064693",
    appId: "1:712594064693:web:fb227e4c68fd6542d0f87c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;