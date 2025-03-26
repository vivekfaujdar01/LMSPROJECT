// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Reset error messages
    resetErrors();

    // Validation
    let isValid = true;

    if (name.length < 2) {
        showError('nameError', 'Name must be at least 2 characters long.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (subject.length < 3) {
        showError('subjectError', 'Subject must be at least 3 characters long.');
        isValid = false;
    }

    if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters long.');
        isValid = false;
    }

    if (!isValid) return;

    // Simulate form submission (e.g., storing or sending to a backend)
    const feedback = {
        name,
        email,
        subject,
        message,
        submittedAt: new Date().toISOString()
    };

    // For demo purposes, store in localStorage (replace with API call in production)
    const existingFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    existingFeedback.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(existingFeedback));

    // Show success message
    feedbackMessage.classList.remove('text-gray-600', 'text-red-500');
    feedbackMessage.classList.add('text-green-600');
    feedbackMessage.textContent = 'Thank you for your feedback! We’ll get back to you soon.';

    // Reset form
    document.getElementById('contactForm').reset();

    // Clear message after 3 seconds
    setTimeout(() => {
        feedbackMessage.textContent = '';
        feedbackMessage.classList.remove('text-green-600');
        feedbackMessage.classList.add('text-gray-600');
    }, 3000);
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
    const errors = ['nameError', 'emailError', 'subjectError', 'messageError'];
    errors.forEach(id => {
        const errorElement = document.getElementById(id);
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
    });
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.textContent = '';
    feedbackMessage.classList.remove('text-green-600', 'text-red-500');
    feedbackMessage.classList.add('text-gray-600');
}

// Real-time validation on input
document.getElementById('name').addEventListener('input', function() {
    const value = this.value.trim();
    if (value.length < 2) {
        showError('nameError', 'Name must be at least 2 characters long.');
    } else {
        document.getElementById('nameError').classList.add('hidden');
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

document.getElementById('subject').addEventListener('input', function() {
    const value = this.value.trim();
    if (value.length < 3) {
        showError('subjectError', 'Subject must be at least 3 characters long.');
    } else {
        document.getElementById('subjectError').classList.add('hidden');
    }
});

document.getElementById('message').addEventListener('input', function() {
    const value = this.value.trim();
    if (value.length < 10) {
        showError('messageError', 'Message must be at least 10 characters long.');
    } else {
        document.getElementById('messageError').classList.add('hidden');
    }
});