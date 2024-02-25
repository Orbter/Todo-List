import { optionCrater } from "./userForm";
import { loadProject } from "./taskStorage";
function updateProjectButton() {
  const button = document.getElementById("form-project");
  while (button.firstChild) {
    button.removeChild(button.firstChild);
  }
  const newProjects = loadProject();
  optionCrater(newProjects, button);
}

export { updateProjectButton };
