// Handle login form submission
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    // Reset error messages
    resetErrors();

    // Validation
    let isValid = true;

    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (!isValid) return;

    // Check user data in localStorage
    const storedUser = JSON.parse(localStorage.getItem('user')) || {};
    if (storedUser.email === email) {
        // Simulate password check (since we don’t store password in this demo)
        const user = {
            isLoggedIn: true,
            username: storedUser.username,
            email: storedUser.email,
            borrowedBooks: JSON.parse(localStorage.getItem('borrowedBooks')) || []
        };

        // Update localStorage with logged-in state
        localStorage.setItem('user', JSON.stringify(user));

        // Show success message and redirect
        message.classList.remove('text-gray-600', 'text-red-500');
        message.classList.add('text-green-600');
        message.textContent = 'Login successful! Redirecting to homepage...';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        message.classList.remove('text-gray-600', 'text-green-600');
        message.classList.add('text-red-500');
        message.textContent = 'Invalid email or password.';
    }
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
    const errors = ['emailError', 'passwordError'];
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