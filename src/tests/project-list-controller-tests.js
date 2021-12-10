import "../project-list-controller";
import { pubsub } from "../pubsub";
import { projectListPrototype } from "./project-builder-test";

pubsub.subscribe("updateListOfProjects", logData);

function logData(data) {
  console.log(data);
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
// pubsub.publish("loadProjectList", projectListPrototype);
// window.deleteButtonClick = function (projectIndex,taskIndex) {
//   const buttonClick = {projectIndex,taskIndex};
//   pubsub.publish("taskDeleteClick", buttonClick);
// };
// 