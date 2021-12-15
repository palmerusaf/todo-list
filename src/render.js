export const Render = (() => {
  // Link stylesheet for delete icon
  function linkToGoogleIconsStylesheet() {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    link.rel = "stylesheet";
    return link;
  }
  document.head.appendChild(linkToGoogleIconsStylesheet());

  const makeAddItemButton = () => {
    const button = document.createElement("button");
    button.textContent = "+";
    button.classList.add("add-item-button");
    return button;
  };

  const makeEditItemButton = () => {
    const button = document.createElement("button");
    button.classList.add("material-icons");
    button.textContent = "edit";
    return button;
  };

  const makeDeleteItemButton = () => {
    const button = document.createElement("button");
    return button;
  };

  const makeSubmitItemButton = () => {
    const button = document.createElement("button");
    return button;
  };

  return {
    makeAddItemButton,
    makeEditItemButton,
    makeDeleteItemButton,
    makeSubmitItemButton,
  };
})();
