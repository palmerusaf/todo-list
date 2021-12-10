import { projectBuilder } from "./project-builder.js";
import { pubsub } from "./pubsub.js";

export const projectListController = (function () {
  let projectList = [];
  pubsub.subscribe("loadProjectList", initProjectList);
  pubsub.subscribe("projectDeleteClick", deleteProject);
  pubsub.subscribe("taskDeleteClick", deleteTask);

  function initProjectList(storedList) {
    projectList = storedList || buildDefaultList();
    pubsub.publish("updateListOfProjects", projectList);
    console.log(projectList, pubsub.events);
  }

  function buildDefaultList() {
    let list = [];
    const defaultProject = projectBuilder("My Project", [], true);
    list.push(defaultProject);
    return list;
  }

  function deleteProject(clickEvent) {
    const index = clickEvent; //change to clickEvent.index after render module implemented
    projectList[index]
      ? projectList.splice(index, 1)
      : console.warn(`Project index ${index} not found to delete.`);
    pubsub.publish("updateListOfProjects", projectList);
  }

  function deleteTask(clickEvent) {
    const projectIndex = clickEvent.projectIndex; //change to clickEvent.projectIndex after render module implemented
    const taskIndex = clickEvent.taskIndex; //change to clickEvent.taskIndex after render module implemented
    projectList[projectIndex].taskList[taskIndex]
      ? projectList[projectIndex].taskList.splice(taskIndex, 1)
      : console.warn(
          `Project index ${projectIndex},task index ${taskIndex} not found to delete.`
        );
    pubsub.publish("updateListOfProjects", projectList);
  }
})();
