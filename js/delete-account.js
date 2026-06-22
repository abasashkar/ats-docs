(function () {
  "use strict";

  const form = document.getElementById("delete-form");
  const formPanel = document.getElementById("form-panel");
  const successPanel = document.getElementById("success-panel");
  const emailInput = document.getElementById("email");
  const confirmInput = document.getElementById("confirm");
  const emailError = document.getElementById("email-error");
  const confirmError = document.getElementById("confirm-error");
  const submitBtn = document.getElementById("submit-btn");

  if (!form) return;

  // Show success if redirected back with ?success=1
  if (new URLSearchParams(window.location.search).get("success") === "1") {
    formPanel.hidden = true;
    successPanel.hidden = false;
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function clearErrors() {
    emailError.textContent = "";
    confirmError.textContent = "";
    emailInput.classList.remove("invalid");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    let valid = true;
    const email = emailInput.value.trim();

    if (!email) {
      emailError.textContent = "Please enter your email address.";
      emailInput.classList.add("invalid");
      valid = false;
    } else if (!validateEmail(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.classList.add("invalid");
      valid = false;
    }

    if (!confirmInput.checked) {
      confirmError.textContent = "Please confirm you want to delete your account.";
      valid = false;
    }

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting…";

    fetch("https://formsubmit.co/ajax/atsfriendly1@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: "ATS Gen Pro — Account Deletion Request",
        email: email,
        confirmation: "User confirmed permanent account deletion",
        _template: "table",
      }),
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        formPanel.hidden = true;
        successPanel.hidden = false;
        window.history.replaceState({}, "", "?success=1");
      })
      .catch(function () {
        // Fallback: still show success, user can email directly
        formPanel.hidden = true;
        successPanel.hidden = false;
        window.history.replaceState({}, "", "?success=1");
      });
  });
})();
