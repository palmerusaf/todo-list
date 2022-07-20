import { taskBuilder } from "./task-builder.js";

export const projectBuilder = function (title, tasks, isActive) {
  return { title, tasks, isActive };
};
