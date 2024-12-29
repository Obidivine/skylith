document.getElementById("nextButton").addEventListener("click", () => {
    const personalInfo = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value || "N/A",
        lastName: document.getElementById("lastName").value,
        accountType: document.getElementById("accountType").value,
        country: document.getElementById("country").value,
    };

    fetch("http://your-backend-server/submit-personal-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personalInfo),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data submitted successfully:", data);
        window.location.href = "page2.html"; // Navigate to next page
    })
    .catch(error => console.error("Error:", error));
});
// Navigation function for buttons
function goToPage(page) {
  window.location.href = page;
}
// Navigation function
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