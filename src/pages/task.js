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
function DisplayArrayUi(array, place) {
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

export { createTaskObject, DisplayArrayUi };
