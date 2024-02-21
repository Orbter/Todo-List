function createTaskUI(object) {
  //name, owner, status, priority, tags, date
  //Creating the divs
  console.log(object);
  const task = document.createElement("div");
  const taskName = document.createElement("div");
  const taskOwner = document.createElement("div");
  const taskStatus = document.createElement("div");
  const taskPriority = document.createElement("div");
  const taskTags = document.createElement("div");
  const taskDate = document.createElement("div");
  const taskEdit = document.createElement("div");
  const taskDelete = document.createElement("div");
  const iconEdit = document.createElement("box-icon");
  const iconDelete = document.createElement("box-icon");

  //inner text
  taskName.innerText = object.Name;
  taskOwner.innerText = object.Owner;
  taskStatus.innerText = object.Status;
  taskPriority.innerText = object.Priority;
  taskTags.innerText = object.Tags;
  taskDate.innerText = object.Date;
  //classes
  updateTaskClass(
    taskStatus,
    taskPriority,
    taskName,
    taskOwner,
    taskTags,
    taskDate,
    taskEdit,
    taskDelete,
    iconEdit,
    iconDelete,
    task
  );
  // appending task

  task.appendChild(taskName);
  task.appendChild(taskOwner);
  task.appendChild(taskStatus);
  task.appendChild(taskPriority);
  task.appendChild(taskTags);
  task.appendChild(taskDate);
  task.appendChild(taskEdit);
  task.appendChild(taskDelete);

  taskEdit.appendChild(iconEdit);
  taskDelete.appendChild(iconDelete);

  return task;
}
const updateTaskClass = (
  taskStatus,
  taskPriority,
  taskName,
  taskOwner,
  taskTags,
  taskDate,
  taskEdit,
  taskDelete,
  iconEdit,
  iconDelete,
  task
) => {
  taskStatus.classList.remove(
    "task-status-done",
    "task-status-stuck",
    "task-status-working"
  );
  taskPriority.classList.remove(
    "task-priority-high",
    "task-priority-low",
    "task-priority-medium"
  );

  if (taskStatus.innerText === "Done") {
    taskStatus.classList.add("task-status-done", "task-status");
    task.classList.add("task-border-done");
  } else if (taskStatus.innerText === "stuck") {
    taskStatus.classList.add("task-status-stuck", "task-status");
    task.classList.add("task-border-stuck");
  } else {
    taskStatus.classList.add("task-status-working", "task-status");
    task.classList.add("task-border-working");
  }

  if (taskPriority.innerText === "High") {
    taskPriority.classList.add("task-priority-high", "task-priority");
  } else if (taskPriority.innerText === "Low") {
    taskPriority.classList.add("task-priority-low", "task-priority");
  } else {
    taskPriority.classList.add("task-priority-medium", "task-priority");
  }
  taskName.classList.add("task-name");
  taskOwner.classList.add("task-owner");
  taskTags.classList.add("task-tags");
  taskDate.classList.add("task-date");
  taskEdit.classList.add("task-edit", "bx-box-task");
  taskDelete.classList.add("task-delete", "bx-box-task");
  iconEdit.setAttribute("type", "solid");
  iconEdit.setAttribute("name", "edit-alt");
  iconEdit.classList.add("bx");
  iconDelete.setAttribute("type", "solid");
  iconDelete.setAttribute("name", "x-square");
  iconDelete.classList.add("bx");
  task.classList.add("task");
};

export default createTaskUI;
