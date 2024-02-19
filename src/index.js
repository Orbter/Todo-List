import "boxicons";
import "./styles/main.scss";
import createTaskObject from "./pages/task";
import homeUI from "./pages/home";
const menu = document.getElementById("menu");
const tab = document.getElementById("tab");
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
  "15/2/2024"
);

myArray.push(ob);
console.log(myArray);

export default myArray;
homeUI();
