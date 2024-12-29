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