import "./style.sass";
import { Render } from "./render";
import "./project-list-controller";
import bem from "easy-bem";
import { initializeApp } from "firebase/app";

(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyA0B2NexwAFtml_nawRCNmGel-dBPeG3bQ",
    authDomain: "todo-list-3aa9c.firebaseapp.com",
    projectId: "todo-list-3aa9c",
    storageBucket: "todo-list-3aa9c.appspot.com",
    messagingSenderId: "992223448041",
    appId: "1:992223448041:web:3f6263fb97fa7cd14c5978",
  };
  const app = initializeApp(firebaseConfig);

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
