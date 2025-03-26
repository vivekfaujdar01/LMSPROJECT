// Handle signup form submission
function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    // Reset error messages
    resetErrors();

    // Validation
    let isValid = true;

    if (username.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters long.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (!isValid) return;

    // Simulate signup process
    const user = {
        isLoggedIn: true, // Automatically log in after signup
        username: username,
        email: email,
        borrowedBooks: []
    };

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('borrowedBooks', JSON.stringify([]));

    // Show success message and redirect
    message.classList.remove('text-gray-600', 'text-red-500');
    message.classList.add('text-green-600');
    message.textContent = 'Signup successful! Redirecting to homepage...';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show error message
function showError(elementId, text) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = text;
    errorElement.classList.remove('hidden');
}

// Reset error messages
function resetErrors() {
    const errors = ['usernameError', 'emailError', 'passwordError'];
    errors.forEach(id => {
        const errorElement = document.getElementById(id);
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
    });
    const message = document.getElementById('message');
    message.textContent = '';
    message.classList.remove('text-green-600', 'text-red-500');
    message.classList.add('text-gray-600');
}

// Real-time validation on input
document.getElementById('username').addEventListener('input', function() {
    const value = this.value.trim();
    if (value.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters long.');
    } else {
        document.getElementById('usernameError').classList.add('hidden');
    }
});

document.getElementById('email').addEventListener('input', function() {
    const value = this.value.trim();
    if (!validateEmail(value)) {
        showError('emailError', 'Please enter a valid email address.');
    } else {
        document.getElementById('emailError').classList.add('hidden');
    }
});

document.getElementById('password').addEventListener('input', function() {
    const value = this.value.trim();
    if (value.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
    } else {
        document.getElementById('passwordError').classList.add('hidden');
    }
});