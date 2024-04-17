import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDK37sXgM42LnkdjdCA4B0kJFvEllO3G8",
  authDomain: "react-glasses-84883.firebaseapp.com",
  projectId: "react-glasses-84883",
  storageBucket: "react-glasses-84883.appspot.com",
  messagingSenderId: "703479523956",
  appId: "1:703479523956:web:c4ce4908b84ebeaa7dff21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initilize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export default auth;