document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault( );
    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value.trim();

    // Initialize validation flag
    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Validate name
    if (name === '') {
        showError('name', 'Name is required');
        isValid = false;
    }

    // Validate email
    if (email === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Email is not valid');
        isValid = false;
    }

    // Validate phone
    if (phone === '') {
        showError('phone', 'Phone number is required');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('phone', 'Phone number is not valid');
        isValid = false;
    }

    // Validate date
    if (date === '') {
        showError('date', 'Preferred date is required');
        isValid = false;
    }

    // Validate time
    if (time === '') {
        showError('time', 'Preferred time is required');
        isValid = false;
    }

    // If all fields are valid, show confirmation
    if (isValid) {
        document.getElementById('confirmation').classList.remove('hidden');
        this.reset(); // Reset form fields after submission
    }
});

// Function to show error messages
function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    inputElement.parentElement.appendChild(errorElement);
}

// Function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}

// Function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate phone number
function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/; // Example pattern for 10-digit phone number
    return phonePattern.test(phone);
}
