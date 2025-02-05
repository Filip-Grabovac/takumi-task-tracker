import User from './classes/User.js'
"use strict";
// LOGIN //

const user = new User();

let loginButton = document.querySelector(".form-submit-btn");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.querySelector("#Email").value;
  let password = document.querySelector("#Password").value;

  user.login(email, password)
});

// validate password while typing (input value being changed)
let password = document.querySelector("#Password");
password.addEventListener("input", () => {user.loginPassValidation(password)});
