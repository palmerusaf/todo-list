import { Render } from "./render.js";
import "./project-list-controller";
import { pubsub } from "./pubsub.js";

export const RenderProjectField = (() => {
  pubsub.subscribe("updateListOfProjects", renderProjectFieldContent);

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
    span.classList.add("project-field__item");
    span.dataset.projectIndex = index;
    // span.appendChild(_makeProjectTitle(project));
    return span;
  }

  function _makeProjectTitle(project) {}

  function _makeProjectDeleteButton() {}

  function _makeProjectEditButton() {}

  function _makeProjectEntryForm() {}

  function _makeProjectSubmitFormButton() {}

  return {
    projectField,
  };
})();
