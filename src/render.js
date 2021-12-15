export const Render = (() => {
  // Link stylesheet for icons
  function linkToGoogleIconsStylesheet() {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
    link.rel = "stylesheet";
    return link;
  }
  document.head.appendChild(linkToGoogleIconsStylesheet());

  function makeIconButton(content) {
    const button = document.createElement("button");
    button.classList.add(
      "material-icons-outlined",
      "button",
      `button__${content}`
    );
    button.textContent = content;
    return button;
  }

  const makeAddItemButton = () => {
    return makeIconButton("add");
  };

  const makeEditItemButton = () => {
    return makeIconButton("edit");
  };

  const makeDeleteItemButton = () => {
    return makeIconButton("delete");
  };

  const makeSubmitItemButton = () => {
    return makeIconButton("check");
  };

  return {
    makeAddItemButton,
    makeEditItemButton,
    makeDeleteItemButton,
    makeSubmitItemButton,
  };
})();
