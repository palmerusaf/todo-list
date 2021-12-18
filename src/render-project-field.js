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
    projectField.appendChild(_makeAddProjectButton());
  }

  function _makeAddProjectButton() {
    const button = Render.makeAddButton();
    button.addEventListener("click", _makeProjectEntryForm);
    const span = document.createElement("span");
    span.classList = pf("item");
    span.classList.add(pf("add"));
    span.appendChild(button);
    return span;
  }

  function _makeProjectItem(project, index) {
    const span = document.createElement("span");
    span.classList = pf("item", { active: project.activeStatus });
    span.dataset.projectIndex = index;
    span.addEventListener("click", _setItemActiveOnClick);
    span.appendChild(_makeProjectTitle(project, index));
    span.appendChild(_makeButtonField(index));
    return span;
  }

  function _setItemActiveOnClick(clickEvent) {
    if (buttonWasClicked(clickEvent)) return;
    const projectIndex = this.dataset.projectIndex;
    pubsub.publish("projectSetActiveClick", { projectIndex });

    function buttonWasClicked(clickEvent) {
      return [...clickEvent.target.classList].includes("button");
    }
  }

  function _makeProjectTitle(project, index) {
    const span = document.createElement("span");
    span.classList = pf("title");
    span.textContent = project.title;
    return span;
  }

  function _makeButtonField(index) {
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

  function _deleteProjectOnClick() {
    const projectIndex = this.parentNode.parentNode.dataset.projectIndex;
    pubsub.publish("projectDeleteClick", { projectIndex });
  }

  function _makeProjectEditButton() {
    const button = Render.makeEditButton();
    button.addEventListener("click", _handleEditButtonClick);
    return button;
  }

  function _handleEditButtonClick() {
    replaceLabelWithForm(this);

    function replaceLabelWithForm(clickEvent) {
      const projectIndex =
        clickEvent.parentNode.parentNode.dataset.projectIndex;
      const projectTitle = getProjectTitle(projectIndex);
      const projectLabel = getProjectLabel(projectIndex);
      const preFilledForm = _makeProjectEntryForm(projectTitle);

      projectField.replaceChild(preFilledForm, projectLabel);

      function getProjectLabel(projectIndex) {
        return document.querySelector(
          `[data-project-index='${projectIndex}'].${pf("item")}`
        );
      }
    }
  }

  function _makeProjectEntryForm(projectTitle) {
    const p = document.createElement("p");
    p.textContent = projectTitle;
    return p;
  }

  function _makeProjectSubmitFormButton() {}

  function getProjectTitle(projectIndex) {
    return document.querySelector(
      `[data-project-index='${projectIndex}'] .${pf("title")}`
    ).textContent;
  }

  return {
    getProjectTitle,
    projectField,
  };
})();
