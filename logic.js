document.addEventListener("DOMContentLoaded", function() {
 const usernameinput = document.getElementById('username');
 const emailinput = document.getElementById('email');
 const passwordinput = document.getElementById('password');
 const confirmPassword = document.getElementById('confirmPassword');
 const registerButton = document.getElementById('registerButton');
 const mobile = document.getElementById('mobile');

 registerButton.addEventListener('click', function(){
    const username = usernameinput.value;
    const email =  emailinput.value;
    const password = passwordinput.value;

    
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('email', email)
        alert('Registration successful!');
    } else {
        alert('Please fill in all fields.');
    }
   
});
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


