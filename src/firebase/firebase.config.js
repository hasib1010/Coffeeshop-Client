// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxCsJYI-2G5I4U56AXFWw-HSafShL6Vgo",
  authDomain: "coffeeshop-auth.firebaseapp.com",
  projectId: "coffeeshop-auth",
  storageBucket: "coffeeshop-auth.appspot.com",
  messagingSenderId: "508549957203",
  appId: "1:508549957203:web:8d48ea9604746715f5a8a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;