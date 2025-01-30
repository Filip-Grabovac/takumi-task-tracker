"use strict";
// LOGIN //

let apiMainUrl = "https://x8ki-letl-twmt.n7.xano.io/api:Q7_040cb";

let loginButton = document.querySelector(".form-submit-btn");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.querySelector("#Email").value;
  let password = document.querySelector("#Password").value;

  // User.login(email, password)
});

let email = document.querySelector("#Email");
let password = document.querySelector("#Password");

// password.addEventListener("input", () => {User.loginPassValidation(password)});
