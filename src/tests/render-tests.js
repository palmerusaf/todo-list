import { Render } from "../render.js";
import "../project-list-controller";
import { projectListPrototype } from "./project-builder-test";
import { pubsub } from "../pubsub";

// Common buttons render test
// document.body.appendChild(Render.makeAddButton());
// document.body.appendChild(Render.makeEditButton());
// document.body.appendChild(Render.makeDeleteButton());
// document.body.appendChild(Render.makeCheckButton());

// Test Exports
pubsub.publish("loadProjectList", projectListPrototype);
document.body.appendChild(Render.makeToDoList());
