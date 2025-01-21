

let logoutBtn = document.querySelector('.logout-icon');

if (logoutBtn) {

    logoutBtn.addEventListener('click', () => {

        window.localStorage.clear();
        window.location.href = 'https://briliaton-com.webflow.io/log-in';
    })

}