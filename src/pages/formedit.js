import { RemoveFormUI, RemoveScreen } from "./remove";
import { EditItem } from "./userFormObj";
import myArray from "../index";
import HomeUI from "./home";
import { loadTasks, addTask, saveTasks } from "./taskStorage"; // Hypothetical taskStorage module

function editPopup(place, array, index) {
  let newArray = loadTasks();
  // Create the form and the main div wrapper
  //<box-icon type='solid' name='x-circle'></box-icon>
  const obj = array[index];

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

  // Create and append the 'Task' input field
  const labelTask = document.createElement("label");
  labelTask.setAttribute("for", "form-task");
  labelTask.textContent = "Task:";
  const inputTask = document.createElement("input");
  inputTask.type = "text";
  inputTask.id = "form-task";
  inputTask.name = "form-task";
  inputTask.className = "form-input";
  inputTask.placeholder = "Pick up the dog from the vet";
  inputTask.required = true;
  inputTask.value = obj.Name;
  divForm.append(labelTask, inputTask);

  // Create and append the 'Name' input field
  const labelName = document.createElement("label");
  labelName.setAttribute("for", "form-name");
  labelName.textContent = "Name:";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "form-name";
  inputName.name = "form-name";
  inputName.className = "form-input";
  inputName.placeholder = "Yotam";
  inputName.required = true;
  inputName.value = obj.Owner;
  divForm.append(labelName, inputName);

  // Create and append the 'Status' select field
  const labelStatus = document.createElement("label");
  labelStatus.setAttribute("for", "form-status");
  labelStatus.textContent = "Status:";
  const selectStatus = document.createElement("select");
  selectStatus.id = "form-status";
  selectStatus.name = "form-status";
  selectStatus.className = "form-input";
  selectStatus.required = true;
  const defaultValueStatus = obj.Status; // e.g., "Stuck"

  ["Done", "Stuck", "Working on it"].forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    if (status === defaultValueStatus) {
      option.selected = true;
    }
    selectStatus.appendChild(option);
  });

  divForm.append(labelStatus, selectStatus);

  // Create and append the 'Priority' select field
  const labelPriority = document.createElement("label");
  labelPriority.setAttribute("for", "form-priority");
  labelPriority.textContent = "Priority:";
  const selectPriority = document.createElement("select");
  selectPriority.id = "form-priority";
  selectPriority.name = "form-priority";
  selectPriority.className = "form-input";
  selectPriority.required = true;
  const defaultValuePriority = obj.Priority;
  ["High", "Low", "Medium"].forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority;
    if (priority === defaultValuePriority) {
      option.selected = true;
    }
    selectPriority.appendChild(option);
  });
  divForm.append(labelPriority, selectPriority);

  // Create and append the 'Tag' input field
  const labelTags = document.createElement("label");
  labelTags.setAttribute("for", "form-tags");
  labelTags.textContent = "Tag:";
  const inputTags = document.createElement("input");
  inputTags.type = "text";
  inputTags.id = "form-tags";
  inputTags.className = "form-input";
  inputTags.placeholder = "Admin";
  inputTags.required = true;
  inputTags.value = obj.Tags;
  divForm.append(labelTags, inputTags);

  // Create and append the 'Date' input field
  const labelDate = document.createElement("label");
  labelDate.setAttribute("for", "form-date");
  labelDate.textContent = "Date:";
  const inputDate = document.createElement("input");
  inputDate.type = "date";
  inputDate.id = "form-date";
  inputDate.name = "form-date";
  inputDate.className = "form-input";
  inputDate.required = true;
  inputDate.value = obj.Date;
  inputDate.min = "1900-01-01";
  inputDate.max = "2125-01-01";
  divForm.append(labelDate, inputDate);

  // Create and append the submit button
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

  buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault(); // Keep this to prevent the form submission

    // Check if the form is valid
    if (form.checkValidity()) {
      EditItem(newArray, index);
      RemoveFormUI(form, blur);
      checkingFunction(place);
    } else {
      // Optionally trigger the browser's default validation UI
      form.reportValidity();
    }
  });

  // Append everything to the main form div and then the form to the document body (or wherever it needs to go)
  divForm.appendChild(divSubmitForm);
  form.appendChild(divForm);
  document.body.appendChild(blur);
  document.body.appendChild(form); // Or append to another element if needed
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

export { editPopup, checkingFunction };
