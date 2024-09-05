document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const fatherName = document.getElementById('fn').value.trim();
        const motherName = document.getElementById('mn').value.trim();
        const age = document.getElementById('age').value.trim();
        const address = document.getElementById('ad').value.trim();
        const course = document.getElementById('course').value.trim(); // Make sure ID matches form input

        // Simple validation
        if (name === '' || email === '' || fatherName === '' || motherName === '' || age === '' || address === '' || course === '') {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validateAge(age)) {
            alert('Age must be a number greater than 18.');
            return;
        }

        if (!validateAddress(address)) {
            alert('Address must be more than 20 characters long.');
            return;
        }

        // Form submission logic (e.g., AJAX request) can go here
        alert('Registration successful!');
        form.reset(); // Optionally reset the form
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validateAge(age) {
        // Ensure age is a number and greater than 18
        const ageNumber = parseInt(age, 10);
        return !isNaN(ageNumber) && ageNumber > 18;
    }

    function validateAddress(address) {
        // Ensure address length is greater than 20 characters
        return address.length > 20;
    }
});
