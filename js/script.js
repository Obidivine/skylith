document.getElementById("next-button").addEventListener("click", () => {
    const form = document.getElementById("personal-info-form");
    const formData = new FormData(form);

    // Collect input data for viewing
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    console.log("User Input:", userData);

    // Simulate navigation to the next page
    alert("Proceeding to the next page...");
    window.location.href = "page2.html";
});
// Navigation Buttons
document.getElementById('previous-button').addEventListener('click', () => {
    window.location.href = 'index.html'; // Replace with the actual path to the first page
});

document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Capture User Input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validation (Optional)
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Store Data in Local Storage (For Now)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Proceed to Next Page
    window.location.href = 'page3.html'; // Replace with the actual path to the third page
});