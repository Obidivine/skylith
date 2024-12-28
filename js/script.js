// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Store the form elements for each page
    const page1Form = document.getElementById("page1-form");
    const page2Form = document.getElementById("page2-form");
    const page3Form = document.getElementById("page3-form");
    const page4Form = document.getElementById("page4-form");

    // Navigation functions for next and previous buttons
    const previousButtons = document.querySelectorAll(".previous");
    const nextButtons = document.querySelectorAll(".next");

    previousButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            navigatePrevious();
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            navigateNext();
        });
    });

    // For page 1: Show account type popup
    const accountTypeButton = document.getElementById("account-type");
    const accountTypePopup = document.getElementById("account-type-popup");
    const accountTypeSelect = document.getElementById("account-type-select");

    accountTypeButton.addEventListener("click", function() {
        accountTypePopup.classList.toggle("show");
    });

    accountTypeSelect.addEventListener("change", function() {
        document.getElementById("account-type-display").innerText = accountTypeSelect.value;
        accountTypePopup.classList.remove("show");
    });

    // Form validation and submission
    function validatePage1() {
        const fullName = document.getElementById("full-name").value;
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;

        // Simple validation for first and last names
        if (!firstName || !lastName) {
            alert("Please enter your full name.");
            return false;
        }

        return true;
    }

    function validatePage2() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Simple validation for email and passwords
        if (!email || !password || password !== confirmPassword) {
            alert("Please fill out all fields correctly.");
            return false;
        }

        return true;
    }

    function validatePage3() {
        const ssn = document.getElementById("ssn").value;
        const ssnConfirm = document.getElementById("ssn-confirm").value;

        // Validate SSN fields
        if (!ssn || ssn !== ssnConfirm) {
            alert("Please ensure your SSN is correct.");
            return false;
        }

        return true;
    }

    function validatePage4() {
        const ssn = document.getElementById("ssn").value;
        const dob = document.getElementById("dob").value;

        // Validate fields for SSN and Date of Birth
        if (!ssn || !dob) {
            alert("Please fill out all fields.");
            return false;
        }

        return true;
    }

    // Handle page navigation and form validation
    function navigatePrevious() {
        const currentPage = document.querySelector(".page.active");
        const previousPage = currentPage.previousElementSibling;

        if (currentPage.id === "page1" && !validatePage1()) return;
        if (currentPage.id === "page2" && !validatePage2()) return;
        if (currentPage.id === "page3" && !validatePage3()) return;
        if (currentPage.id === "page4" && !validatePage4()) return;

        currentPage.classList.remove("active");
        previousPage.classList.add("active");
    }

    function navigateNext() {
        const currentPage = document.querySelector(".page.active");
        const nextPage = currentPage.nextElementSibling;

        if (currentPage.id === "page1" && !validatePage1()) return;
        if (currentPage.id === "page2" && !validatePage2()) return;
        if (currentPage.id === "page3" && !validatePage3()) return;
        if (currentPage.id === "page4" && !validatePage4()) return;

        currentPage.classList.remove("active");
        nextPage.classList.add("active");
    }

    // Handle file uploads
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener("change", function() {
            const label = input.nextElementSibling;
            if (input.files.length > 0) {
                label.innerText = input.files[0].name;
            } else {
                label.innerText = "Choose a file";
            }
        });
    });
});
function navigateNext() {
    const currentPage = document.querySelector(".page.active");
    const nextPage = currentPage.nextElementSibling;

    if (currentPage.id === "page1" && !validatePage1()) return;
    if (currentPage.id === "page2" && !validatePage2()) return;
    if (currentPage.id === "page3" && !validatePage3()) return;
    if (currentPage.id === "page4" && !validatePage4()) return;

    currentPage.classList.remove("active");
    nextPage.classList.add("active");
}

function navigatePrevious() {
    const currentPage = document.querySelector(".page.active");
    const previousPage = currentPage.previousElementSibling;

    if (currentPage.id === "page1" && !validatePage1()) return;
    if (currentPage.id === "page2" && !validatePage2()) return;
    if (currentPage.id === "page3" && !validatePage3()) return;
    if (currentPage.id === "page4" && !validatePage4()) return;

    currentPage.classList.remove("active");
    previousPage.classList.add("active");
}
// Navigation functions for next and previous buttons
const previousButtons = document.querySelectorAll(".previous");
const nextButtons = document.querySelectorAll(".next");

previousButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        navigatePrevious();
    });
});

nextButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        navigateNext();
    });
});