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