import { RenderProjectField } from "../render-project-field";
import { RenderTaskField } from "../render-task-field";
import "../project-list-controller";
import { pubsub } from "../pubsub";
import { projectsPrototype } from "./project-builder-test";

// initialize project field
// pubsub.publish("loadprojects", projectsPrototype);
// pubsub.publish("loadprojects");
const container = document.createElement("div");
container.style.display = "flex";
document.body.appendChild(container);
container.appendChild(RenderProjectField.projectField);
container.appendChild(RenderTaskField.taskField);
