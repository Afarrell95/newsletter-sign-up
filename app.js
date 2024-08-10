// Select elements
let subscribe = document.querySelector(".subscribe");
let emailInput = document.querySelector("#email-name");
let displayName = document.querySelector(".display-name");
let success = document.querySelector(".success-section");
let main = document.querySelector("main-section");

// Add click event listener to the subscribe button
subscribe.addEventListener("click", (event) => {
  event.preventDefault();
  let emailValue = emailInput.value.trim(); // Get the value from the input and trim whitespace

  // Validate email and show/hide sections accordingly
  if (isValidEmail(emailValue)) {
    success.style.display = "block";
    main.style.display = "none";
  } else {
    alert("Please enter a valid email address."); // Optionally handle invalid email
  }
});

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
