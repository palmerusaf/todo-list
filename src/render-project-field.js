import { Render } from "./render.js";
import { pubsub } from "./pubsub.js";
import bem from "easy-bem";

export const RenderProjectField = (() => {
  // for bem class names
  const pf = bem("project-field");

  // Initialize projectField
  const projectField = document.createElement("div");
  projectField.classList.add(pf());

  // Initialize PubSubs
  pubsub.subscribe("updateListOfProjects", renderProjectFieldContent);

  function renderProjectFieldContent(projectList) {
    projectField.textContent = "";
    projectField.appendChild(_expandFieldButton());
    projectList.forEach((project, index) => {
      projectField.appendChild(_projectItem(project, index));
    });
    projectField.appendChild(_addProjectButton());

    function _expandFieldButton() {
      const button = Render.expandButton();
      button.classList += ` ${pf("expand-button")}`;
      button.addEventListener("click", _expandProjectField);
      return button;

      function _expandProjectField(event) {
        const expandButton = event.target;
        expandButton.classList.toggle(pf("expand-button") + "--rotate");
        projectField.classList.toggle(pf() + "--expand");
      }
    }

    function _projectItem(project, index) {
      const span = document.createElement("span");
      span.classList = pf("item", { active: project.activeStatus });
      span.dataset.projectIndex = index;
      span.addEventListener("click", _setItemActiveOnClick);
      span.appendChild(_projectTitle(project, index));
      span.appendChild(_buttonField(index));
      return span;

      function _projectTitle(project) {
        const span = document.createElement("span");
        span.classList = pf("title");
        span.textContent = project.title;
        return span;
      }

      function _buttonField(index) {
        const span = document.createElement("span");
        span.classList = pf("buttons");
        span.appendChild(_projectEditButton());
        span.appendChild(_projectDeleteButton());
        return span;

        function _projectDeleteButton() {
          const button = Render.deleteButton();
          button.addEventListener("click", _deleteProjectOnClick);
          return button;

          function _deleteProjectOnClick() {
            const projectIndex =
              this.parentNode.parentNode.dataset.projectIndex;
            pubsub.publish("projectDeleteClick", { projectIndex });
          }
        }

        function _projectEditButton() {
          const button = Render.editButton();
          button.addEventListener("click", _handleEditButtonClick);
          return button;

          function _handleEditButtonClick(event) {
            event.preventDefault();
            replaceLabelWithForm(event);

            const test = (index) => {
              replaceLabelWithForm(index);
            };
            return test;
            function replaceLabelWithForm(clickEvent) {
              const projectIndex =
                clickEvent.target.parentNode.parentNode.dataset.projectIndex;
              const projectTitle = _getProjectTitle(projectIndex);
              const projectLabel = _getProjectLabel(projectIndex);
              const preFilledForm = _projectEntryForm(
                projectTitle,
                projectIndex
              );

              projectField.replaceChild(preFilledForm, projectLabel);

              function _getProjectTitle(projectIndex) {
                return document.querySelector(
                  `[data-project-index='${projectIndex}'] .${pf("title")}`
                ).textContent;
              }

              function _getProjectLabel(projectIndex) {
                return document.querySelector(
                  `[data-project-index='${projectIndex}'].${pf("item")}`
                );
              }
            }
          }
        }
      }

      function _setItemActiveOnClick(clickEvent) {
        if (buttonWasClicked(clickEvent)) return;
        const projectIndex = this.dataset.projectIndex;
        pubsub.publish("projectSetActiveClick", { projectIndex });

        function buttonWasClicked(clickEvent) {
          return [...clickEvent.target.classList].includes("button");
        }
      }
    }

    function _addProjectButton() {
      const button = Render.addButton();
      button.addEventListener("click", _insertBlankEntryForm);
      const span = document.createElement("span");
      span.classList = pf("item");
      span.classList.add(pf("add"));
      span.appendChild(button);
      return span;

      function _insertBlankEntryForm() {
        projectField.insertBefore(_projectEntryForm(), this.parentNode);
      }
    }

    function _projectEntryForm(projectTitle, projectIndex) {
      const container = _entryContainer(projectIndex);
      container.appendChild(_form(projectTitle));
      return container;

      function _entryContainer(projectIndex) {
        const span = document.createElement("span");
        span.classList = pf("item");
        span.dataset.projectIndex = projectIndex;
        return span;
      }

      function _form(projectTitle) {
        const form = document.createElement("form");
        form.classList = pf("form");
        form.appendChild(_textEntryBox(projectTitle));
        form.appendChild(_submitButton());
        return form;

        function _textEntryBox(projectTitle) {
          const textEntryBox = document.createElement("input");
          textEntryBox.classList = pf("text-box");
          textEntryBox.placeholder = "Enter project name";
          textEntryBox.value = projectTitle || "";
          textEntryBox.required = true;
          return textEntryBox;
        }

        function _submitButton() {
          const button = Render.checkButton();
          button.addEventListener("click", _submitEntryForm);
          return button;

          function _submitEntryForm(event) {
            event.preventDefault();
            const title = event.target.parentNode[0].value;
            if (title === "") return;
            const projectIndex =
              this.parentNode.parentNode.dataset.projectIndex;
            pubsub.publish("projectAddClick", {
              title,
              projectIndex,
            });
          }
        }
      }
    }
  }

  return {
    projectField,
  };
})();
