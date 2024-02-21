const createTaskObject = (Name, Owner, Status, Priority, Tags, Date) => ({
  Name,
  Owner,
  Status,
  Priority,
  Tags,
  Date,
});
import createTaskUI from "./taskUI";
function DisplayArrayUi(array, place) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    place.append(createTaskUI(element));
  }
}

export { createTaskObject, DisplayArrayUi };
