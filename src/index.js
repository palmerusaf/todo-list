import "./style.sass";
import { Render } from "./render";
import "./project-list-controller";
import bem from "easy-bem";

(() => {
  const body = document.body;

  body.appendChild(Render.makeToDoList());
  body.appendChild(_makeFooter());

  function _makeFooter() {
    const f = bem("footer");
    const container = document.createElement("footer");
    container.classList = f();

    const link = document.createElement("a");
    link.classList = f("link");
    link.textContent = "GitHub Repo";
    link.href = "https://github.com/palmerusaf/todo-list";
    container.appendChild(link);

    const logo = document.createElement("img");
    logo.classList = f("logo");
    logo.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";
    logo.alt = "git hub logo";
    container.appendChild(logo);

    return container;
  }
})();
