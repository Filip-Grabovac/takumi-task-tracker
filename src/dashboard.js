checkAuth().then((data) => {
  if (data.role_id !== 1) {
    document.querySelector(".add-project-btn").remove();
  }
});

// Log Out
let logoutBtn = document.querySelector(".logout-button");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    // User.logout()
  });
}

// Rendering projects in side bar
// Project.sidebarGetProjects()

// Rendering today tasks
// Task.getTodayTasks()

//Add new task
let addTaskBtn = document.querySelector("#task-btn");
addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let assignTo = document.querySelector("#assigne-user");
  let statusSelect = document.querySelector("#status-select");
  let taskDescript = document.querySelector("#descript-task");
  let severity = Number(document.querySelector("#severity-select"));

  // Task.addNewTask()
});
