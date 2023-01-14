// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8jWdKDM20iKbrGlv0GtIueabvTY3YbMc",
  authDomain: "servicemanagementsystem-57b18.firebaseapp.com",
  projectId: "servicemanagementsystem-57b18",
  storageBucket: "servicemanagementsystem-57b18.appspot.com",
  messagingSenderId: "169477169574",
  appId: "1:169477169574:web:6d4f2b3c2905792468ef67",
  measurementId: "G-N1WBX12W7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;