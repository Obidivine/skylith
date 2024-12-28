function goToNextPage() {
    const form = document.getElementById('page1-form');
    const formData = new FormData(form);

    // Log data to console (for testing purposes)
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // Redirect to the next page
    window.location.href = 'page2.html';
}