import { projectBuilder } from "../project-builder";
import { tasksPrototype } from "./task-builder-tests";

let projectsPrototype = [];

for (let i = 0; i < 3; i++) {
  const newProject = projectBuilder(
    `project${i}`,
    tasksPrototype[i],
    i % 2 ? true : false
  );
  projectsPrototype.push(newProject);
}

export { projectsPrototype };
