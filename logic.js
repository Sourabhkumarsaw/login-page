document.addEventListener("DOMContentLoaded", function() {
 const usernameinput = document.getElementById('username');
 const emailinput = document.getElementById('email');
 const passwordinput = document.getElementById('password');
 const confirmPassword = document.getElementById('repassword');
 const registerButton = document.getElementById('registerButton');
 const mobile = document.getElementById('Number');
      
 
 registerButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (!emailinput.checkValidity()) {
        alert("Please enter a valid email.");
        return;
    }

    const username = usernameinput.value.trim();
    const email = emailinput.value.trim();
    const password = passwordinput.value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful!");
});
});
