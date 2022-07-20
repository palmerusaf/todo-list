import { pubsub } from "./pubsub.js";
import "./local-storage";

export const projectsController = (function () {
  let projects = [];
  pubsub.subscribe("loadprojects", initProjects);
  pubsub.subscribe("projectDeleteClick", deleteProject);
  pubsub.subscribe("taskDeleteClick", deleteTask);
  pubsub.subscribe("taskAddClick", addTask);
  pubsub.subscribe("projectAddClick", addProject);
  pubsub.subscribe("projectSetActiveClick", setActiveProject);
  pubsub.subscribe("toggleTaskCompleteClick", toggleTaskComplete);
  pubsub.publish("requestDataFromLocalStorage");

  function initProjects(storedProjects) {
    const defaultList = [{ title: "My Project", tasks: [], isActive: true }];
    projects =
      !storedProjects || storedProjects.length ? defaultList : storedProjects;
    pubsub.publish("updateListOfProjects", projects);
  }

  function deleteProject(e) {
    projects.splice(e.projectIndex, 1);
    pubsub.publish("updateListOfProjects", projects);
  }

  function deleteTask(e) {
    const { projectIndex, taskIndex } = e;
    projects[projectIndex].tasks.splice(taskIndex, 1);
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
      const { title, description, dueDate, priority } = e;
      return { title, description, dueDate, priority, isDone: false };
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
