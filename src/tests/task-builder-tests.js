import { taskBuilder } from "../task-builder.js";

let threeDifferentTaskLists = [
  buildTaskList("a"),
  buildTaskList("b"),
  buildTaskList("c"),
];
function buildTaskList(modifier) {
  let taskList = [];
  for (let i = 0; i < 10; i++) {
    const newTask = taskBuilder(
      `task${i} for project ${modifier}`,
      `description${i}`,
      new Date(`12/${15 + i}/2021`),
      `${i}`,
      i % 2 ? true : false
    );
    taskList.push(newTask);
  }
  return taskList;
}
export { threeDifferentTaskLists as taskListPrototype };
