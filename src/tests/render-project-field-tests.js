import { RenderProjectField } from "../render-project-field";
import "../project-list-controller";
import { pubsub } from "../pubsub";
import { projectListPrototype } from "./project-builder-test";

pubsub.publish("loadProjectList", projectListPrototype);

// projectField tests
document.body.appendChild(RenderProjectField.projectField);
