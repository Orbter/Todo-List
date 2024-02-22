import { createTaskObject, DisplayArrayUi } from "./task";

function FormToArray(array) {
  const task = document.getElementById("form-task").value;
  const name = document.getElementById("form-name").value;
  const status = document.getElementById("form-status").value;
  const priority = document.getElementById("form-priority").value;
  const tags = document.getElementById("form-tags").value;
  const date = document.getElementById("form-date").value;
  const obj = createTaskObject(task, name, status, priority, tags, date);
  array.push(obj);

  return array;
}
function EditItem(array, index) {
  const task = document.getElementById("form-task").value;
  const name = document.getElementById("form-name").value;
  const status = document.getElementById("form-status").value;
  const priority = document.getElementById("form-priority").value;
  const tags = document.getElementById("form-tags").value;
  const date = document.getElementById("form-date").value;
  const obj = createTaskObject(task, name, status, priority, tags, date);

  array[index] = obj;
}

export { FormToArray, EditItem };
