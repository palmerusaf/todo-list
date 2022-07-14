import "./style.scss";
import { Render } from "./render";
import "./project-list-controller";
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

  body.appendChild(Render.toDoList());
  body.appendChild(Render.footer());
})();
