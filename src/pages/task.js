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
  displayArrayDate(array); //assuring the array by date
  const currentDay = new Date();
  const { firstDayOfWeek, lastDayOfWeek } = settingTheWeek(currentDay);

  const dayOfWeek = currentDay.getDate();

  array.forEach((element, index) => {
    const objectDate = new Date(element.Date); //FOR example 2021-12-01;
    if (objectDate === dayOfWeek) {
      appendingTask(array, element, index, today);
    } else if (objectDate >= firstDayOfWeek && objectDate <= lastDayOfWeek) {
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
function displayArrayDate(array) {
  let biggestDate = new Date("1400-01-01");
  let latestObj;
  let position = 0;
  let newArray = [];

  while (array.length !== 0) {
    array.forEach((element, index) => {
      const firstDate = new Date(element.Date);
      if (biggestDate < firstDate) {
        biggestDate = firstDate;
        latestObj = element;
        position = index;
      }
    });
    RemoveItemArray(array, position);
    newArray.push(latestObj);
  }

  return newArray;
}

export { createTaskObject, DisplayArrayUi };
