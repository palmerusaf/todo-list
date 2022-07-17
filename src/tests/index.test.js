import userEvent from "@testing-library/user-event";
import "../index";

it("todo list and footer renders correctly", () => {
  expect(document.body).toMatchSnapshot();
});

it("New project form is rendered correctly", async () => {
  const addProjectButton = document.querySelector(
    ".project-field__add > button"
  );
  await userEvent.click(addProjectButton);
  expect(document.body).toMatchSnapshot();
});

it("New project is created correctly", async () => {
  const form = document.querySelector(".project-field__form");
  const input = form.querySelector("input");
  await userEvent.type(input, "Project one");

  const submit = form.querySelector("button");
  await userEvent.click(submit);
  expect(document.body).toMatchSnapshot();
});

it("Project active class set correctly", () => {
  const projects = document.querySelectorAll(".project-field__item");

  expect(projects[0].classList.toString()).toEqual(
    "project-field__item project-field__item--active"
  );
  expect(projects[1].classList.toString()).toEqual("project-field__item");
});

it("Project is selected correctly", async () => {
  let projects = document.querySelectorAll(".project-field__item");

  await userEvent.click(projects[1]);

  projects = document.querySelectorAll(".project-field__item");

  expect(projects[1].classList.toString()).toEqual(
    "project-field__item project-field__item--active"
  );
  expect(projects[0].classList.toString()).toEqual("project-field__item");
  expect(document.body).toMatchSnapshot();
});

it("New project is updated correctly", async () => {
  const projects = document.querySelectorAll(".project-field__item");
  const editButton = projects[1].querySelector(".button__edit");
  await userEvent.click(editButton);

  const form = document.querySelector(".project-field__form");
  const input = form.querySelector("input");
  await userEvent.clear(input);
  await userEvent.type(input, "Changed Project");

  const submit = form.querySelector("button");
  await userEvent.click(submit);

  expect(document.body).toMatchSnapshot();
});

it("New project is deleted correctly", async () => {
  const projects = document.querySelectorAll(".project-field__item");
  const deleteButton = projects[1].querySelector(".button__delete");
  await userEvent.click(deleteButton);
  await userEvent.click(projects[0]);

  expect(document.body).toMatchSnapshot();
});

it("New task is created correctly", async () => {
  const addButton = document.querySelector(".task-field__add-button");
  await userEvent.click(addButton);

  const title = document.querySelector("input[name='title']");
  const dueDate = document.querySelector("input[name='due-date']");
  const description = document.querySelector("input[name='description']");
  const prioritySel = document.querySelector(".task-field__selector");
  const submit = document.querySelector(".task-form__submit");

  await userEvent.type(title, "Task One Title");
  await userEvent.type(description, "Task One Description");
  await userEvent.type(dueDate, "2020-11-09");
  await userEvent.selectOptions(prioritySel, "Low");

  await userEvent.click(submit);

  expect(document.body).toMatchSnapshot();
});

it("New task is updated correctly", async () => {
  const editButton = document.querySelector(
    ".task-field__button-field > .button__edit"
  );
  await userEvent.click(editButton);
  expect(document.body).toMatchSnapshot();
});

it.todo("New task is deleted correctly");
