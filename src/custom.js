

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

    let apiEndpoint = apiMainUrl + '/auth/login'

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => response.json())

})


