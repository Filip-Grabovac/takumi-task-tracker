import Auth from './classes/Auth'
import User from './classes/User'
import Project from './classes/Project'
import Task from './classes/Task'

const auth = new Auth();
const user = new User();
const project = new Project();
const task = new Task();

auth.checkAuth().then((data) => {
  if (data.role_id !== 1) {
    document.querySelector(".add-project-btn").remove();
  }
});

// Log Out
let logoutBtn = document.querySelector(".logout-button");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    user.logout()
  });
}

// Rendering projects in side bar
project.sidebarGetProjects()

// Rendering today tasks
task.getTodayTasks()

//Add new task
let addTaskBtn = document.querySelector("#task-btn");
addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let assignTo = document.querySelector("#assigne-user");
  let statusSelect = document.querySelector("#status-select");
  let taskDescript = document.querySelector("#descript-task");
  let severity = Number(document.querySelector("#severity-select"));

  task.addNewTask(assignTo, statusSelect, taskDescript, severity)
});
