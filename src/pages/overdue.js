import userFormUI from "./userForm";
import { createTaskObject, displayArrayOverdueUi } from "./task";
import { RemoveScreen } from "./remove";
import { loadTasks, addTask, saveTasks } from "./taskStorage"; // Hypothetical taskStorage module

function Overdue() {
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
  place.innerText = "Overdue Tasks";
  headText.innerText = "you are behind schedule!";
  upcomingHeadline.innerText = "Overdue";
  add.innerText = "add a task!";

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  upcomingHeadline.classList.add("today-headline");
  upcoming.classList.add("today");
  add.classList.add("add", "button");
  add.onclick = (event) => userFormUI("Overdue");
  mainContent.append(header, content);
  header.append(place, contentHead);

  contentHead.append(headText, add);

  content.append(upcomingHeadline, upcoming);
  const showingArray = loadTasks();
  displayArrayOverdueUi(showingArray, upcoming);
}

export { Overdue };
