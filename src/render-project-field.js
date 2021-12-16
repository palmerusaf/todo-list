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

  function _makeProjectSpan(cssElementName) {
    return Render.makeBEMSpan("project-field", cssElementName);
  }

  function _makeProjectItem(project, index) {
    const span = _makeProjectSpan("item");
    span.dataset.projectIndex = index;
    span.appendChild(_makeProjectTitle(project));
    span.appendChild(_makeProjectEditButton());
    span.appendChild(_makeProjectDeleteButton());
    return span;
  }

  function _makeProjectTitle(project) {
    const span = _makeProjectSpan("title");
    span.textContent = project.title;
    return span;
  }

  function _makeProjectDeleteButton() {
    const span = _makeProjectSpan("button");
    span.appendChild(Render.makeDeleteButton());
    span.addEventListener("click", _deleteProjectOnClick);
    return span;
  }

  function _deleteProjectOnClick(clickEvent) {
    const projectIndex =
      clickEvent.target.parentNode.parentNode.dataset.projectIndex;
    console.log(projectIndex);
    pubsub.publish("projectDeleteClick", { projectIndex });
  }

  function _makeProjectEditButton() {
    const span = _makeProjectSpan("button");
    span.appendChild(Render.makeEditButton());
    return span;
  }

  function _makeProjectEntryForm() {}

  function _makeProjectSubmitFormButton() {}

  return {
    projectField,
  };
})();
