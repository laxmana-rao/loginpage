function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the loader
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Simulate a login process (you can replace this with actual authentication logic)
    setTimeout(() => {
        // Hide the loader
        loader.style.display = 'none';

        // Get the username and password values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (you can replace this with actual validation)
        if (username === "admin" && password === "password") {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid username or password.");
        }
    }, 2000); // Simulate a 2-second delay for the login process
}
