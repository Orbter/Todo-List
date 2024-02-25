import { createTaskObject, displayArrayOverdueUi } from "./task";
import { RemoveScreen, RemoveContent } from "./remove";
import { loadTasks, addTask, saveTasks, loadProject } from "./taskStorage"; // Hypothetical taskStorage module
import { userFormUI, optionCrater } from "./userForm";

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
  const selectProject = document.createElement("select");
  const newProjects = loadProject();

  place.innerText = "Overdue Tasks";
  headText.innerText = "you are behind schedule!";
  upcomingHeadline.innerText = "Overdue";

  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;
  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  upcomingHeadline.classList.add("today-headline");
  upcoming.classList.add("today");

  selectProject.addEventListener("change", (event) => {
    RemoveContent(upcoming);

    const showingArray = loadTasks();
    const selected = selectProject.value;
    displayArrayOverdueUi(showingArray, upcoming, selected);
  });

  optionCrater(newProjects, selectProject);

  mainContent.append(header, content);
  header.append(place, contentHead);

  contentHead.append(headText, selectProject);

  const selected = selectProject.value;

  content.append(upcomingHeadline, upcoming);
  const showingArray = loadTasks();
  displayArrayOverdueUi(showingArray, upcoming, selected);
}

export { Overdue };
