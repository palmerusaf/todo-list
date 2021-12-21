import { Render } from "./render.js";
import "./project-list-controller";
import { pubsub } from "./pubsub.js";
import bem from "easy-bem";
import { formatDistance, formatDistanceToNow, subDays } from "date-fns";

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
    taskField.textContent = "";

    const project = _getActiveProject(projectList);
    if (!project) return;

    const projectIndex = _getActiveProjectIndex(projectList);
    taskField.dataset.projectIndex = projectIndex;
    taskField.appendChild(_makeProjectTitle(project));
    taskField.appendChild(_makeTaskList(project));
    return taskField;

    function _makeProjectTitle(project) {
      const title = document.createElement("h1");
      title.classList.add(tf("project-title"));
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
        container.classList = tf("main-view");
        container.appendChild(_makeTaskTitle(task));
        container.appendChild(_makeDueDate(task));
        container.appendChild(_makeExpandButton());
        return container;

        function _makeTaskTitle(task) {
          const title = document.createElement("span");
          title.classList = tf("title");
          title.textContent = task.title;
          return title;
        }

        function _makeDueDate(task) {
          const dueDate = document.createElement("span");
          const formattedDate = _formatDueDate(task.dueDate);
          dueDate.classList = tf("dueDate");
          dueDate.textContent = `Due Date: ${formattedDate}`;
          return dueDate;

          function _formatDueDate(dueDate) {
            return formatDistanceToNow(new Date(dueDate), {
              addSuffix: true,
            }).replace("about ", "");
          }
        }

        function _makeExpandButton() {
          const button = Render.makeExpandButton();
          button.classList.add(tf("expand-button"));
          button.addEventListener("click", _expandDetails);
          return button;

          function _expandDetails(clickEvent) {
            const expandButton = clickEvent.target;
            const expandableField = clickEvent.target.parentNode.nextSibling;
            expandableField.classList.toggle(tf("expanded-view") + "--hidden");
            expandButton.classList.toggle(tf("expand-button") + "--rotate");
          }
        }
      }

      function _makeTaskExpandedView(task) {
        const container = document.createElement("div");
        container.classList = tf("expanded-view", { hidden: true });
        container.appendChild(_makeDetailsField(task));
        container.appendChild(_makeButtonField());
        return container;

        function _makeDetailsField(task) {
          const container = document.createElement("div");
          container.classList.add(tf("details"));
          container.appendChild(_makeDescription(task));
          container.appendChild(_makePriority(task));
          return container;

          function _makeDescription(task) {
            const description = document.createElement("span");
            description.textContent = `Description: ${task.description}`;
            return description;
          }

          function _makePriority(task) {
            const priority = document.createElement("span");
            priority.textContent = `Priority: ${task.priority}`;
            return priority;
          }
        }

        function _makeButtonField() {
          const container = document.createElement("div");
          container.classList = tf("button-field");
          container.appendChild(_makeToggleCompleteTaskButton());
          container.appendChild(_makeEditTaskButton());
          container.appendChild(_makeDeleteTaskButton());
          return container;

          function _makeEditTaskButton() {
            const button = Render.makeEditButton();
            return button;
          }

          function _makeDeleteTaskButton() {
            const button = Render.makeDeleteButton();
            return button;
          }

          function _makeToggleCompleteTaskButton() {
            const button = Render.makeCheckButton();
            return button;
          }
        }
      }
    }

    function _getActiveProject(projectList) {
      return projectList.filter((project) => project.activeStatus)[0];
    }

    function _getActiveProjectIndex(projectList) {
      return projectList.findIndex((project) => project.activeStatus);
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
