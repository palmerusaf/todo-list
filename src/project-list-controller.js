import { pubsub } from "./pubsub.js";
import { taskBuilder } from "./task-builder.js";
import "./local-storage";

export const projectsController = (function () {
  let projects = [];
  pubsub.subscribe("loadprojects", initprojects);
  pubsub.subscribe("projectDeleteClick", deleteProject);
  pubsub.subscribe("taskDeleteClick", deleteTask);
  pubsub.subscribe("taskAddClick", addTask);
  pubsub.subscribe("projectAddClick", addProject);
  pubsub.subscribe("projectSetActiveClick", setActiveProject);
  pubsub.subscribe("toggleTaskCompleteClick", toggleTaskComplete);
  pubsub.publish("requestDataFromLocalStorage");

  function initprojects(storedList) {
    projects = storedList || buildDefaultList();
    if (projects.length === 0) projects = buildDefaultList();
    pubsub.publish("updateListOfProjects", projects);
  }

  function buildDefaultList() {
    let list = [];
    const defaultProject = { title: "My Project", tasks: [], isActive: true };
    list.push(defaultProject);
    return list;
  }

  function deleteProject(e) {
    const index = e.projectIndex;
    projects[index]
      ? projects.splice(index, 1)
      : console.warn(`Project index ${index} not found to delete.`);
    pubsub.publish("updateListOfProjects", projects);
  }

  function deleteTask(e) {
    const pI = e.projectIndex;
    const tI = e.taskIndex;
    projects[pI].tasks[tI]
      ? projects[pI].tasks.splice(tI, 1)
      : console.warn(
          `Project index ${pI},task index ${tI} not found to delete.`
        );
    pubsub.publish("updateListOfProjects", projects);
  }

  function addTask(e) {
    if (taskAlreadyExists(e)) replaceOldTaskWithNewTask(e);
    else appendListWithNewTask(e);
    pubsub.publish("updateListOfProjects", projects);

    function taskAlreadyExists(e) {
      const pI = e.projectIndex;
      const taskIndex = e.taskIndex;
      const tasksLength = projects[pI].tasks.length;
      if (taskIndex !== undefined) return taskIndex < tasksLength;
      return taskIndex;
    }

    function appendListWithNewTask(e) {
      const pI = e.projectIndex;
      projects[pI].tasks.push(createTask(e));
    }

    function replaceOldTaskWithNewTask(e) {
      const pI = e.projectIndex;
      const tI = e.taskIndex;
      projects[pI].tasks[tI] = createTask(e);
    }

    function createTask(e) {
      const title = e.title;
      const description = e.description;
      const dueDate = e.dueDate;
      const priority = e.priority;
      const isDone = false;
      return taskBuilder(title, description, dueDate, priority, isDone);
    }
  }

  function addProject(e) {
    if (projectAlreadyExists(e)) changeProjectTitle(e);
    else appendProject(e);
    pubsub.publish("updateListOfProjects", projects);

    function projectAlreadyExists(e) {
      const pI = e.projectIndex;
      if (pI !== undefined) return pI < projects.length;
      return pI;
    }

    function changeProjectTitle(e) {
      const pI = e.projectIndex;
      const newTitle = e.title;
      projects[pI].title = newTitle;
    }

    function appendProject(e) {
      const title = e.title;
      projects.push({ title, tasks: [], isActive: false });
    }
  }

  function setActiveProject(e) {
    const pI = e.projectIndex;
    if (projects[pI] === undefined) {
      console.error("Project Index undefined.");
      return;
    }
    setAllProjectsToInActive();
    setProjectIndexToActive(pI);
    pubsub.publish("updateListOfProjects", projects);

    function setAllProjectsToInActive() {
      projects.forEach((project) => (project.isActive = false));
    }

    function setProjectIndexToActive(index) {
      projects[index].isActive = true;
    }
  }

  function toggleTaskComplete(e) {
    const pI = e.projectIndex;
    const tI = e.taskIndex;
    projects[pI].tasks[tI].isDone
      ? (projects[pI].tasks[tI].isDone = false)
      : (projects[pI].tasks[tI].isDone = true);
    pubsub.publish("updateListOfProjects", projects);
  }
})();
