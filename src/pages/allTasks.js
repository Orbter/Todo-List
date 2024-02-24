import { userFormUI } from "./userForm";
import { createTaskObject, displayArrayAllTimeUi } from "./task";
import { RemoveScreen } from "./remove";
import { loadTasks, addTask, saveTasks } from "./taskStorage"; // Hypothetical taskStorage module

function AllTask() {
  RemoveScreen();
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const allTime = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const allTimeHeadline = document.createElement("h1");
  const add = document.createElement("button");
  place.innerText = "All Tasks";
  headText.innerText = "See all the tasks you have!";
  allTimeHeadline.innerText = "All Time";
  add.innerText = "add a task!";

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  allTimeHeadline.classList.add("today-headline");
  allTime.classList.add("today");
  add.classList.add("add", "button");
  add.onclick = (event) => userFormUI("All-Task");
  mainContent.append(header, content);

  header.append(place, contentHead);

  contentHead.append(headText, add);

  content.append(allTimeHeadline, allTime);
  const showingArray = loadTasks();
  displayArrayAllTimeUi(showingArray, allTime);
}
export { AllTask };
