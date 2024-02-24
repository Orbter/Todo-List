import "boxicons";
import "./styles/main.scss";
import { createTaskObject, DisplayArrayUi } from "./pages/task";
import { AllTask } from "./pages/allTasks";
import HomeUI from "./pages/home";
import { userFormUI } from "./pages/userForm";
import { Today } from "./pages/today";
import { Upcoming } from "./pages/upcoming";
import { Overdue } from "./pages/Overdue";
import { addingProjectUi } from "./pages/addingProject";
import {
  loadTasks,
  addTask,
  saveTasks,
  removeTaskArray,
  saveProject,
  loadProject,
  addProject,
} from "./pages/taskStorage";
const menu = document.getElementById("menu");
const tab = document.getElementById("tab");
const add = document.querySelector(".add");
menu.addEventListener("click", function () {
  tab.classList.toggle("sidebar-active");
});
let myArray = [];
let place = "";
const homeMenu = document.getElementById("home");
const taskAllMenu = document.getElementById("all-task");
const quickAddMenu = document.getElementById("quick-add");
const todayMenu = document.getElementById("today");
const upcomingMenu = document.getElementById("upcoming");
const overdue = document.getElementById("overdue");
const projectButton = document.getElementById("new-project");

homeMenu.addEventListener("click", function () {
  HomeUI();
  place = "Home";
});
taskAllMenu.addEventListener("click", function () {
  AllTask();
  place = "All-Task";
});

quickAddMenu.addEventListener("click", function () {
  userFormUI(place);
});
todayMenu.addEventListener("click", function () {
  Today();
  place = "Today";
});
upcomingMenu.addEventListener("click", function () {
  Upcoming();
  place = "Upcoming";
});
overdue.addEventListener("click", function () {
  Overdue();
  place = "Overdue";
});
let newProject = loadProject();

projectButton.addEventListener("click", function () {
  addingProjectUi();
});
// Try to load existing tasks from localStorage
let storedArray = loadTasks();
console.log(saveTasks);
// Only populate the array with initial objects if it's empty
if (storedArray.length === 0) {
  const ob = createTaskObject(
    "Creating a task",
    "Orbter",
    "Working on it",
    "High",
    "#Admin",
    "2024-02-15",
    "Todo List"
  );
  const ob2 = createTaskObject(
    "testing the ui",
    "Yotam",
    "Done",
    "Low",
    "#king",
    "2024-02-21",
    "Todo List"
  );
  storedArray.push(ob, ob2);

  localStorage.setItem("myArray", JSON.stringify(storedArray));
}
export { newProject };

HomeUI();
console.log(storedArray);
