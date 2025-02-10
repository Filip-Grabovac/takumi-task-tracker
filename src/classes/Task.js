import User from './User.js'

export default class Task extends User {

    getTodayTasks() {
        let userId = localStorage.getItem("userID");
        let todayTasksApi = `https://x8ki-letl-twmt.n7.xano.io/api:ganIP79_/get_todays_tasks?user_id=${userId}`;

        let htmlCard = document.querySelector("#project-card").outerHTML;

        fetch(todayTasksApi)
        .then((response) => response.json())
        .then((todayTasks) => {
            // ID-ovi kolona za svaki status
            const statusColumns = {
            open: "open",
            in_progress: "in_progress",
            on_hold: "on_hold",
            waiting_for_client: "waiting_for_client",
            ready_for_testing: "ready_for_testing",
            resolved: "resolved",
            closed: "closed",
            reopened: "reopened",
            };

            // Čišćenje svih kolona pre dodavanja novih kartica
            Object.values(statusColumns).forEach((columnId) => {
            document.querySelector(`#${columnId}`).innerHTML = "";
            });

            todayTasks.today_tasks.forEach((task) => {
            let card = document.createElement("div");
            card.innerHTML = htmlCard;

            // Postavljanje detalja zadatka
            card.querySelector(".medium-txt").textContent = task.project.name;
            card.querySelector(
                ".name-member"
            ).textContent = `${task.additional_users_info.first_name} ${task.additional_users_info.last_name}`;
            card.querySelector(".rounded-box").style.backgroundColor =
                task.severity_type.color_hex;
            card.querySelector(".status-box-user .name-member").textContent =
                task.severity_type.name;

            // Dodavanje opisa (ako postoji)
            let descriptionElement = card.querySelector(".description-class");
            if (descriptionElement) {
                descriptionElement.textContent = task.description;
            }
            console.log(task);
            // Proveravanje statusa i dodavanje u odgovarajuću kolonu
            let taskStatus = task.status_type.code; // Pretpostavljam da je "status" polje u API-ju
            console.log(taskStatus);
            console.log(statusColumns);

            let columnId = statusColumns[taskStatus]; // Dohvati ID kolone za zadati status
            console.log(columnId);

            if (columnId) {
                let column = document.querySelector(`#${columnId}`);
                if (column) {
                column.insertAdjacentHTML("beforeend", card.innerHTML);
                } else {
                console.warn(`Kolona sa ID-jem ${columnId} nije pronađena.`);
                }
            } else {
                console.warn(`Nepoznat status zadatka: ${taskStatus}`);
            }
            });
        })
        .catch((error) => console.error("Error fetching tasks:", error));
    }

    addNewTask(assignTo, statusSelect, taskDescript, severity) {
        let tasksApi = "https://x8ki-letl-twmt.n7.xano.io/api:ganIP79_/tasks";
        let severities = {
            Normal: 1,
            Trivial: 2,
            Major: 3,
            Blocking: 4,
            Immediate: 5,
        };

        let requestBody = {
            assignTo,
            statusSelect,
            taskDescript,
            severity,
        };

        fetch(tasksApi, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(requestBody),
        }).then((response) => response.json);

    }

}