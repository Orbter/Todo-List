import { RemoveFormUI, RemoveScreen } from "./remove";
import { newProject } from "../index";
let mainArray = loadTasks();
import HomeUI from "./home";
import { AllTask } from "./allTasks";
import {
  loadTasks,
  addTask,
  saveTasks,
  saveProject,
  loadProject,
  addProject,
} from "./taskStorage"; // Hypothetical taskStorage module
import { Today } from "./today";
import { Upcoming } from "./upcoming";
import { Overdue } from "./Overdue";
import { updateProjectButton } from "./updateButton";

function addingProjectUi(place) {
  const form = document.createElement("form");
  form.id = "form-id";
  const divForm = document.createElement("div");
  divForm.className = "form";
  const deleteContainer = document.createElement("div");
  deleteContainer.classList.add("delete-form");
  const iconDelete = document.createElement("box-icon");
  iconDelete.setAttribute("type", "solid");
  iconDelete.setAttribute("name", "x-circle");
  iconDelete.setAttribute("size", "lg");
  iconDelete.onclick = () => {
    RemoveFormUI(form, blur);
  };
  iconDelete.classList.add("bx");
  deleteContainer.append(iconDelete);
  divForm.append(deleteContainer);

  const labelProject = document.createElement("label");
  labelProject.setAttribute("for", "creating-project");
  labelProject.textContent = "New Project:";
  const inputProject = document.createElement("input");
  inputProject.type = "text";
  inputProject.id = "creating-project";
  inputProject.name = "creating-project";
  inputProject.className = "form-input";
  inputProject.placeholder = "Todo List";
  inputProject.required = true;
  divForm.append(labelProject, inputProject);

  const divSubmitForm = document.createElement("div");
  divSubmitForm.className = "submit-form";
  const buttonSubmit = document.createElement("button");
  buttonSubmit.className = "button-submit";
  buttonSubmit.type = "submit";
  buttonSubmit.textContent = "Add New Task";
  divSubmitForm.appendChild(buttonSubmit);
  //creating a blur
  const blur = document.createElement("div");
  blur.classList.add("overview");
  blur.addEventListener("click", function (event) {
    RemoveFormUI(form, blur);
  });

  divForm.appendChild(divSubmitForm);
  form.appendChild(divForm);
  document.body.appendChild(blur);
  document.body.appendChild(form); // Or append to another element if needed

  buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault(); // Keep this to prevent the form submission

    // Check if the form is valid
    if (form.checkValidity()) {
      const project = inputProject.value;
      addProject(project);
      RemoveFormUI(form, blur);
      checkingFunction(place);
      updateProjectButton();
    } else {
      // Optionally trigger the browser's default validation UI
      form.reportValidity();
    }
  });
}

function addingProjectArray() {
  const project = document.getElementById("creating-project").value;
  newProject.push(project);
  console.log(newProject);
}
function checkingFunction(place) {
  if (place === "Home") {
    HomeUI();
  } else if (place === "All-Task") {
    AllTask();
  } else if (place === "Today") {
    Today();
  } else if (place === "Upcoming") {
    Upcoming();
  } else if (place === "Overdue") {
    Overdue();
  }
}

export { addingProjectUi };
