import { userFormUI, optionCrater } from "./userForm";
import { createTaskObject, displayArrayAllTimeUi } from "./task";
import { RemoveScreen, RemoveContent } from "./remove";
import { loadTasks, addTask, saveTasks, loadProject } from "./taskStorage"; // Hypothetical taskStorage module

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
  const selectProject = document.createElement("select");
  const newProjects = loadProject();

  place.innerText = "All Tasks";
  headText.innerText = "See all the tasks you have!";
  allTimeHeadline.innerText = "All Time";
  add.innerText = "add a task!";

  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  allTimeHeadline.classList.add("today-headline");
  allTime.classList.add("today");
  add.classList.add("add", "button");
  optionCrater(newProjects, selectProject);
  mainContent.append(header, content);
  selectProject.addEventListener("change", (event) => {
    RemoveContent(allTime);
    const showingArray = loadTasks();
    const selected = selectProject.value;
    displayArrayAllTimeUi(showingArray, allTime, selected);
  });

  header.append(place, contentHead);

  contentHead.append(headText, selectProject);
  const selected = selectProject.value;

  content.append(allTimeHeadline, allTime);
  const showingArray = loadTasks();
  displayArrayAllTimeUi(showingArray, allTime, selected);
}
export { AllTask };
