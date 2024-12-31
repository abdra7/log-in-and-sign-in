// Select form elements
const form = document.getElementById('authForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
const togglePassword = document.getElementById('togglePassword');

// Login button functionality
loginBtn.addEventListener('click', () => {
  if (validateForm()) {
    alert(`Welcome back, ${username.value}!`);
    form.reset(); // Reset form fields
  }
});

// Sign Up button functionality
signupBtn.addEventListener('click', () => {
  if (validateForm()) {
    alert(`Account created for ${username.value}.`);
    form.reset();
  }
});

// Forgot Password button functionality
forgotPasswordBtn.addEventListener('click', () => {
  alert('Password recovery link has been sent to your email.');
});

// Password visibility toggle
togglePassword.addEventListener('click', () => {
  const type = password.type === 'password' ? 'text' : 'password';
  password.type = type;
  togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

// Validate form fields
function validateForm() {
  if (username.value.trim() === '') {
    alert('Please enter your username.');
    return false;
  }
  if (password.value.trim() === '') {
    alert('Please enter your password.');
    return false;
  }
  return true;
}
