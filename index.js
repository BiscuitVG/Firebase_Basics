// index.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

const getLoginInfo = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert(`Logged in as ${user.email}`);
    })
    .catch((error) => {
      alert(error.message);
    });
};

document.querySelector(".loginBtn").onclick = function() {
  getLoginInfo();
};
