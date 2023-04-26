import * as storage from "../storage/index.mjs";

/**
 * This function setting the avatar to all of the pages
 */

export function setAvatar() {
  const user = storage.load("user");
  if (!user) {
    window.location.replace("/profile/login/");
  } else {
    document.querySelectorAll(".avatar").forEach((element) => (element.src = user.avatar));
  }
}
