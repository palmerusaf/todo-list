import { pubsub } from "./pubsub.js";
import bem from "easy-bem";
import { formatDistanceToNow } from "date-fns";
import { kebabCase, capitalize, camelCase } from "lodash";
import IconButton from "./components/icon-button";
import TaskForm from "./components/task-form.js";
import dom from "jsx-render";

export const RenderTaskField = (() => {
  // for bem class names
  const tf = bem("task-field");
  const tForm = bem("task-form");

  // Initialize PubSubs
  pubsub.subscribe("updateListOfProjects", renderTaskFieldContent);

  // Initialize taskField
  const taskField = document.createElement("div");
  taskField.classList.add(tf());

  function renderTaskFieldContent(projects) {
    taskField.textContent = "";

    const project = _getActiveProject(projects);
    if (!project) return;

    const projectIndex = _getActiveProjectIndex(projects);
    taskField.dataset.projectIndex = projectIndex;
    taskField.appendChild(ProjectTitle(project));
    taskField.appendChild(Tasks(project));
    taskField.appendChild(NewTaskButton());
    return taskField;

    function ProjectTitle(project) {
      return (
        <h1 className="task-field__project-title">
          {`Task List for ${project.title}`}
        </h1>
      );
    }

    function Tasks(project) {
      const list = document.createElement("div");
      list.classList.add(tf("task-list"));
      project.tasks.forEach((task, index) =>
        list.appendChild(TaskItem(task, index))
      );
      return list;

      function TaskItem(task, index) {
        const item = document.createElement("span");
        item.classList = tf("task-item", {
          ["mark-done"]: task.isDone,
        });
        item.dataset.taskIndex = index;
        item.dataset.dueDate = task.dueDate;
        item.appendChild(MainView(task));
        item.appendChild(ExpandedView(task));
        return item;
      }

      function MainView(task) {
        const container = document.createElement("div");
        container.classList = tf("main-view");
        const mainTaskElements = ["title", "due date"];
        _appendTaskElements(container, task, mainTaskElements);
        container.appendChild(ExpandButton());
        return container;

        function ExpandButton() {
          const button = IconButton({ type: "arrow_back_ios" });
          button.classList.add(tf("expand-button"));
          button.addEventListener("click", expand);
          return button;

          function expand(e) {
            const expandButton = e.target;
            const expandableField = e.target.parentNode.nextSibling;
            expandableField.classList.toggle(tf("expanded-view") + "--hidden");
            expandButton.classList.toggle(tf("expand-button") + "--rotate");
          }
        }
      }

      function ExpandedView(task) {
        const container = document.createElement("div");
        container.classList = tf("expanded-view", { hidden: true });
        container.appendChild(DetailsField(task));
        container.appendChild(ButtonField());
        return container;

        function DetailsField(task) {
          const container = document.createElement("div");
          container.classList.add(tf("details"));
          const taskDetailElements = ["description", "priority"];
          _appendTaskElements(container, task, taskDetailElements);
          return container;
        }

        function ButtonField() {
          const container = document.createElement("div");
          container.classList = tf("button-field");
          container.appendChild(ToggleDoneButton());
          container.appendChild(EditButton());
          container.appendChild(DeleteButton());
          return container;

          function EditButton() {
            const button = IconButton({ type: "edit" });
            button.addEventListener("click", enterEditMode);
            return button;

            function enterEditMode(event) {
              const taskNode = event.target.parentNode.parentNode.parentNode;
              const tasks = document.querySelector(`.${tf("task-list")}`);
              tasks.replaceChild(PreFilledForm(taskNode), taskNode);

              function PreFilledForm(taskNode) {
                const taskData = getData(taskNode);
                const form = TaskForm();

                const title = form.querySelector("input[name='title']");
                const dueDate = form.querySelector("input[name='due-date']");
                const description = form.querySelector(
                  "input[name='description']"
                );
                const priority = form.querySelector(".task-field__selector");

                title.value = taskData.title;
                dueDate.valueAsDat;
                description.value = taskData.description;
                priority.value = taskData.priority;
                form.dataset.taskIndex = taskData.taskIndex;
                return form;

                function getData(taskNode) {
                  const taskIndex = taskNode.dataset.taskIndex;
                  const dueDate = taskNode.dataset.dueDate;
                  const title = taskNode.querySelector(
                    `.${tf("title")} span`
                  ).textContent;
                  const description = taskNode.querySelector(
                    `.${tf("description")} span`
                  ).textContent;
                  const priority = taskNode.querySelector(
                    `.${tf("priority")} span`
                  ).textContent;
                  return {
                    taskIndex,
                    dueDate,
                    title,
                    description,
                    priority,
                  };
                }
              }
            }
          }

          function DeleteButton() {
            const button = IconButton({ type: "delete" });
            button.addEventListener("click", _deleteTask);
            return button;

            function _deleteTask(e) {
              pubsub.publish("taskDeleteClick", {
                taskIndex: getTaskIndex(e),
                projectIndex: getProjectIndex(e),
              });
            }
          }

          function ToggleDoneButton() {
            const button = IconButton({ type: "check" });
            button.addEventListener("click", toggleTaskComplete);
            return button;

            function toggleTaskComplete(e) {
              pubsub.publish("toggleTaskCompleteClick", {
                taskIndex: getTaskIndex(e),
                projectIndex: getProjectIndex(e),
              });
            }
          }

          function getTaskIndex(e) {
            return e.target.parentNode.parentNode.parentNode.dataset.taskIndex;
          }

          function getProjectIndex(e) {
            return e.target.parentNode.parentNode.parentNode.parentNode
              .parentNode.dataset.projectIndex;
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
          elementType === "due date"
            ? (span.textContent = _formatDueDate(task[camelCase(elementType)]))
            : (span.textContent = task[camelCase(elementType)]);
          label.appendChild(span);
          return label;

          function _formatDueDate(dueDate) {
            return formatDistanceToNow(new Date(dueDate), {
              addSuffix: true,
            }).replace("about ", "");
          }

          function _makeLabel(elementType) {
            const label = document.createElement("label");
            label.classList = `${tf("label")} ${tf(kebabCase(elementType))}`;
            label.textContent = capitalize(elementType) + ": ";
            return label;
          }
        }
      }
    }

    function NewTaskButton() {
      const button = IconButton({ type: "add" });
      button.classList.add(tf("add-button"));
      button.addEventListener("click", _appendTaskForm, { once: true });
      return button;
    }

    function _appendTaskForm(event) {
      taskField.insertBefore(TaskForm(), event.target);
    }

    function _getActiveProject(projects) {
      return projects.filter((project) => project.isActive)[0];
    }

    function _getActiveProjectIndex(projects) {
      return projects.findIndex((project) => project.isActive);
    }
  }

  return { taskField };
})();
