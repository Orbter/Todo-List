import { createTaskObject } from "./task";
import { loadTasks, addTask, saveTasks, editTaskArray } from "./taskStorage"; // Hypothetical taskStorage module

function FormToArray(array, selectedValue) {
  const task = document.getElementById("form-task").value;
  const name = document.getElementById("form-name").value;
  const status = document.getElementById("form-status").value;
  const priority = document.getElementById("form-priority").value;
  const tags = document.getElementById("form-tags").value;
  const date = document.getElementById("form-date").value;
  console.log(document.getElementById("form-project"));
  const project = document.getElementById("form-projects").value;
  const obj = createTaskObject(
    task,
    name,
    status,
    priority,
    tags,
    date,
    project
  );
  array = savingArray(obj);

  return array;
}
const savingArray = (newTask) => {
  addTask(newTask);
};

function EditItem(array, index) {
  const task = document.getElementById("form-task").value;
  const name = document.getElementById("form-name").value;
  const status = document.getElementById("form-status").value;
  const priority = document.getElementById("form-priority").value;
  const tags = document.getElementById("form-tags").value;
  const date = document.getElementById("form-date").value;
  const project = document.getElementById("form-project").value;

  const obj = createTaskObject(
    task,
    name,
    status,
    priority,
    tags,
    date,
    project
  );

  console.log("hey");
  console.log(array);
  console.log(array[index]);
  array[index] = obj;
  editTaskArray(obj, index);
}

export { FormToArray, EditItem };
