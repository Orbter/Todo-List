function RemoveFormUI(form, overview) {
  form.remove();
  overview.remove();
}

function RemoveScreen() {
  const mainContent = document.querySelector(".main-content");
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
}

function RemoveItemArray(array, indexToRemove) {
  array.splice(indexToRemove, 1);
}

export { RemoveFormUI, RemoveScreen, RemoveItemArray };
