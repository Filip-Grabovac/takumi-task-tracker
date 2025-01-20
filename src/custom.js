

// LOGIN //

let apiMainUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:Q7_040cb'

let loginButton = document.querySelector('.form-submit-color')

loginButton.addEventListener('click', (e) => {

    e.preventDefault()

    let email = document.querySelector('#Email').value
    let papssword = document.querySelector('#Password').value

    let requestBody = {
        email,
        papssword
    }

    let apiEndpoint = ('/auth/login')

    fetch(apiMainUrl + apiEndpoint)


    console.log(email)


})


