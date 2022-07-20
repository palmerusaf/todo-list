import "../project-list-controller";
import { pubsub } from "../pubsub";
import { projectsPrototype } from "./project-builder-test";

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
// pubsub.publish("loadprojects",JSON.parse(localStorage.getItem("projects"))||"");
// Test with local storage
// pubsub.publish("loadprojects",projectsPrototype);

// removeProject Tests
// pubsub.publish("loadprojects",projectsPrototype);
// pubsub.publish("projectDeleteClick",2)
// pubsub.publish("projectDeleteClick",2)

// removeTasks Tests
pubsub.publish("loadprojects", projectsPrototype);
// window.deleteButtonClick = function (projectIndex,taskIndex) {
//   const buttonClick = {projectIndex,taskIndex};
//   pubsub.publish("taskDeleteClick", buttonClick);
// };
//

// addTask Test
// document.body.appendChild(buildForm(1, 15));

// addProject Test
// pubsub.publish("projectAddClick", { projectIndex: 0, title: "test" });
// pubsub.publish("projectAddClick", { projectIndex: 5, title: "test" });

// setActiveProject Test
// pubsub.publish("projectSetActiveClick", { projectIndex: 0 });
// pubsub.publish("projectSetActiveClick", { projectIndex: 3 });

// toggleTaskComplete Test
// function toggleTest(pI,tI){
// pubsub.subscribe("updateListOfProjects", (e) => {
// console.log(e[pI].tasks[tI]);
// });
// pubsub.publish("toggleTaskCompleteClick", { projectIndex: pI, taskIndex: tI });
//  }
// toggleTest(0,0)
// toggleTest(0,9)
