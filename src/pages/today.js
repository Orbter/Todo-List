import { userFormUI, optionCrater } from "./userForm";
import { RemoveScreen, RemoveContent } from "./remove";
import { loadTasks, addTask, saveTasks, loadProject } from "./taskStorage"; // Hypothetical taskStorage module
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
  const selectProject = document.createElement("select");
  const newProjects = loadProject();

  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;
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

  optionCrater(newProjects, selectProject);

  selectProject.addEventListener("change", (event) => {
    RemoveContent(today);
    const showingArray = loadTasks();
    const selected = selectProject.value;
    console.log(selected);
    displayArrayTodayUi(showingArray, today, selected);
  });

  header.append(place, contentHead);

  contentHead.append(headText, selectProject);

  content.append(todayHeadline, today);
  const showingArray = loadTasks();
  const selected = selectProject.value;

  displayArrayTodayUi(showingArray, today, selected);
}
export { Today };
