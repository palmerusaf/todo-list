import { RenderProjectField } from "./render-project-field";
import bem from "easy-bem";
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

  function _iconButton(content) {
    const button = document.createElement("button");
    button.classList.add(
      "material-icons-outlined",
      "button",
      `button__${content}`
    );
    button.textContent = content;
    return button;
  }

  const addButton = () => {
    return _iconButton("add");
  };

  const editButton = () => {
    return _iconButton("edit");
  };

  const deleteButton = () => {
    return _iconButton("delete");
  };

  const checkButton = () => {
    return _iconButton("check");
  };

  const expandButton = () => {
    return _iconButton("arrow_back_ios");
  };

  const toDoList = () => {
    const projectField = RenderProjectField.projectField;
    const taskField = RenderTaskField.taskField;
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("to-do-list");
    contentContainer.appendChild(projectField);
    contentContainer.appendChild(taskField);
    return contentContainer;
  };

  const footer = () => {
    const f = bem("footer");
    const container = document.createElement("footer");
    container.classList = f();

    const link = document.createElement("a");
    link.classList = f("link");
    link.textContent = "GitHub Repo";
    link.href = "https://github.com/palmerusaf/todo-list";
    container.appendChild(link);

    const logo = document.createElement("img");
    logo.classList = f("logo");
    logo.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";
    logo.alt = "git hub logo";
    container.appendChild(logo);

    return container;
  };

  return {
    addButton,
    editButton,
    deleteButton,
    checkButton,
    expandButton,
    toDoList,
    footer,
  };
})();
