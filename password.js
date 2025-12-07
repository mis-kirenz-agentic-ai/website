// ... your password prompt and validation logic ...

// Wrap the content in a function
function protectContent() {
    // Check if the user has already entered the correct password
    if (!localStorage.getItem('accessGranted')) {
        const password = prompt('Plese enter Password:');
        if (password === 'mis-agentic-25') {
            localStorage.setItem('accessGranted', true);
        } else {
            document.body.innerHTML = 'Wrong Password';
        }
    }
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', protectContent);
