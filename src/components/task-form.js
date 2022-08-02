import { pubsub } from "../pubsub.js";
import IconButton from "./icon-button";
import dom from "jsx-render";

export default function TaskForm() {
  return (
    <form className="task-field__task-item task-form">
      <div className="task-form__top">
        <label className="task-field__label task-field__title task-form__title">
          {"Title: "}
          <input
            className="project-field__text-box task-form__text-box"
            type="text"
            required=""
            name="title"
            placeholder="Enter task title"
          />
        </label>
        <label className="task-field__label task-field__due-date">
          {"Due date: "}
          <input type="date" required="" name="due-date" />
        </label>
      </div>
      <div className="task-form__bottom">
        <label className="task-field__label task-field__description">
          {"Description: "}
          <input
            className="project-field__text-box task-form__text-box"
            type="text"
            required=""
            name="description"
            placeholder="Enter task description"
          />
        </label>
        <label className="task-field__label task-field__priority">
          {"Priority: "}
          <select className="task-field__selector" required="">
            <option value="">Level</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
      </div>
      {SubmitButton()}
    </form>
  );

  function submitForm(event) {
    event.preventDefault();
    const form = event.target.parentNode;
    if (!form.checkValidity()) return;
    const task = {
      title: form.querySelector("input[name='title']").value,
      description: form.querySelector("input[name='description']").value,
      dueDate: form.querySelector("input[name='due-date']").value,
      priority: form.querySelector(".task-field__selector").value,
      projectIndex: document.querySelector(".task-field").dataset.projectIndex,
      taskIndex: form.dataset.taskIndex,
    };
    pubsub.publish("taskAddClick", task);
  }

  function SubmitButton() {
    const button = IconButton({ type: "check" });
    button.classList.add("task-form__submit");
    button.addEventListener("click", submitForm);
    return button;
  }
}
