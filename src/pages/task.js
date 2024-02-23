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
function DisplayArrayUi(array, place) {
  const arrayCopy = array;
  array.forEach((element, index) => {
    const taskElement = createTaskUI(element);
    const deleteButton = taskElement.querySelector(".task-delete");
    const editButton = taskElement.querySelector(".task-edit");
    deleteButton.onclick = () => {
      RemoveItemArray(array, index);
      HomeUI(array);
    };
    editButton.onclick = () => {
      editPopup("Home", array, index);
    };

    place.append(taskElement);
  });
}
function displayArrayHome(array, today, week, allTime) {
  sortArrayByDate(array); //assuring the array by date
  const currentDay = new Date();
  const todayDateOnly = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );

  const { firstDayOfWeek, lastDayOfWeek } = settingTheWeek(currentDay);

  const dayOfWeek = currentDay.getDate();

  array.forEach((element, index) => {
    const objectDate = new Date(element.Date); // For example, 2021-12-01
    const objectDateOnly = new Date(
      objectDate.getFullYear(),
      objectDate.getMonth(),
      objectDate.getDate()
    );

    // Corrected comparison for determining if the event is "today"
    if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
      appendingTask(array, element, index, today);
    } else if (
      objectDateOnly >= firstDayOfWeek &&
      objectDateOnly <= lastDayOfWeek
    ) {
      appendingTask(array, element, index, week);
    } else {
      appendingTask(array, element, index, allTime);
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
  deleteButton.onclick = () => {
    RemoveItemArray(array, index);
    HomeUI(array);
  };
  editButton.onclick = () => {
    editPopup("Home", array, index);
  };

  place.append(taskElement);
};
function sortArrayByDate(array) {
  array.sort((a, b) => new Date(a.Date) - new Date(b.Date));
}

export { createTaskObject, DisplayArrayUi, displayArrayHome };
