const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');


signUpButton.addEventListener('click', function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});


signInButton.addEventListener('click', function() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});


signUpForm.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('Phone').value;

    if (firstName && lastName && email && password && phone) {
       
        alert('Registration successful! Please log in with your credentials.');

        signUpForm.style.display = "none";
        signInForm.style.display = "block";
    } else {
        alert('Please fill out all the fields.');
    }
});
