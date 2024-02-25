import { userFormUI, optionCrater } from "./userForm";
import { createTaskObject, displayArrayHomeUi } from "./task";
import { RemoveScreen, RemoveContent } from "./remove";
import { loadTasks, addTask, saveTasks, loadProject } from "./taskStorage"; // Hypothetical taskStorage module

function HomeUI() {
  RemoveScreen();
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

  const selectProject = document.createElement("select");
  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;
  const newProjects = loadProject();
  optionCrater(newProjects, selectProject);

  selectProject.addEventListener("change", (event) => {
    RemoveContent(today);
    RemoveContent(thisWeek);
    RemoveContent(allTime);
    const showingArray = loadTasks();
    const selected = selectProject.value;
    console.log(selected);
    displayArrayHomeUi(showingArray, today, thisWeek, allTime, selected);
  });

  //appending

  mainContent.append(header, content);

  header.append(place, welcome, contentHead);

  contentHead.append(headText, selectProject);
  content.append(
    todayHeadline,
    today,
    weekHeadline,
    thisWeek,
    allTimeHeadline,
    allTime
  );

  const showingArray = loadTasks();
  const selected = selectProject.value;
  displayArrayHomeUi(showingArray, today, thisWeek, allTime, selected);
}

export default HomeUI;
