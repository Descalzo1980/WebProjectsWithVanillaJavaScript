"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success message
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
    showSuccess();
    // return re.test(String(email).toLowerCase());
  } else {
    showError(input, "Email is not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFielName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input lenght

function checkLenght(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFielName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFielName(input)} must be at less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check password match

function chekcPasswortMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

// Get Fiel Name

function getFielName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   if (username.value === "") {
  //     showError(username, "Username is required");
  //   } else {
  //     showSuccess(username);
  //   }
  //   if (email.value === "") {
  //     showError(email, "Email is required");
  //   } else if (!isValidEmail(email.value)) {
  //     showError(email, "Email is not valid");
  //   } else {
  //     showSuccess(email);
  //   }
  //   if (password.value === "") {
  //     showError(password, "Password is required");
  //   } else {
  //     showSuccess(password);
  //   }
  //   if (password2.value === "") {
  //     showError(password2, "Password 2 is required");
  //   } else {
  //     showSuccess(password2);
  //   }

  checkRequired([username, email, password, password2]);
  checkLenght(username, 3, 15);
  checkLenght(password, 6, 25);
  checkEmail(email);
  chekcPasswortMatch(password, password2);
});
