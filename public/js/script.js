$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").addClass("complate");
  });
  // Show input password1
  const showPassword = document.querySelector("#show-password");
  const passwordField = document.querySelector("#Password");

  showPassword.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
  });
  // Show input password2
  const showPassword2 = document.querySelector("#show-password2");
  const passwordField2 = document.querySelector("#Password2");

  showPassword2.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type =
      passwordField2.getAttribute("type") === "password" ? "text" : "password";
    passwordField2.setAttribute("type", type);
  });
  // Show input password3
  const showPassword3 = document.querySelector("#show-password3");
  const passwordField3 = document.querySelector("#Password3");

  showPassword3.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type =
      passwordField3.getAttribute("type") === "password" ? "text" : "password";
    passwordField3.setAttribute("type", type);
  });
  // Show input password4
  const showPassword4 = document.querySelector("#show-password4");
  const passwordField4 = document.querySelector("#Password4");

  showPassword4.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type =
      passwordField4.getAttribute("type") === "password" ? "text" : "password";
    passwordField4.setAttribute("type", type);
  });
  // Show input password5
  const showPassword5 = document.querySelector("#show-password5");
  const passwordField5 = document.querySelector("#Password5");

  showPassword5.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type =
      passwordField5.getAttribute("type") === "password" ? "text" : "password";
    passwordField5.setAttribute("type", type);
  });
  // MESSAGE INPUT
  const textarea = document.querySelector(".chatbox-message-input");
  const chatboxForm = document.querySelector(".chatbox-message-form");

  textarea.addEventListener("input", function () {
    let line = textarea.value.split("\n").length;

    if (textarea.rows < 6 || line < 6) {
      textarea.rows = line;
    }

    if (textarea.rows > 1) {
      chatboxForm.style.alignItems = "flex-end";
    } else {
      chatboxForm.style.alignItems = "center";
    }
  });

  // TOGGLE CHATBOX
  const chatboxToggle = document.querySelector(".chatbox-toggle");
  const chatboxMessage = document.querySelector(".chatbox-message-wrapper");

  chatboxToggle.addEventListener("click", function () {
    chatboxMessage.classList.toggle("show");
  });

  // DROPDOWN TOGGLE
  const dropdownToggle = document.querySelector(
    ".chatbox-message-dropdown-toggle"
  );
  const dropdownMenu = document.querySelector(".chatbox-message-dropdown-menu");

  dropdownToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (
      !e.target.matches(
        ".chatbox-message-dropdown, .chatbox-message-dropdown *"
      )
    ) {
      dropdownMenu.classList.remove("show");
    }
  });

  // CHATBOX MESSAGE
  const chatboxMessageWrapper = document.querySelector(
    ".chatbox-message-content"
  );
  const chatboxNoMessage = document.querySelector(
    ".chatbox-message-no-message"
  );

  chatboxForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (isValid(textarea.value)) {
      writeMessage();
      setTimeout(autoReply, 1000);
    }
  });

  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }

  function writeMessage() {
    const today = new Date();
    let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea.value.trim().replace(/\n/g, "<br>\n")}
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(
      today.getMinutes()
    )}</span>
		</div>
	`;
    chatboxMessageWrapper.insertAdjacentHTML("beforeend", message);
    chatboxForm.style.alignItems = "center";
    textarea.rows = 1;
    textarea.focus();
    textarea.value = "";
    chatboxNoMessage.style.display = "none";
    scrollBottom();
  }

  function autoReply() {
    const today = new Date();
    let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Hi , How can i help you?
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(
      today.getMinutes()
    )}</span>
		</div>
	`;
    chatboxMessageWrapper.insertAdjacentHTML("beforeend", message);
    scrollBottom();
  }

  function scrollBottom() {
    chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight);
  }

  function isValid(value) {
    let text = value.replace(/\n/g, "");
    text = text.replace(/\s/g, "");

    return text.length > 0;
  }
});

// Sticky navbar
$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 50) {
    $(".sticky").addClass("stickyadd");
  } else {
    $(".sticky").removeClass("stickyadd");
  }
});
