import "../project-list-controller";
import { pubsub } from "../pubsub";
import { projectListPrototype } from "./project-builder-test";

pubsub.subscribe("updateListOfProjects", logData);

function logData(data) {
  console.log(data);
}

function buildForm(projectIndex, taskIndex) {
  const container = document.createElement("div");
  container.dataset.projectIndex = projectIndex;
  container.dataset.taskIndex = taskIndex;
  const form = document.createElement("form");
  form.action = "#";
  form.onsubmit = "return false";
  const formElements = ["title", "description", "dueDate", "priority"];
  formElements.forEach((element) => {
    const input = document.createElement("input");
    input.name = element;
    input.placeholder = element;
    input.type = "text";
    input.required = "true";
    element = input;
    form.appendChild(element);
  });
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "add task";
  form.addEventListener("submit", (e) => {
    pubsub.publish("taskAddClick", e);
    return false;
  });
  form.appendChild(submit);
  container.appendChild(form);
  return container;
}
//initListTest with pubsub
// Test with empty local storage
// pubsub.publish("loadProjectList",JSON.parse(localStorage.getItem("projectList"))||"");
// Test with local storage
// pubsub.publish("loadProjectList",projectListPrototype);

// removeProject Tests
// pubsub.publish("loadProjectList",projectListPrototype);
// pubsub.publish("projectDeleteClick",2)
// pubsub.publish("projectDeleteClick",2)

// removeTasks Tests
pubsub.publish("loadProjectList", projectListPrototype);
// window.deleteButtonClick = function (projectIndex,taskIndex) {
//   const buttonClick = {projectIndex,taskIndex};
//   pubsub.publish("taskDeleteClick", buttonClick);
// };
//

// addTask Test
document.body.appendChild(buildForm(1, 15));
