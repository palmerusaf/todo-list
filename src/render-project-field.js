import { Render } from "../render.js";
import "../project-list-controller";
import { pubsub } from "./pubsub.js";

export const RenderProjectField = (() => {
  pubsub.subscribe("updateListOfProjects", renderProjectFieldContent);

  const projectField = document.createElement("div");
  projectField.classList.add("project-field");

  function renderProjectFieldContent(projectList) {}

  function _makeProjectTitle() {}

  function _makeProjectDeleteButton() {}

  function _makeProjectEditButton() {}

  function _makeProjectEntryForm() {}

  function _makeProjectSubmitFormButton() {}

  return {
    projectField,
  };
})();
