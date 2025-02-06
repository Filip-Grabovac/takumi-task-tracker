export default class User {
    baseApiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:Q7_040cb';
    email;
    #authToken;
    userId;

    // constructor(email) {
    //     // Do we need constructor to require email? Maybe just assign property value whenever needed
    //     this.#email = email
    // }

    login(email, password) {
        this.email = email
        let apiEndpoint = this.baseApiUrl + '/auth/login'
        let inputEmail = email
        let inputPassword = password

        let requestBody = {
            inputEmail,
            inputPassword,
        };

        console.log("Api endpoint: ", apiEndpoint)

        console.log("Body request: ", requestBody);
    
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
            localStorage.setItem("userID", data.user.id);
            this.#authToken = data.authToken;
            this.userId = data.user.id;
    
            window.location.href = "https://briliaton-com.webflow.io/dashboard";
            }
        });
    }

    logout() {
        window.localStorage.clear();
        window.location.href = "https://briliaton-com.webflow.io/log-in";
    }

    isAdmin() {

    }

    loginPassValidation(loginButton, password) {
        let loginButton = loginButton
        if (password.value.length < 5) {
            loginButton.style.backgroundColor = "#eff4fb";
        } else {
            loginButton.style.backgroundColor = "#3939e1";
        }
    }
}