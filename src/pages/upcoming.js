import userFormUI from "./userForm";
import { createTaskObject, displayArrayAllTimeUi } from "./task";
import { RemoveScreen } from "./remove";
import { loadTasks, addTask, saveTasks } from "./taskStorage"; // Hypothetical taskStorage module
import { displayArrayUpcomingUi } from "./task";

function Upcoming() {
  RemoveScreen();
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const upcoming = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const upcomingHeadline = document.createElement("h1");
  const add = document.createElement("button");

  place.innerText = "Upcoming Tasks";
  headText.innerText = "Your next project are in here!";
  upcomingHeadline.innerText = "Future tasks";
  add.innerText = "add a task!";

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  upcomingHeadline.classList.add("today-headline");
  upcoming.classList.add("today");
  add.classList.add("add", "button");
  add.onclick = (event) => userFormUI("Upcoming");
  mainContent.append(header, content);
  header.append(place, contentHead);

  contentHead.append(headText, add);

  content.append(upcomingHeadline, upcoming);
  const showingArray = loadTasks();
  displayArrayUpcomingUi(showingArray, upcoming);
}

export { Upcoming };
