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
export function editTaskArray(obj, index) {
  const array = loadTasks();
  array[index] = obj;
  saveTasks(array);
}
export function removeTaskArray(index) {
  const array = loadTasks();
  array.splice(index, 1);
  saveTasks(array);
}

export function saveTasks(tasks) {
  localStorage.setItem("myArray", JSON.stringify(tasks));
}

export function saveProject(newProject) {
  localStorage.setItem("projects", JSON.stringify(newProject));
}

export function loadProject() {
  let array = ["All Task", "Todo List"];
  const myLocalStorage = localStorage.getItem("projects");
  console.log(localStorage.getItem("projects"));
  console.log(typeof myLocalStorage);
  if (myLocalStorage === undefined || myLocalStorage === null) {
    return array;
  } else {
    return JSON.parse(localStorage.getItem("projects"));
  }
}
export function addProject(project) {
  const allProjects = loadProject();
  if (allProjects.includes(project)) {
    return;
  } else {
    allProjects.push(project);
    saveProject(allProjects);
  }
}
