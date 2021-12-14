import { projectBuilder } from "../project-builder";
import { taskListPrototype } from "./task-builder-tests";

let projectListPrototype = [];

for (let i = 0; i < 3; i++) {
  const newProject = projectBuilder(
    `project${i}`,
    taskListPrototype[i],
    i % 2 ? true : false
  );
  projectListPrototype.push(newProject);
}

export { projectListPrototype };
