import { createElement, createLink, createParagraf } from "./helperFunctions.mjs";
/**
 * This function makes a template for the users
 * @param {*} profileData profile data from the API
 * @returns HTML
 */
export function userTemplate(profileData) {
  const container = createLink("#", "Link to user profile", "", [
    "text-white",
    "text-decoration-none",
    "d-flex",
    "flex-column",
    "flex-lg-row",
    "align-items-center",
  ]);

  const userImg = createElement("div", [
    "rounded-circle",
    "m-2",
    "border",
    "border-secondary",
    "bg-card",
    "border-1",
    "user-profile-picture",
  ]);

  if (profileData.avatar) {
    userImg.style.backgroundImage = ` url(${profileData.avatar}`;
    userImg.style.backgroundSize = "cover";
  }

  container.appendChild(userImg);

  const paragraf = createParagraf(profileData.name, ["m-0", "ps-md-2"]);
  container.appendChild(paragraf);

  return container;
}

export function renderUserTemplate(profileData, parent) {
  parent.append(userTemplate(profileData));
}

export function renderUserTemplates(profileDataList, parent) {
  parent.append(...profileDataList.map(userTemplate));
}
