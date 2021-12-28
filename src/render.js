import { RenderProjectField } from "./render-project-field";
import { RenderTaskField } from "./render-task-field";

export const Render = (() => {
  // Link stylesheet for icons
  {
    const googleIconsStyleSheet = document.createElement("link");
    googleIconsStyleSheet.href =
      "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
    googleIconsStyleSheet.rel = "stylesheet";
    document.head.appendChild(googleIconsStyleSheet);
  }

  function _makeIconButton(content) {
    const button = document.createElement("button");
    button.classList.add(
      "material-icons-outlined",
      "button",
      `button__${content}`
    );
    button.textContent = content;
    return button;
  }

  const makeAddButton = () => {
    return _makeIconButton("add");
  };

  const makeEditButton = () => {
    return _makeIconButton("edit");
  };

  const makeDeleteButton = () => {
    return _makeIconButton("delete");
  };

  const makeCheckButton = () => {
    return _makeIconButton("check");
  };

  const makeExpandButton = () => {
    return _makeIconButton("arrow_back_ios");
  };

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
    makeAddButton,
    makeEditButton,
    makeDeleteButton,
    makeCheckButton,
    makeExpandButton,
    makeToDoList,
  };
})();
