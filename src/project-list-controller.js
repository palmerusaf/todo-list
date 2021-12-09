import { projectBuilder } from "./project-builder.js";
import { pubsub } from "./pubsub.js";

export const projectListController = (function () {
  let projectList = [];

  function getProjectList() {
    return projectList;
  }

  function initProjectList(storedList) {
    projectList = storedList || buildDefaultList();
  }

  function buildDefaultList() {
    let list = [];
    const defaultProject = projectBuilder("My Project", [], true);
    list.push(defaultProject);
    return list;
  }
})();
