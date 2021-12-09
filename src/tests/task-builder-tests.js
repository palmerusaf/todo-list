import { taskBuilder } from "../task-builder.js";

let taskListPrototype = [];

for (let i = 0; i < 10; i++) {
  const newTask = taskBuilder(`title${i}`,
  `description${i}`,
new Date(  `10/25/${1989+i}`),
  `${i}`,
(i%2)?true:false
);
  taskListPrototype.push(newTask);
}
export {taskListPrototype};