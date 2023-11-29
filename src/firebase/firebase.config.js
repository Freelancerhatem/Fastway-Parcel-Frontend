// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCOTQIjtKbQJ0i5Yp-owadTIyd59kFgNBY",
  authDomain: "fastway-parcel.firebaseapp.com",
  projectId: "fastway-parcel",
  storageBucket: "fastway-parcel.appspot.com",
  messagingSenderId: "956298028327",
  appId: "1:956298028327:web:fcc0730fce1303385af502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);