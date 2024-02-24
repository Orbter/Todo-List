import userFormUI from "./userForm";
import { RemoveScreen } from "./remove";
import { loadTasks, addTask, saveTasks } from "./taskStorage"; // Hypothetical taskStorage module
import { displayArrayTodayUi } from "./task";

function Today() {
  RemoveScreen();
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const today = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const todayHeadline = document.createElement("h1");
  const add = document.createElement("button");

  place.innerText = "Today Tasks";
  headText.innerText = "Finish this tasks today!";
  todayHeadline.innerText = "All tasks Due to today";
  add.innerText = "add a task!";

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  todayHeadline.classList.add("today-headline");
  today.classList.add("today");
  add.classList.add("add", "button");
  add.onclick = (event) => userFormUI("Today");
  mainContent.append(header, content);

  header.append(place, contentHead);

  contentHead.append(headText, add);

  content.append(todayHeadline, today);
  const showingArray = loadTasks();
  displayArrayTodayUi(showingArray, today);
}
export { Today };
