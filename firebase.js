// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCICA91WDdzT5nGoeSI3kfxd6lxlygsuIU",
  authDomain: "fir-frontend-31106.firebaseapp.com",
  projectId: "fir-frontend-31106",
  storageBucket: "fir-frontend-31106.firebasestorage.app",
  messagingSenderId: "1016152059017",
  appId: "1:1016152059017:web:868e7440eded13b580aa58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };