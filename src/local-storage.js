import { pubsub } from "./pubsub.js";

export const LocalStorage = (() => {
  pubsub.subscribe("updateListOfProjects", _saveDataLocally);
  pubsub.subscribe("requestDataFromLocalStorage", _getSavedData);

  function _getSavedData() {
    pubsub.publish(
      "loadProjectList",
      JSON.parse(window.localStorage.getItem("savedData"))
    );
  }

  function _saveDataLocally(data) {
    localStorage.setItem("savedData", JSON.stringify(data));
  }
})();
