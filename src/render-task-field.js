import { Render } from "./render.js";
import "./project-list-controller";
import { pubsub } from "./pubsub.js";
import bem from "easy-bem";

export const RenderTaskField = (() => {
  // for bem class names
  const tf = bem("task-field");

  // Initialize PubSubs
  pubsub.subscribe("updateListOfProjects", renderTaskFieldContent);

  // Initialize taskField
  const taskField = document.createElement("div");
  taskField.classList.add(tf());
  taskField.textContent = "test";

  function renderTaskFieldContent(projectList) {
    const project = _getActiveProject(projectList);
    taskField.textContent = "";
    if (!project) return;
    taskField.appendChild(_makeProjectTitle(project));
    taskField.appendChild(_makeTaskList(project));
    return taskField;

    function _makeProjectTitle(project) {
      const title = document.createElement("h1");
      title.classList.add(tf("title"));
      return title;
    }
    function _makeTaskList(project) {
      const list = document.createElement("div");
      list.classList.add(tf("task-list"));
      return list;
    }
    function _getActiveProject(projectList) {
      return projectList.filter((project) => project.activeStatus);
    }
  }

  return { taskField };
})();
