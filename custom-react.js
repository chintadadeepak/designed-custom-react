function setAttribute(htmlElement, key, value) {
  htmlElement.setAttribute(key, value);
}

function renderElement(reactElement, container) {
  const htmlElement = document.createElement(reactElement.type);
  htmlElement.innerHTML = reactElement.children;
  Object.keys(reactElement.props).forEach((key) =>
    setAttribute(htmlElement, key, reactElement.props[key])
  );
  container.append(htmlElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const container = document.querySelector("#root");

renderElement(reactElement, container);
