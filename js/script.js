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
    window.location.href = 'page1.html'; // Navigate to the first page
});

document.getElementById('next-button').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Capture User Input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Store Data in Local Storage (Temporary Solution)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Navigate to the Third Page
    window.location.href = 'page3.html'; // Navigate to the third page
});