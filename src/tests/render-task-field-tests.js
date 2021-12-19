import { RenderProjectField } from "../render-project-field";
import "../project-list-controller";
import { pubsub } from "../pubsub";
import { projectListPrototype } from "./project-builder-test";

// initialize project field
pubsub.publish("loadProjectList", projectListPrototype);
document.body.appendChild(RenderProjectField.projectField);
