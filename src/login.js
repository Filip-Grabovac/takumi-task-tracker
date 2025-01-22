"use strict";
// LOGIN //

let apiMainUrl = "https://x8ki-letl-twmt.n7.xano.io/api:Q7_040cb";

let loginButton = document.querySelector(".form-submit-btn");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.querySelector("#Email").value;
  let password = document.querySelector("#Password").value;

  let requestBody = {
    email,
    password,
  };

  let apiEndpoint = apiMainUrl + "/auth/login";

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.authToken) {
        localStorage.setItem("authToken", data.authToken);

        window.location.href = "https://briliaton-com.webflow.io/dashboard";
      }
    });
});

function updateButtonStyle() {
  let loginButton = document.querySelector(".form-submit-btn");
  let email = document.querySelector("#Email").value;
  let password = document.querySelector("#Password").value;

  if (!email && password.length < 5) {
    loginButton.style.backgroundColor = "#eff4fb";
  } else {
    loginButton.style.backgroundColor = "#3939e1";
  }

  email.addEventListener("input", updateButtonStyle);
  password.addEventListener("input", updateButtonStyle);
}
