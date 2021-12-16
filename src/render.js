export const Render = (() => {
  // Link stylesheet for icons
  {
    const googleIconsStyleSheet = document.createElement("link");
    googleIconsStyleSheet.href =
      "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
    googleIconsStyleSheet.rel = "stylesheet";
    document.head.appendChild(googleIconsStyleSheet);
  }

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
