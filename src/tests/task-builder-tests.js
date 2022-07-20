import { taskBuilder } from "../task-builder.js";

let threeDifferenttaskss = [buildtasks("a"), buildtasks("b"), buildtasks("c")];
function buildtasks(modifier) {
  let tasks = [];
  for (let i = 0; i < 10; i++) {
    const newTask = taskBuilder(
      `task${i} for project ${modifier}`,
      `description${i}`,
      new Date(`12/${15 + i}/2021`),
      `${i}`,
      i % 2 ? true : false
    );
    tasks.push(newTask);
  }
  return tasks;
}
export { threeDifferenttaskss as tasksPrototype };
