import dom from "jsx-render";
import { RenderProjectField } from "../render-project-field";
import { RenderTaskField } from "../render-task-field";
import "../project-list-controller";
import "../append-google-styles.js";

export default function TodoList() {
  return (
    <div className="to-do-list">
      {RenderProjectField.projectField}
      {RenderTaskField.taskField}
    </div>
  );
}
