checkAuth().then(data => {
    if (data.role_id !== 1) {

        document.querySelector('.add-project-btn').remove()
    }
});