// -------------------------------
// FORM VALIDATION
// -------------------------------
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from submitting

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Custom validation rules
  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters long.";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters long.";
    message.style.color = "red";
    return;
  }

  // If everything is valid
  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});


// -------------------------------
// FEATURE 1: Change Background Color
// -------------------------------
document.getElementById("colorBtn").addEventListener("click", function() {
  // Generate random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
});


// -------------------------------
// FEATURE 2: Click Counter
// -------------------------------
let count = 0;
document.getElementById("countBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});
