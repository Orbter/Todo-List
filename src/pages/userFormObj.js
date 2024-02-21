import { createTaskObject, DisplayArrayUi } from "./task";

function FormToArray(array) {
  document
    .getElementById("form-id")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });
  const task = document.getElementById("form-task").value;
  const name = document.getElementById("form-name").value;
  const status = document.getElementById("form-status").value;
  const priority = document.getElementById("form-priority").value;
  const tags = document.getElementById("form-tags").value;
  const date = document.getElementById("form-date").value;
  obj = createTaskObject(task, name, status, priority, tags, date);
  array.push(obj);
  return array;
}

export { FormToArray };
