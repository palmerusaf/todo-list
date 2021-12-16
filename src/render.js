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

  const makeAddButton = () => {
    return makeIconButton("add");
  };

  const makeEditButton = () => {
    return makeIconButton("edit");
  };

  const makeDeleteButton = () => {
    return makeIconButton("delete");
  };

  const makeCheckButton = () => {
    return makeIconButton("check");
  };

  return {
    makeAddButton,
    makeEditButton,
    makeDeleteButton,
    makeCheckButton,
  };
})();
