const createTaskObject = (
  Name,
  Owner,
  Status,
  Priority,
  Tags,
  Date,
  Project
) => ({
  Name,
  Owner,
  Status,
  Priority,
  Tags,
  Date,
  Project,
});
import HomeUI from "./home";
import { RemoveFormUI, RemoveScreen, RemoveItemArray } from "./remove";
import createTaskUI from "./taskUI";
import { editPopup, checkingFunction } from "./formedit";
import { loadTasks, addTask, saveTasks, removeTaskArray } from "./taskStorage"; // Hypothetical taskStorage module

function displayArrayUpcomingUi(array, upcoming, selectedValue) {
  sortArrayByDate(array); //assuring the array by date
  const placeName = "Upcoming";
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
    if (selectedValue === "All Task") {
      if (objectDateOnly.getTime() > todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, upcoming, placeName);
      }
    } else if (element.Project === selectedValue) {
      if (objectDateOnly.getTime() > todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, upcoming, placeName);
      }
    }
  });
}

function displayArrayOverdueUi(array, overdue, selectedValue) {
  const placeName = "Overdue";

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
    if (selectedValue === "All Task") {
      if (objectDateOnly.getTime() < todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, overdue, placeName);
      }
    } else if (element.Project === selectedValue) {
      if (objectDateOnly.getTime() < todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, overdue, placeName);
      }
    }
  });
}

function displayArrayTodayUi(array, today, selectedValue) {
  const placeName = "Today";

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
    if (selectedValue === "All Task") {
      if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, today, placeName);
      }
    } else if (element.Project === selectedValue) {
      if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, today, placeName);
      }
    }
  });
}

function displayArrayAllTimeUi(array, allTime, selectedValue) {
  const placeName = "All-Task";

  sortArrayByDate(array); //assuring the array by date
  const newArray = loadTasks();

  newArray.forEach((element, index) => {
    if (selectedValue === "All Task") {
      appendingTask(newArray, element, index, allTime, placeName);
    } else if (element.Project === selectedValue) {
      appendingTask(newArray, element, index, allTime, placeName);
    }
  });
}

function displayArrayHomeUi(array, today, week, allTime, selectedValue) {
  const placeName = "Home";

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
    if (selectedValue === "All Task") {
      if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, today, placeName);
      } else if (
        objectDateOnly >= firstDayOfWeek &&
        objectDateOnly <= lastDayOfWeek
      ) {
        appendingTask(newArray, element, index, week, placeName);
      } else {
        appendingTask(newArray, element, index, allTime, placeName);
      }
    } else if (element.Project === selectedValue) {
      if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, today, placeName);
      } else if (
        objectDateOnly >= firstDayOfWeek &&
        objectDateOnly <= lastDayOfWeek
      ) {
        appendingTask(newArray, element, index, week, placeName);
      } else {
        appendingTask(newArray, element, index, allTime, placeName);
      }
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

const appendingTask = (array, element, index, place, placeName) => {
  const taskElement = createTaskUI(element);
  const deleteButton = taskElement.querySelector(".task-delete");
  const editButton = taskElement.querySelector(".task-edit");
  const newArray = loadTasks();
  deleteButton.onclick = () => {
    removeTaskArray(index);
    checkingFunction(placeName);
  };
  editButton.onclick = () => {
    editPopup(placeName, array, index);
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
  displayArrayUpcomingUi,
};
