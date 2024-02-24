// taskStorage.js
export function loadTasks() {
  let array = [];
  if (localStorage.getItem("myArray") === "undefined") {
    return array;
  } else {
    return JSON.parse(localStorage.getItem("myArray")) || [];
  }
}

export function addTask(task) {
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
}

export function saveTasks(tasks) {
  localStorage.setItem("myArray", JSON.stringify(tasks));
}
