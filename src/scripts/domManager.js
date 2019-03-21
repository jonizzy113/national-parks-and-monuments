const buildElement = (elementType, elementId, elementTextContent) => {
  let htmlElement = document.createElement(elementType);
  if (elementId) {
    htmlElement.setAttribute("id", elementId);
  }
  htmlElement.textContent = elementTextContent;
  return htmlElement;
};

clearElement = domElement => {
  while (domElement.firstChild) {
    domElement.removeChild(domElement.firstChild);
  }
};

const displayContainer = document.querySelector("#display-container");
displayContainer.appendChild(buildElement("section", "national--parks"));
displayContainer.appendChild(buildElement("section", "monuments"))
