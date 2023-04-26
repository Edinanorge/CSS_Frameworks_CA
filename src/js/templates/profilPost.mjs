import {
  createButtonWhitTextContent,
  createParagraf,
  createElement,
  createImage,
  createLink
} from "./helperFunctions.mjs";
import { removePost } from "../api/posts/delete.mjs";

/**
 * THis function creates template for post form specific user, whit edit , and delete buttons
 * @param {object} postData -Post data form API
 * @returns HTML 
 */

export function userPostTemplate(postData) {
  const container = createElement("div", ["card", "feed", "p-0", "mb-3"]);

  const cardHeader = createElement("div", ["d-flex", "justify-content-between"]);
  container.appendChild(cardHeader);

  const userContainer = createElement("div", ["d-flex", "flex-row", "align-items-center", "ps-2"]);
  cardHeader.appendChild(userContainer);

  const userImg = createElement("div", [
    "rounded-circle",
    "m-2",
    "border",
    "border-secondary",
    "border-2",
    "user-profile-picture",
  ]);

  if (postData.author.avatar) {
    userImg.style.backgroundImage = ` url(${postData.author.avatar}`;
    userImg.style.backgroundSize = "cover";
  }

  userContainer.appendChild(userImg);

  const userName = createParagraf(postData.author.name, ["m-0"]);
  userContainer.appendChild(userName);

  const buttonContainer = createElement("div", ["d-flex", "justify-content-around", "align-self-end", "p-3"]);
  cardHeader.appendChild(buttonContainer);

  const deleteBtn = createButtonWhitTextContent(["btn", "border", "me-1"], "Delete");
  deleteBtn.addEventListener("click", () => {
    removePost(postData.id);
  });
  buttonContainer.appendChild(deleteBtn);

  const editLink = createLink(`/post/edit/index.html?id=${postData.id}`, "", "Edit", ["btn", "btn-success", "ms-1"]);
  buttonContainer.appendChild(editLink);

  const cardBody = createLink(`/post/index.html?id=${postData.id}`, "", "", [
    "card-body",
    "text-decoration-none",
    "text-white",
  ]);
  container.appendChild(cardBody);

  const title = createParagraf(postData.title, ["card-title", "fs-5", "fw-bolder"]);
  cardBody.appendChild(title);

  const body = createParagraf(postData.body, ["mb-3", "text-muted"]);
  cardBody.appendChild(body);

  const tag = createElement("SPAN", ["text-secondary", "ps-2", "fs-7"]);
  tag.innerText = postData.tags.map((tag) => `#${tag}`).join(" ");
  body.appendChild(tag);

  if (postData.media) {
    const image = createImage(["card-img", "mb-1"], postData.media, `Image from ${postData.title}`);
    cardBody.appendChild(image);
  }

  return container;
}

export function renderUserPostTemplate(postData, parent) {
  parent.append(userPostTemplate(postData));
}

export function renderUserPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(userPostTemplate));
}
