const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Form 
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username.length < 3) {
    showMessage("Username must be at least 3 characters.", "red");
    return;
  }

  if (username.length > 10) {
    showMessage("Username must not be more than 10 characters.", "red");
    return;
  }

  if (!email.includes("@")) {
    showMessage("Invalid email format.", "red");
    return;
  }

  if (password.length < 6) {
    showMessage("Password must be at least 6 characters.", "red");
    return;
  }

  showMessage("Registration successful!", "green");
});

//feedback
function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

// Reset button 
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  form.reset();
  showMessage("", "black");
});

// Event Bubbling & Capturing
const outerDiv = document.getElementById("outerDiv");
const innerBtn = document.getElementById("innerBtn");

// Inner button
innerBtn.addEventListener("click", () => {
  console.log("Button Clicked");
});

// Bubbling (default)
outerDiv.addEventListener("click", () => {
  console.log("Div Clicked -Bubbling-");
});

// Capturing
outerDiv.addEventListener("click", () => {
  console.log("Div Clicked -Capturing-");
}, { capture: true });
