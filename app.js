let subscribe = document.querySelector(".subscribe");
let emailInput = document.querySelector("#email-name");
let emailPlaceholder = document.querySelector("input[type=email]");
let displayName = document.querySelector(".display-name");
let success = document.querySelector(".success-section");
let main = document.querySelector(".main-section");
let dismiss = document.querySelector(".dismiss");
let validationMessage = document.querySelector(".validation-message");

subscribe.addEventListener("click", (event) => {
  event.preventDefault();
  let emailValue = emailInput.value.trim();
  if (isValidEmail(emailValue)) {
    success.style.display = "block";
    main.style.display = "none";
    displayName.innerHTML = emailInput.value;
  } else {
    emailInput.style.borderColor = "hsl(4, 50%, 67%)";
    emailInput.style.backgroundColor = "hsl(4, 100%, 95%)";
    emailInput.classList.add("invalid");
    validationMessage.style.display = "block";
  }
});

dismiss.addEventListener("click", () => {
  window.location.reload();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
