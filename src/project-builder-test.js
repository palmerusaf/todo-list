import { projectBuilder } from "./project-builder";
import { taskListPrototype } from "./task-builder-tests";

let projectListPrototype = [];

for (let i = 0; i < 3; i++) {
  const newProject = projectBuilder(
    `title${i}`,
    taskListPrototype,
    i % 2 ? true : false
  );
  projectListPrototype.push(newProject);
}
console.log(projectListPrototype);
projectListPrototype[0].taskList[0].dueDate = new Date();
console.log(projectListPrototype[0].taskList[0].dueDate);
