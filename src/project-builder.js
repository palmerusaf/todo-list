import { taskBuilder } from "./task-builder.js";

export const projectBuilder = function (title, taskList, activeStatus) {
  return { title, taskList, activeStatus };
};
