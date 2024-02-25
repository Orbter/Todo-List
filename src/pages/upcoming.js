import { userFormUI, optionCrater } from "./userForm";
import {
  createTaskObject,
  displayArrayAllTimeUi,
  displayArrayUpcomingUi,
} from "./task";
import { RemoveScreen, RemoveContent } from "./remove";
import { loadTasks, addTask, saveTasks, loadProject } from "./taskStorage"; // Hypothetical taskStorage module

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
  const selectProject = document.createElement("select");
  const newProjects = loadProject();

  place.innerText = "Upcoming Tasks";
  headText.innerText = "Your next project are in here!";
  upcomingHeadline.innerText = "Future tasks";

  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;
  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  upcomingHeadline.classList.add("today-headline");
  upcoming.classList.add("today");
  mainContent.append(header, content);
  header.append(place, contentHead);
  optionCrater(newProjects, selectProject);

  contentHead.append(headText, selectProject);
  selectProject.addEventListener("change", (event) => {
    RemoveContent(upcoming);

    const showingArray = loadTasks();
    const selected = selectProject.value;
    displayArrayUpcomingUi(showingArray, upcoming, selected);
  });

  content.append(upcomingHeadline, upcoming);
  const showingArray = loadTasks();
  const selected = selectProject.value;

  displayArrayUpcomingUi(showingArray, upcoming, selected);
}

export { Upcoming };
