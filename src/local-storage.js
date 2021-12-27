import { pubsub } from "./pubsub.js";

export const LocalStorage = (() => {
  pubsub.publish("loadProjectList", _getSavedData());
  pubsub.subscribe("updateListOfProjects", _saveDataLocally);

  function _getSavedData() {
    return JSON.parse(localStorage.getItem("savedData"));
  }

  function _saveDataLocally(data) {
    localStorage.setItem("savedData", JSON.stringify(data));
  }
})();
