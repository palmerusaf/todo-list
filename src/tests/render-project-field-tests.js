import { RenderProjectField } from "../render-project-field";
import "../project-list-controller";
import { pubsub } from "../pubsub";
import { projectsPrototype } from "./project-builder-test";

pubsub.publish("loadprojects", projectsPrototype);

// projectField tests
document.body.appendChild(RenderProjectField.projectField);
// mod css for entry from
// RenderProjectField.projectField.appendChild(
// RenderProjectField._makeProjectEntryForm()
// );
