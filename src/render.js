export const Render = (() => {
  // Link stylesheet for icons
  {
    const googleIconsStyleSheet = document.createElement("link");
    googleIconsStyleSheet.href =
      "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
    googleIconsStyleSheet.rel = "stylesheet";
    document.head.appendChild(googleIconsStyleSheet);
  }

  function _makeIconButton(content) {
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
    return _makeIconButton("add");
  };

  const makeEditButton = () => {
    return _makeIconButton("edit");
  };

  const makeDeleteButton = () => {
    return _makeIconButton("delete");
  };

  const makeCheckButton = () => {
    return _makeIconButton("check");
  };

  const makeBEMSpan = (blockName, elementName, modifierName) => {
    const span = document.createElement("span");
    blockName ? (blockName = blockName) : (blockName = "");
    elementName ? (elementName = `__${elementName}`) : (elementName = "");
    modifierName ? (modifierName = `--${modifierName}`) : (modifierName = "");
    span.classList.add(`${blockName}${elementName}${modifierName}`);
    return span;
  };

  return {
    makeAddButton,
    makeEditButton,
    makeDeleteButton,
    makeCheckButton,
    makeBEMSpan,
  };
})();
