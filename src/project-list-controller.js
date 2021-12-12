import { projectBuilder } from "./project-builder.js";
import { pubsub } from "./pubsub.js";
import { taskBuilder } from "./task-builder.js";

export const projectListController = (function () {
  let projectList = [];
  pubsub.subscribe("loadProjectList", initProjectList);
  pubsub.subscribe("projectDeleteClick", deleteProject);
  pubsub.subscribe("taskDeleteClick", deleteTask);
  pubsub.subscribe("taskAddClick", addTask);

  function initProjectList(storedList) {
    projectList = storedList || buildDefaultList();
    pubsub.publish("updateListOfProjects", projectList);
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

  function addTask(clickEvent) {
    if (taskAlreadyExists(clickEvent)) replaceOldTaskWithNewTask(clickEvent);
    else appendListWithNewTask(clickEvent);

    function taskAlreadyExists(clickEvent) {
      const pI = clickEvent.dataset.projectIndex;
      const taskIndex = clickEvent.dataset.taskIndex;
      const taskListLength =
        projectList[pI].taskList.length;
      return taskIndex < taskListLength;
    }

    function appendListWithNewTask(clickEvent) {
      const pI = clickEvent.dataset.projectIndex;
      projectList[pI].taskList.push(createTaskFromClickEvent(clickEvent));
    }

    function replaceOldTaskWithNewTask(clickEvent) {
      const pI = clickEvent.dataset.projectIndex;
      const tI = clickEvent.dataset.taskIndex;
      projectList[pI].taskList[tI] = createTaskFromClickEvent(clickEvent);
    }

    function createTaskFromClickEvent(clickEvent) {
      const title = clickEvent.form.title.value;
      const description = clickEvent.form.description.value;
      const dueDate = clickEvent.form.dueDate.value;
      const priority = clickEvent.form.priority.value;
      const taskCompleteStatus = false;
      return taskBuilder(
        title,
        description,
        dueDate,
        priority,
        taskCompleteStatus
      );
    }
  }
})();
