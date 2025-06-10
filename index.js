const getLoginInfo = function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
};

document.querySelector(".loginBtn").onclick = function() {
  getLoginInfo();
};