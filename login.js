document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Simple validation for non-empty fields
    if (email === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // For now, just log the credentials (You would send them to a server in a real application)
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);

    // Simulate successful login
    alert("Login successful!");

    // You can redirect or take other actions after a successful login
    // window.location.href = 'homepage.html'; // Redirect to homepage
});
