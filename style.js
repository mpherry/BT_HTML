document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        // Perform login validation here (e.g., check against stored usernames and passwords)
        console.log(`Logging in with Username: ${username}, Password: ${password}`);
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        
        // Perform registration logic here (e.g., store new user data)
        console.log(`Registering with Username: ${username}, Email: ${email}, Password: ${password}`);
    });
});
