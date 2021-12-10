import { projectBuilder } from "./project-builder.js";
import { pubsub } from "./pubsub.js";

export const projectListController = (function () {
  let projectList = [];
  pubsub.subscribe("loadProjectList", initProjectList);
  pubsub.subscribe("projectDeleteClick", deleteProject);

  function getProjectList() {
    return projectList;
  }

  function initProjectList(storedList) {
    projectList = storedList || buildDefaultList();
    pubsub.publish("updateListOfProjects", getProjectList());
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
    pubsub.publish("updateListOfProjects", getProjectList());
  }
})();
