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

signUpForm.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const mail = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const phone = document.getElementById('Phone').value;

    const user = {
        first_name: firstName,
        last_name: lastName,
        email: mail,
        mobileNumber: phone,
        password: pass
    }

    console.log(user)

    if (firstName && lastName && mail && pass && phone) {
        try {
            const response = await fetch('http://localhost:8088/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const data = await response.json(); 
            console.log(response);
            if (response.status === 201) {
                alert("User Registered Successfully");
                signUpForm.style.display = "none";
                signInForm.style.display = "block";
            } else {
                alert(data.message || 'Registration failed.');
            }
        } catch (error) {
            alert(error);
        }

    } else {
        alert('Please fill out all the fields.');
    }
});


signInForm.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault(); 

    const mail = document.getElementById('LoginEmail').value;
    const pass = document.getElementById('LoginPassword').value;
    const loginData = {
        email: mail,
        password: pass
    };

    console.log(loginData);
    try {
        const response = await fetch('http://localhost:8088/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        const result = await response.text();
        console.log(result);
        if (response.ok) {
            alert("Login Successful");
            window.location.href = "Homepage.html";
        } else {
            alert(`Error: ${result}`);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});
