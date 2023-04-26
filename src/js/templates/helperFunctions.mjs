export function createElement(type, classes) {
  const element = document.createElement(type);
  element.classList.add(...classes);
  return element;
}

export function createButton(classes, title) {
  const button = document.createElement("button");
  button.classList.add(...classes);
  button.title = title;

  return button;
}

export function createButtonWhitTextContent(classes, textContent) {
  const button = document.createElement("button");
  button.classList.add(...classes);
  button.innerText = textContent;

  return button;
}

export function createLink(href, title, textContent, classes) {
  const link = document.createElement("a");
  link.href = href;
  link.title = title;
  link.textContent = textContent;
  link.classList.add(...classes);

  return link;
}

export function createLinkWithImage(href, title, src, alt, linkClasses, imgClasses) {
  const link = document.createElement("a");
  link.setAttribute("href", href);
  link.setAttribute("title", title);
  link.classList.add(...linkClasses);

  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  img.classList.add(...imgClasses);

  link.appendChild(img);
  return link;
}

export function createImage(classes, src, alt) {
  const image = document.createElement("img");
  image.classList.add(...classes);
  image.src = src;
  image.alt = alt;
  return image;
}

export function createParagraf(innerText, classes) {
  const paragraf = document.createElement("p");
  paragraf.classList.add(...classes);
  paragraf.innerText = innerText;

  return paragraf;
}

export function generateParagraphs(arr) {
  const paragraphElements = [];

  arr.forEach((obj) => {
    const paragraph = createParagraf(`💬 ${obj.owner} : ${obj.body}`, ["ms-2"]);
    paragraphElements.push(paragraph);
  });

  return paragraphElements;
}

export function createCounter(reaction, symbol, button) {
  if (reaction.symbol === symbol) {
    const counter = createElement("span", ["text-white"]);
    counter.innerText = reaction.count;
    button.appendChild(counter);
  }
}
