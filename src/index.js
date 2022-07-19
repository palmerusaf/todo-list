import "./style.sass";
import TodoList from "./components/todo-list";
import Footer from "./components/footer.js";

(() => {
  const noScript = document.createElement("noscript");
  noScript.textContent = "You need to enable JavaScript to run this app.";
  document.body.appendChild(noScript);

  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);

  root.appendChild(TodoList());
  root.appendChild(Footer());
})();
