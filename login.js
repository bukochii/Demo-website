// Google sign‑in click
document.querySelector('.google-btn').addEventListener('click', () => {
    // TODO: wire this to your OAuth endpoint
    window.location.href = '/auth/google';
  });
  
  // Email/password form submission
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }
  
    // TODO: replace with real auth
    console.log('Logging in with:', email, password);
    alert('Login successful (demo)');
  });
  
  // “Forgot?” link
  document.querySelector('.forgot').addEventListener('click', e => {
    e.preventDefault();
    alert('Redirecting to password recovery...');
  });
  
  
  