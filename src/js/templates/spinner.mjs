import { createElement } from "./helperFunctions.mjs";

export function spinnerTemplate(parent) {
  const container = createElement("div", ["text-center"]);

  const spinner = createElement("div", ["spinner-border"]);
  spinner.role = "status";
  container.appendChild(spinner);

  const spinnerText = createElement("span", ["visually-hidden"]);
  spinnerText.innerText = "Loading...";
  spinner.appendChild(spinnerText);
}

export function renderSpinnerTemplate(parent) {
  parent.append(spinnerTemplate);
}
