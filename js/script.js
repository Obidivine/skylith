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