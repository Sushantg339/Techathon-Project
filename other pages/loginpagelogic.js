document.getElementById('signupButton').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    // Add new user to local storage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful! You can now log in.');
    
    // Clear form
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupPassword').value = '';
});

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful! Welcome, ' + username);
        // Redirect or perform other actions
    } else {
        alert('Invalid username or password. Please try again.');
    }

    // Clear form
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
});

// Toggle between login and signup forms
document.getElementById('toggleFormButton').addEventListener('click', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    
    signupForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
    
    this.textContent = this.textContent.includes('Login') ? 'Switch to Signup' : 'Switch to Login';
});
