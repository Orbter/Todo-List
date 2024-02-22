import "boxicons";
import "./styles/main.scss";
import { createTaskObject, DisplayArrayUi } from "./pages/task";
import userFormUI from "./pages/userForm";
import homeUI from "./pages/home";
const menu = document.getElementById("menu");
const tab = document.getElementById("tab");
const add = document.querySelector(".add");
let myArray = [];
menu.addEventListener("click", function () {
  tab.classList.toggle("sidebar-active");
});
const ob = createTaskObject(
  "Creating a task",
  "Orbter",
  "Working on it",
  "High",
  "#Admin",
  "2024-02-15"
);
const ob2 = createTaskObject(
  "testing the ui",
  "Yotam",
  "Done",
  "Low",
  "#king",
  "2024-02-21"
);

myArray.push(ob, ob2);

export default myArray;
homeUI(myArray);
