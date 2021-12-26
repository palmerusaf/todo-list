import { Render } from "./render.js";
import "./project-list-controller";
import { pubsub } from "./pubsub.js";
import bem from "easy-bem";
import { formatDistance, formatDistanceToNow, subDays } from "date-fns";
import { kebabCase, capitalize, camelCase } from "lodash";

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
    taskField.appendChild(_makeAddNewTaskButton());
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
      project.taskList.forEach((task, index) =>
        list.appendChild(_makeTaskItem(task, index))
      );
      return list;

      function _makeTaskItem(task, index) {
        const item = document.createElement("span");
        item.classList = tf("task-item", {
          ["mark-done"]: task.taskCompleteStatus,
        });
        item.dataset.taskIndex = index;
        task.dueDate = _formatDueDate(task.dueDate);
        item.appendChild(_makeTaskMainView(task));
        item.appendChild(_makeTaskExpandedView(task));
        return item;

        function _formatDueDate(dueDate) {
          return formatDistanceToNow(new Date(dueDate), {
            addSuffix: true,
          }).replace("about ", "");
        }
      }

      function _makeTaskMainView(task) {
        const container = document.createElement("div");
        container.classList = tf("main-view");
        const mainTaskElements = ["title", "due date"];
        _appendTaskElements(container, task, mainTaskElements);
        container.appendChild(_makeExpandButton());
        return container;

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
          const taskDetailElements = ["description", "priority"];
          _appendTaskElements(container, task, taskDetailElements);
          return container;
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
            // button.addEventListener("click");
            return button;
          }

          function _makeDeleteTaskButton() {
            const button = Render.makeDeleteButton();
            button.addEventListener("click", _deleteTask);
            return button;

            function _deleteTask(clickEvent) {
              pubsub.publish(
                "taskDeleteClick",
                _getIndicesOfClickEvent(clickEvent)
              );
            }
          }

          function _makeToggleCompleteTaskButton() {
            const button = Render.makeCheckButton();
            button.addEventListener("click", toggleTaskComplete);
            return button;

            function toggleTaskComplete(clickEvent) {
              pubsub.publish(
                "toggleTaskCompleteClick",
                _getIndicesOfClickEvent(clickEvent)
              );
            }
          }

          function _getIndicesOfClickEvent(clickEvent) {
            const taskIndex =
              clickEvent.target.parentNode.parentNode.parentNode.dataset
                .taskIndex;
            const projectIndex =
              clickEvent.target.parentNode.parentNode.parentNode.parentNode
                .parentNode.dataset.projectIndex;
            return { taskIndex, projectIndex };
          }
        }
      }

      function _appendTaskElements(container, task, taskElements) {
        taskElements.forEach((taskElement) =>
          container.appendChild(_makeTaskElement(task, taskElement))
        );

        function _makeTaskElement(task, elementType) {
          const label = _makeLabel(elementType);
          const span = document.createElement("span");
          span.textContent = task[camelCase(elementType)];
          label.appendChild(span);
          return label;

          function _makeLabel(elementType) {
            const label = document.createElement("label");
            label.classList = `${tf("label")} ${tf(kebabCase(elementType))}`;
            label.textContent = capitalize(elementType) + ": ";
            return label;
          }
        }
      }
    }

    function _makeAddNewTaskButton() {
      const button = Render.makeAddButton();
      button.classList.add(tf("add-button"));
      return button;
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
