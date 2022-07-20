import { pubsub } from "../pubsub.js";
import bem from "easy-bem";
import { kebabCase, capitalize } from "lodash";
import IconButton from "./icon-button";
import dom from "jsx-render";

export default function TaskForm() {
  const tf = bem("task-field");
  const tForm = bem("task-form");
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
    const description = form.querySelector("input[name='description']").value;
    const priority = form.querySelector(".task-field__selector").value;
    const projectIndex =
      document.querySelector(".task-field").dataset.projectIndex;
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
  function _makeLabel(elementType) {
    const label = document.createElement("label");
    label.classList = `${tf("label")} ${tf(kebabCase(elementType))}`;
    label.textContent = capitalize(elementType) + ": ";
    return label;
  }
}
