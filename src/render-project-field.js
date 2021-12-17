import { Render } from "./render.js";
import "./project-list-controller";
import { pubsub } from "./pubsub.js";
import bem from "easy-bem";

export const RenderProjectField = (() => {
  pubsub.subscribe("updateListOfProjects", renderProjectFieldContent);

  // for bem class names
  const pf = bem("project-field");

  const projectField = document.createElement("div");
  projectField.classList.add("project-field");

  function renderProjectFieldContent(projectList) {
    projectField.textContent = "";
    projectList.forEach((project, index) => {
      projectField.appendChild(_makeProjectItem(project, index));
    });
  }

  function _makeProjectItem(project, index) {
    const span = document.createElement("span");
    span.classList = pf("item", { active: project.activeStatus });
    span.dataset.projectIndex = index;
    span.addEventListener("click", setItemActive);
    span.appendChild(_makeProjectTitle(project));
    span.appendChild(_makeButtonField());
    return span;
  }

  function setItemActive(clickEvent) {
    const projectIndex = clickEvent.target.dataset.projectIndex;
    pubsub.publish("projectSetActiveClick", { projectIndex });
  }

  function _makeProjectTitle(project) {
    const span = document.createElement("span");
    span.classList = pf("title");
    span.textContent = project.title;
    return span;
  }

  function _makeButtonField() {
    const span = document.createElement("span");
    span.classList = pf("buttons");
    span.appendChild(_makeProjectEditButton());
    span.appendChild(_makeProjectDeleteButton());
    return span;
  }

  function _makeProjectDeleteButton() {
    const button = Render.makeDeleteButton();
    button.addEventListener("click", _deleteProjectOnClick);
    return button;
  }

  function _deleteProjectOnClick(clickEvent) {
    const projectIndex =
      clickEvent.target.parentNode.parentNode.dataset.projectIndex;
    pubsub.publish("projectDeleteClick", { projectIndex });
  }

  function _makeProjectEditButton() {
    const button = Render.makeEditButton();
    return button;
  }

  function _makeProjectEntryForm() {}

  function _makeProjectSubmitFormButton() {}

  return {
    projectField,
  };
})();
