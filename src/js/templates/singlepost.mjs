import { generateParagraphs, createElement, createParagraf, createImage, createButton } from "./helperFunctions.mjs";

/**
 * This function creats a html elemet for the single post
 * @param {*} postData
 * @returns HtML element
 */

export function singlePostTemplate(postData) {
  const container = createElement("div", ["card", "p-0", "feed", "mb-3"]);

  const cardHeader = createElement("div", ["d-flex", "flex-row", "align-items-center", "justify-content-between"]);
  container.appendChild(cardHeader);

  const userContainer = createElement("div", ["d-flex", "flex-row", "align-items-center"]);
  cardHeader.appendChild(userContainer);

  const userImg = createImage(
    ["rounded-circle", "m-2", "border", "border-secondary", "border-2", "user-profile-picture"],
    postData.author.avatar,
    "Avatar"
  );
  userContainer.appendChild(userImg);

  const userName = createParagraf(postData.author.name, ["m-0"]);
  userContainer.appendChild(userName);

  const updatedDate = createElement("div", ["text-muted", "fs-7", "mx-3"]);
  updatedDate.innerText = `Updated: ${postData.updated.substring(0, 10)} `;
  cardHeader.appendChild(updatedDate);

  const card = createElement("div", ["card-body"]);

  container.appendChild(card);

  const title = createParagraf(postData.title, ["card-title", "fs-5", "fw-bolder"]);
  card.appendChild(title);

  const body = createParagraf(postData.body, ["mb-3", "text-muted"]);
  card.appendChild(body);

  const tag = createElement("SPAN", ["text-secondary", "ps-2", "fs-7"]);
  tag.innerText = postData.tags.map((tag) => `#${tag}`).join(" ");
  body.appendChild(tag);

  if (postData.media) {
    const image = createImage(["card-img", "mb-1"], postData.media, `Image from ${postData.title}`);
    card.appendChild(image);
  }

  const linkContainer = createElement("div", ["d-flex", "justify-content-between", "align-items-center"]);
  card.appendChild(linkContainer);

  const buttonContainer = document.createElement("div");
  linkContainer.appendChild(buttonContainer);

  const buttonLike = createButton(["btn", "text-warning", "fs-6", "p-1"], "Like");
  buttonLike.innerText = "👍";
  buttonContainer.appendChild(buttonLike);

  const buttonFunny = createButton(["btn", "text-warning", "fs-6", "p-1"], "Funny");
  buttonFunny.innerText = "😂";
  buttonContainer.appendChild(buttonFunny);

  const buttonNeutral = createButton(["btn", "text-warning", "fs-6", "p-1"], "No comment");
  buttonNeutral.innerText = "😒";
  buttonContainer.appendChild(buttonNeutral);

  const buttonLove = createButton(["btn", "text-warning", "fs-6", "p-1"], "Love");
  buttonLove.innerText = "❤️";
  buttonContainer.appendChild(buttonLove);

  const commentsContainer = createElement("div", ["text-muted"]);
  card.appendChild(commentsContainer);

  const commnetsTitle = createParagraf("Comments:", ["fs-5", "text-white", "mt-3"]);
  commentsContainer.appendChild(commnetsTitle);

  const commentsArray = generateParagraphs(postData.comments);
  commentsArray.forEach((comment) => commentsContainer.appendChild(comment));

  return container;
}

export function renderSingelPostTemplate(postData, parent) {
  parent.append(singlePostTemplate(postData));
}

export function renderSingelPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(singlePostTemplate));
}
