document.addEventListener("DOMContentLoaded", function() {
 const usernameinput = document.getElementById('username');
 const emailinput = document.getElementById('email');
 const passwordinput = document.getElementById('password');
 const registerButton = document.getElementById('registerButton');
 const mobile = document.getElementById('Number');
 const emailinput = document.getElementById('loginemail');
 const passwordinput = document.getElementById('loginpassword');
 const loginbtn = document.getElementById('loginbtn');
      
 
 registerButton.addEventListener("click", function () {
    
    const username = usernameinput.value.trim();
    const email = emailinput.value.trim();
    const password = passwordinput.value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful!");
 });

  /*
loginbtn.addEventListener("click", function (e) {
    e.preventDefault();
  
    const loginemail = emailinput.value.trim();
    const loginpassword = passwordinput.value;

    const storedemail = localStorage.getItem("email");
    const storedpassword = localStorage.getItem("password");

   

    if (loginemail === storedemail && loginpassword === storedpassword) {
        alert("Login Successful!");
    } else {
        alert("Invalid email or password.");
    }
});*/

});
