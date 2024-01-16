// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI416EdfwCtHBclONr7ZAqA-BJRKWXISI",
    authDomain: "explore-fire-auth-context-twin.firebaseapp.com",
    projectId: "explore-fire-auth-context-twin",
    storageBucket: "explore-fire-auth-context-twin.appspot.com",
    messagingSenderId: "528163605615",
    appId: "1:528163605615:web:ceae638129fef37dc0119a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;