console.log("hey");
import "boxicons";
import "./styles/main.scss";
const menu = document.getElementById("menu");
const tab = document.getElementById("tab");

menu.addEventListener("click", function () {
  tab.classList.toggle("sidebar-active");
});
