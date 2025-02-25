export default class Project {

    // Render projects in the sidebar
    sidebarGetProjects() {
        let projectsApi = "https://x8ki-letl-twmt.n7.xano.io/api:ganIP79_/projects";

        fetch(projectsApi)
        .then((response) => response.json())
        .then((projects) => {
            let dropDownList = document.querySelector(".options-wrapper");

            projects.forEach((project) => {
            const html = `<a href="#" class="option-link flex-h-space-btw-center w-inline-block" tabindex="0">
                    <div class="member-txt">${project.name}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 16" fill="none" class="pencil-svg">
                    <path d="M14.2313 1.06902C13.7363 0.574036 13.0763 0.300293 12.3751 0.300293C11.6738 0.300293 11.0139 0.574036 10.5189 1.06902L0.64162 10.9463L0.00788609 14.6437C-0.0221131 14.8237 0.0341354 15.0074 0.165382 15.1349C0.270379 15.2399 0.416626 15.2999 0.562872 15.2999C0.592871 15.2999 0.62662 15.2999 0.656619 15.2924L4.35402 14.6587L14.2313 4.78143C14.7263 4.28644 15 3.62646 15 2.92523C15 2.22399 14.7263 1.56401 14.2313 1.06902ZM3.81404 13.6087L1.25285 14.0474L1.69159 11.4863L8.66641 4.51143L10.7889 6.63388L3.81404 13.6087ZM11.5838 5.8389L9.46139 3.71645L11.3138 1.864C11.8801 1.29777 12.8663 1.29777 13.4363 1.864C13.7213 2.149 13.875 2.52399 13.875 2.92523C13.875 3.32647 13.7175 3.70146 13.4363 3.98645L11.5838 5.8389Z" fill="currentColor"></path></svg></a>`;

            dropDownList.insertAdjacentHTML("afterbegin", html);
            });
        });
    }

}