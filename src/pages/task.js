const createTaskObject = (Name, Owner, Status, Priority, Tags, Date) => ({
  Name,
  Owner,
  Status,
  Priority,
  Tags,
  Date,
});
import HomeUI from "./home";
import { RemoveFormUI, RemoveScreen, RemoveItemArray } from "./remove";
import createTaskUI from "./taskUI";
import { editPopup } from "./formedit";
import { loadTasks, addTask, saveTasks } from "./taskStorage"; // Hypothetical taskStorage module
import place from "../index";

function displayArrayUpcomingUi() {}

function displayArrayOverdueUi(array, overdue) {
  sortArrayByDate(array);
  const currentDay = new Date();
  const todayDateOnly = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );
  array.forEach((element, index) => {
    const objectDate = new Date(element.Date); // For example, 2021-12-01
    const objectDateOnly = new Date(
      objectDate.getFullYear(),
      objectDate.getMonth(),
      objectDate.getDate()
    );
    const newArray = loadTasks();
    // Corrected comparison for determining if the event is "today"
    if (objectDateOnly.getTime() > todayDateOnly.getTime()) {
      appendingTask(newArray, element, index, overdue);
    }
  });
}

function displayArrayTodayUi(array, today) {
  sortArrayByDate(array); //assuring the array by date
  const currentDay = new Date();
  const todayDateOnly = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );
  array.forEach((element, index) => {
    const objectDate = new Date(element.Date); // For example, 2021-12-01
    const objectDateOnly = new Date(
      objectDate.getFullYear(),
      objectDate.getMonth(),
      objectDate.getDate()
    );
    const newArray = loadTasks();
    // Corrected comparison for determining if the event is "today"
    if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
      appendingTask(newArray, element, index, today);
    }
  });
}

function displayArrayAllTimeUi(array, allTime) {
  sortArrayByDate(array); //assuring the array by date
  const newArray = loadTasks();
  newArray.forEach((element, index) => {
    appendingTask(newArray, element, index, allTime);
  });
}

function displayArrayHomeUi(array, today, week, allTime) {
  sortArrayByDate(array); //assuring the array by date
  const currentDay = new Date();
  const todayDateOnly = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );

  const { firstDayOfWeek, lastDayOfWeek } = settingTheWeek(currentDay);

  array.forEach((element, index) => {
    const objectDate = new Date(element.Date); // For example, 2021-12-01
    const objectDateOnly = new Date(
      objectDate.getFullYear(),
      objectDate.getMonth(),
      objectDate.getDate()
    );
    const newArray = loadTasks();
    // Corrected comparison for determining if the event is "today"
    if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
      appendingTask(newArray, element, index, today);
    } else if (
      objectDateOnly >= firstDayOfWeek &&
      objectDateOnly <= lastDayOfWeek
    ) {
      appendingTask(newArray, element, index, week);
    } else {
      appendingTask(newArray, element, index, allTime);
    }
  });
}
const settingTheWeek = (today) => {
  // Create new Date objects for the first and last day of the week based on 'today'
  const firstDayOfWeek = new Date(today);
  const lastDayOfWeek = new Date(today);

  // Set firstDayOfWeek to the start of the week, Sunday
  firstDayOfWeek.setDate(today.getDate() - today.getDay());
  firstDayOfWeek.setHours(0, 0, 0, 0); // Set to start of the day

  // Set lastDayOfWeek to the end of the week, Saturday
  lastDayOfWeek.setDate(today.getDate() + (6 - today.getDay()));
  lastDayOfWeek.setHours(23, 59, 59, 999); // Set to end of the day

  return { firstDayOfWeek, lastDayOfWeek };
};

const appendingTask = (array, element, index, place) => {
  const taskElement = createTaskUI(element);
  const deleteButton = taskElement.querySelector(".task-delete");
  const editButton = taskElement.querySelector(".task-edit");
  const newArray = loadTasks();
  deleteButton.onclick = () => {
    RemoveItemArray(newArray, index);
    saveTasks(newArray);
    HomeUI(newArray);
  };
  editButton.onclick = () => {
    editPopup(place, array, index);
  };

  place.append(taskElement);
};
function sortArrayByDate(array) {
  array.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  saveTasks(array);
}

export {
  createTaskObject,
  displayArrayHomeUi,
  displayArrayAllTimeUi,
  displayArrayTodayUi,
  displayArrayOverdueUi,
};
