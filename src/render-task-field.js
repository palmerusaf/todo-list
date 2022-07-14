import { Render } from "./render.js";
import { pubsub } from "./pubsub.js";
import bem from "easy-bem";
import { formatDistanceToNow } from "date-fns";
import { kebabCase, capitalize, camelCase } from "lodash";

export const RenderTaskField = (() => {
  // for bem class names
  const tf = bem("task-field");
  const tForm = bem("task-form");

  // Initialize PubSubs
  pubsub.subscribe("updateListOfProjects", renderTaskFieldContent);

  // Initialize taskField
  const taskField = document.createElement("div");
  taskField.classList.add(tf());

  function renderTaskFieldContent(projectList) {
    taskField.textContent = "";

    const project = _getActiveProject(projectList);
    if (!project) return;

    const projectIndex = _getActiveProjectIndex(projectList);
    taskField.dataset.projectIndex = projectIndex;
    taskField.appendChild(_projectTitle(project));
    taskField.appendChild(_taskList(project));
    taskField.appendChild(_addNewTaskButton());
    return taskField;

    function _projectTitle(project) {
      const title = document.createElement("h1");
      title.classList.add(tf("project-title"));
      title.textContent = `Task List for ${project.title}`;
      return title;
    }

    function _taskList(project) {
      const list = document.createElement("div");
      list.classList.add(tf("task-list"));
      project.taskList.forEach((task, index) =>
        list.appendChild(_taskItem(task, index))
      );
      return list;

      function _taskItem(task, index) {
        const item = document.createElement("span");
        item.classList = tf("task-item", {
          ["mark-done"]: task.taskCompleteStatus,
        });
        item.dataset.taskIndex = index;
        item.dataset.dueDate = task.dueDate;
        item.appendChild(_taskMainView(task));
        item.appendChild(_taskExpandedView(task));
        return item;
      }

      function _taskMainView(task) {
        const container = document.createElement("div");
        container.classList = tf("main-view");
        const mainTaskElements = ["title", "due date"];
        _appendTaskElements(container, task, mainTaskElements);
        container.appendChild(_expandButton());
        return container;

        function _expandButton() {
          const button = Render.expandButton();
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

      function _taskExpandedView(task) {
        const container = document.createElement("div");
        container.classList = tf("expanded-view", { hidden: true });
        container.appendChild(_detailsField(task));
        container.appendChild(_buttonField());
        return container;

        function _detailsField(task) {
          const container = document.createElement("div");
          container.classList.add(tf("details"));
          const taskDetailElements = ["description", "priority"];
          _appendTaskElements(container, task, taskDetailElements);
          return container;
        }

        function _buttonField() {
          const container = document.createElement("div");
          container.classList = tf("button-field");
          container.appendChild(_toggleCompleteTaskButton());
          container.appendChild(_EditTaskButton());
          container.appendChild(_deleteTaskButton());
          return container;

          function _EditTaskButton() {
            const button = Render.editButton();
            button.addEventListener("click", _replaceTaskItemWithPreFilledForm);
            return button;

            function _replaceTaskItemWithPreFilledForm(event) {
              const taskNode = _getTaskNodeFromEvent(event);
              const preFilledForm = _preFilledForm(taskNode);
              const taskList = document.querySelector(`.${tf("task-list")}`);
              taskList.replaceChild(preFilledForm, taskNode);

              function _getTaskNodeFromEvent(event) {
                return event.target.parentNode.parentNode.parentNode;
              }

              function _preFilledForm(taskNode) {
                const taskData = _scrapDataFromTaskNode(taskNode);
                const form = _newTaskEntryForm();
                form[0].value = taskData.title;
                form[1].valueAsDate = new Date(`${taskData.dueDate}`);
                form[2].value = taskData.description;
                form[3].value = taskData.priority;
                form.dataset.taskIndex = taskData.taskIndex;
                return form;

                function _scrapDataFromTaskNode(taskNode) {
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

          function _deleteTaskButton() {
            const button = Render.deleteButton();
            button.addEventListener("click", _deleteTask);
            return button;

            function _deleteTask(clickEvent) {
              pubsub.publish(
                "taskDeleteClick",
                _getIndicesOfClickEvent(clickEvent)
              );
            }
          }

          function _toggleCompleteTaskButton() {
            const button = Render.checkButton();
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
          container.appendChild(_taskElement(task, taskElement))
        );

        function _taskElement(task, elementType) {
          const label = _label(elementType);
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

    function _addNewTaskButton() {
      const button = Render.addButton();
      button.classList.add(tf("add-button"));
      button.addEventListener("click", _appendTaskForm, { once: true });
      return button;
    }

    function _appendTaskForm(event) {
      taskField.insertBefore(_newTaskEntryForm(), event.target);
    }

    function _newTaskEntryForm() {
      const form = _formContainer();
      _appendFormElements();
      return form;

      function _formContainer() {
        const form = document.createElement("form");
        form.classList = `${tf("task-item")} ${tForm()}`;
        return form;
      }

      function _appendFormElements() {
        form.appendChild(_topForm());
        form.appendChild(_BottomForm());
        form.appendChild(_SubmitButton());

        function _topForm() {
          const container = document.createElement("div");
          container.classList = tForm("top");
          container.appendChild(_title());
          container.appendChild(_dueDate());
          return container;

          function _title() {
            const label = _label("title");
            label.appendChild(_textEntryBox("title"));
            label.classList += ` ${tForm("title")}`;
            return label;
          }

          function _dueDate() {
            const label = _label("due date");
            label.appendChild(_DateEntryBox());
            return label;

            function _DateEntryBox() {
              const dateBox = document.createElement("input");
              dateBox.type = "date";
              dateBox.required = "true";
              dateBox.name = "due-date";
              return dateBox;
            }
          }
        }

        function _BottomForm() {
          const container = document.createElement("div");
          container.classList = tForm("bottom");
          container.appendChild(_DescriptionElement());
          container.appendChild(_PriorityElement());
          return container;

          function _DescriptionElement() {
            const label = _label("description");
            label.appendChild(_textEntryBox("description"));
            return label;
          }

          function _PriorityElement() {
            const label = _label("priority");
            label.appendChild(_prioritySelector());
            return label;

            function _prioritySelector() {
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
                  selector.appendChild(_Option(optionValue))
                );

                function _Option(optionValue) {
                  const option = document.createElement("option");
                  option.value = optionValue;
                  option.textContent = optionValue;
                  return option;
                }
              }
            }
          }
        }

        function _textEntryBox(elementType) {
          const entryBox = document.createElement("input");
          entryBox.classList = `project-field__text-box ${tForm("text-box")}`;
          entryBox.type = "text";
          entryBox.required = "true";
          entryBox.name = kebabCase(elementType);
          entryBox.placeholder = `Enter task ${elementType}`;
          return entryBox;
        }

        function _SubmitButton() {
          const button = Render.checkButton();
          button.classList += ` ${tForm("submit")}`;
          button.addEventListener("click", _submitTaskForm);
          return button;
        }
      }

      function _submitTaskForm(event) {
        event.preventDefault();
        const form = event.target.parentNode;
        if (!form.checkValidity()) return;
        const title = form[0].value;
        const dueDate = form[1].value;
        const description = form[2].value;
        const priority = form[3].value;
        const projectIndex = taskField.dataset.projectIndex;
        const taskIndex = form.dataset.taskIndex;
        const task = {
          title,
          description,
          dueDate,
          priority,
          projectIndex,
          taskIndex,
        };
        pubsub.publish("taskAddClick", task);
      }
    }
    function _label(elementType) {
      const label = document.createElement("label");
      label.classList = `${tf("label")} ${tf(kebabCase(elementType))}`;
      label.textContent = capitalize(elementType) + ": ";
      return label;
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
