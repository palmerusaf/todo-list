import { RenderProjectField } from "./render-project-field";
import { RenderTaskField } from "./render-task-field";
import "./append-google-styles.js";

export const Render = (() => {
  const makeToDoList = () => {
    const projectField = RenderProjectField.projectField;
    const taskField = RenderTaskField.taskField;
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("to-do-list");
    contentContainer.appendChild(projectField);
    contentContainer.appendChild(taskField);
    return contentContainer;
  };

  return {
    makeToDoList,
  };
})();
