checkAuth().then(data => {
    if (data.role_id !== 1) {

        document.querySelector('.add-project-btn').remove()
    }
});

let logoutBtn = document.querySelector('.logout-button');

if (logoutBtn) {

    logoutBtn.addEventListener('click', () => {

        window.localStorage.clear();
        window.location.href = 'https://briliaton-com.webflow.io/log-in';
    })

}


// Rendering projects

let apiEndpoint = "https://x8ki-letl-twmt.n7.xano.io/api:ganIP79_/projects"

fetch(apiEndpoint).then(response => response.json())
    .then(projects => {
        console.log(projects)
    })