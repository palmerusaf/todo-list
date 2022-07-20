import { pubsub } from "../pubsub.js";
import bem from "easy-bem";
import { formatDistanceToNow } from "date-fns";
import { kebabCase, capitalize, camelCase } from "lodash";
import IconButton from "./icon-button";

export default function TaskField() {
  // for bem class names
  const tf = bem("task-field");
  const tForm = bem("task-form");

  // Initialize PubSubs
  pubsub.subscribe("updateListOfProjects", TaskFieldItems);

  function TaskFieldItems(projects) {
    taskField.textContent = "";

    const project = _getActiveProject(projects);
    if (!project) return;

    const projectIndex = _getActiveprojectIndex(projects);
    taskField.dataset.projectIndex = projectIndex;
    taskField.appendChild(_makeProjectTitle(project));
    taskField.appendChild(_maketasks(project));
    taskField.appendChild(_makeAddNewTaskButton());
    return taskField;

    function _makeProjectTitle(project) {
      const title = document.createElement("h1");
      title.classList.add(tf("project-title"));
      title.textContent = `Task List for ${project.title}`;
      return title;
    }

    function _maketasks(project) {
      const list = document.createElement("div");
      list.classList.add(tf("task-list"));
      project.tasks.forEach((task, index) =>
        list.appendChild(_makeTaskItem(task, index))
      );
      return list;

      function _makeTaskItem(task, index) {
        const item = document.createElement("span");
        item.classList = tf("task-item", {
          ["mark-done"]: task.isDone,
        });
        item.dataset.taskId = index;
        item.dataset.dueDate = task.dueDate;
        item.appendChild(_makeTaskMainView(task));
        item.appendChild(_makeTaskExpandedView(task));
        return item;
      }

      function _makeTaskMainView(task) {
        const container = document.createElement("div");
        container.classList = tf("main-view");
        const mainTaskElements = ["title", "due date"];
        _appendTaskElements(container, task, mainTaskElements);
        container.appendChild(_makeExpandButton());
        return container;

        function _makeExpandButton() {
          const button = IconButton({ type: "arrow_back_ios" });
          button.classList.add(tf("expand-button"));
          button.addEventListener("click", _expandDetails);
          return button;

          function _expandDetails(e) {
            const expandButton = e.target;
            const expandableField = e.target.parentNode.nextSibling;
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
            const button = IconButton({ type: "edit" });
            button.addEventListener("click", _replaceTaskItemWithPreFilledForm);
            return button;

            function _replaceTaskItemWithPreFilledForm(event) {
              const taskNode = _getTaskNodeFromEvent(event);
              const preFilledForm = _makePreFilledForm(taskNode);
              const tasks = document.querySelector(`.${tf("task-list")}`);
              tasks.replaceChild(preFilledForm, taskNode);

              function _getTaskNodeFromEvent(event) {
                return event.target.parentNode.parentNode.parentNode;
              }

              function _makePreFilledForm(taskNode) {
                const taskData = _scrapDataFromTaskNode(taskNode);
                const form = _makeNewTaskEntryForm();

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
                form.dataset.taskId = taskData.taskId;
                return form;

                function _scrapDataFromTaskNode(taskNode) {
                  const taskId = taskNode.dataset.taskId;
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
                    taskId,
                    dueDate,
                    title,
                    description,
                    priority,
                  };
                }
              }
            }
          }

          function _makeDeleteTaskButton() {
            const button = IconButton({ type: "delete" });
            button.addEventListener("click", _deleteTask);
            return button;

            function _deleteTask(e) {
              pubsub.publish("taskDeleteClick", _getIndicesOfe(e));
            }
          }

          function _makeToggleCompleteTaskButton() {
            const button = IconButton({ type: "check" });
            button.addEventListener("click", toggleTaskComplete);
            return button;

            function toggleTaskComplete(e) {
              pubsub.publish("toggleTaskCompleteClick", _getIndicesOfe(e));
            }
          }

          function _getIndicesOfe(e) {
            const taskId =
              e.target.parentNode.parentNode.parentNode.dataset.taskId;
            const projectIndex =
              e.target.parentNode.parentNode.parentNode.parentNode.parentNode
                .dataset.projectIndex;
            return { taskId, projectIndex };
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
        }
      }
    }

    function _makeAddNewTaskButton() {
      const button = IconButton({ type: "add" });
      button.classList.add(tf("add-button"));
      button.addEventListener("click", _appendTaskForm, { once: true });
      return button;
    }

    function _appendTaskForm(event) {
      taskField.insertBefore(_makeNewTaskEntryForm(), event.target);
    }

    function _makeNewTaskEntryForm() {
      const form = _makeFormContainer();
      _appendFormElements();
      return form;

      function _makeFormContainer() {
        const form = document.createElement("form");
        form.classList = `${tf("task-item")} ${tForm()}`;
        return form;
      }

      function _appendFormElements() {
        form.appendChild(_makeTopForm());
        form.appendChild(_makeBottomForm());
        form.appendChild(_makeSubmitButton());

        function _makeTopForm() {
          const container = document.createElement("div");
          container.classList = tForm("top");
          container.appendChild(_makeTitleElement());
          container.appendChild(_makeDueDateElement());
          return container;

          function _makeTitleElement() {
            const label = _makeLabel("title");
            label.appendChild(_makeTextEntryBox("title"));
            label.classList += ` ${tForm("title")}`;
            return label;
          }

          function _makeDueDateElement() {
            const label = _makeLabel("due date");
            label.appendChild(_makeDateEntryBox());
            return label;

            function _makeDateEntryBox() {
              const dateBox = document.createElement("input");
              dateBox.type = "date";
              dateBox.required = "true";
              dateBox.name = "due-date";
              return dateBox;
            }
          }
        }

        function _makeBottomForm() {
          const container = document.createElement("div");
          container.classList = tForm("bottom");
          container.appendChild(_makeDescriptionElement());
          container.appendChild(_makePriorityElement());
          return container;

          function _makeDescriptionElement() {
            const label = _makeLabel("description");
            label.appendChild(_makeTextEntryBox("description"));
            return label;
          }

          function _makePriorityElement() {
            const label = _makeLabel("priority");
            label.appendChild(_makePrioritySelector());
            return label;

            function _makePrioritySelector() {
              const selector = document.createElement("select");
              selector.classList = tf("selector");
              selector.required = "true";
              const placeholder = document.createElement("option");
              placeholder.value = "";
              placeholder.textContent = "Level";
              selector.appendChild(placeholder);
              _appendOptions();
              return selector;

              function _appendOptions() {
                const optionValues = ["High", "Medium", "Low"];
                optionValues.forEach((optionValue) =>
                  selector.appendChild(_makeOption(optionValue))
                );

                function _makeOption(optionValue) {
                  const option = document.createElement("option");
                  option.value = optionValue;
                  option.textContent = optionValue;
                  return option;
                }
              }
            }
          }
        }

        function _makeTextEntryBox(elementType) {
          const entryBox = document.createElement("input");
          entryBox.classList = `project-field__text-box ${tForm("text-box")}`;
          entryBox.type = "text";
          entryBox.required = "true";
          entryBox.name = kebabCase(elementType);
          entryBox.placeholder = `Enter task ${elementType}`;
          return entryBox;
        }

        function _makeSubmitButton() {
          const button = IconButton({ type: "check" });
          button.classList += ` ${tForm("submit")}`;
          button.addEventListener("click", _submitTaskForm);
          return button;
        }
      }

      function _submitTaskForm(event) {
        event.preventDefault();
        const form = event.target.parentNode;
        if (!form.checkValidity()) return;
        const title = form.querySelector("input[name='title']").value;
        const dueDate = form.querySelector("input[name='due-date']").value;
        const description = form.querySelector(
          "input[name='description']"
        ).value;
        const priority = form.querySelector(".task-field__selector").value;
        const projectIndex = taskField.dataset.projectIndex;
        const taskId = form.dataset.taskId;
        const task = {
          title,
          description,
          dueDate,
          priority,
          projectIndex,
          taskId,
        };
        pubsub.publish("taskAddClick", task);
      }
    }
    function _makeLabel(elementType) {
      const label = document.createElement("label");
      label.classList = `${tf("label")} ${tf(kebabCase(elementType))}`;
      label.textContent = capitalize(elementType) + ": ";
      return label;
    }

    function _getActiveProject(projects) {
      return projects.filter((project) => project.isActive)[0];
    }

    function _getActiveprojectIndex(projects) {
      return projects.findIndex((project) => project.isActive);
    }
  }

  const RenderTaskField = (() => {
    // Initialize taskField
    const taskField = document.createElement("div");
    taskField.classList.add(tf());
    return { taskField };
  })();

  return RenderTaskField.taskField;
}
