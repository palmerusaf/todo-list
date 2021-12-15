export const Render = (() => {
  const makeAddItemButton = () => {
    const button = document.createElement("button");
    button.textContent = "+";
    button.classList.add("add-item-button");
    return button;
  };
  const makeEditItemButton = () => {
    const button = document.createElement("button");
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
