import myArray from "../index";
import createTaskUI from "./taskUI";
import userFormUI from "./userForm";
import { createTaskObject, displayArrayHome } from "./task";
import { RemoveScreen } from "./remove";
function HomeUI(array) {
  RemoveScreen();
  console.log(array);
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const today = document.createElement("div");
  const thisWeek = document.createElement("div");
  const allTime = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const welcome = document.createElement("h2");
  const todayHeadline = document.createElement("h1");
  const weekHeadline = document.createElement("h1");
  const allTimeHeadline = document.createElement("h1");

  const add = document.createElement("button");

  place.innerText = "Home";
  welcome.innerText = "Welcome back, Orbter";
  headText.innerText = "Start Another Task!";
  todayHeadline.innerText = "Today";
  weekHeadline.innerText = "This Week";
  allTimeHeadline.innerText = "All Time";
  add.innerText = "add a task!";
  //classes
  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  todayHeadline.classList.add("today-headline");
  weekHeadline.classList.add("today-headline");
  allTimeHeadline.classList.add("today-headline");
  today.classList.add("today");
  thisWeek.classList.add("today");
  allTime.classList.add("today");
  add.classList.add("add", "button");
  add.onclick = (event) => userFormUI("Home");

  //appending

  mainContent.append(header, content);

  header.append(place, welcome, contentHead);

  contentHead.append(headText, add);

  content.append(
    todayHeadline,
    today,
    weekHeadline,
    thisWeek,
    allTimeHeadline,
    allTime
  );

  displayArrayHome(array, today, thisWeek, allTime);
}

export default HomeUI;
