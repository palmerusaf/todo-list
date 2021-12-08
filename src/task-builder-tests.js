import { taskBuilder } from "./task-builder.js";

const newTask = taskBuilder(
  "task1 title",
  "task1 desc",
  new Date("10 / 25 / 1989"),
  1,
  false
);
console.log(newTask.title,
newTask.description,
newTask.dueDate,
newTask.priority,
newTask.taskCompleteStatus
);