import { Render } from "../render.js";
import "../project-list-controller";
import { projectsPrototype } from "./project-builder-test";
import { pubsub } from "../pubsub";

// Common buttons render test
// document.body.appendChild(Render.makeAddButton());
// document.body.appendChild(Render.makeEditButton());
// document.body.appendChild(IconButton({ type: "delete" }));
// document.body.appendChild(IconButton({ type: "check" }));

// Test Exports
pubsub.publish("loadprojects", projectsPrototype);
document.body.appendChild(Render.makeToDoList());
