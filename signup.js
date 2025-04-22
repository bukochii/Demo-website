// Show/hide form
function showForm() {
    document.getElementById('signupForm').style.display = 'block';
  }
  
  // Form submission handler
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Validate form fields
    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;
  
    if (!name || !username || !email || !password || !terms) {
      alert('Please fill out all fields and agree to the terms.');
      return;
    }
  
    // Here you would typically send data to your backend
    alert('Account created successfully!');
  });