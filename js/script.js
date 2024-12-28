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