const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#Password");

showPassword.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});
