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
      console.log(project);
      title.textContent = `Task List for ${project.title}`;
      return title;
    }

    function _makeTaskList(project) {
      const list = document.createElement("div");
      list.classList.add(tf("task-list"));
      project.taskList.forEach((task) => list.appendChild(_makeTaskItem(task)));
      return list;

      function _makeTaskItem(task) {
        const item = document.createElement("span");
        item.classList = tf("task-item", {
          ["mark-done"]: task.taskCompleteStatus,
        });
        item.appendChild(_makeTaskMainView(task));
        item.appendChild(_makeTaskExpandedView(task));
        return item;
      }

      function _makeTaskMainView(task) {
        const container = document.createElement("div");
        return container;
      }
      function _makeTaskExpandedView(task) {
        const container = document.createElement("div");
        return container;
      }
    }

    function _getActiveProject(projectList) {
      return projectList.filter((project) => project.activeStatus)[0];
    }
  }

  return { taskField };
})();
// {
// "title": "task0 for project b",
// "description": "description0",
// "dueDate": "1989-10-24T17:00:00.000Z",
// "priority": "0",
// "taskCompleteStatus": false
//   }
