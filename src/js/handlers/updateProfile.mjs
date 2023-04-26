import { updateProfile, getProfile } from "../api/profiles/index.mjs";
import * as storage from "../storage/index.mjs";
import { displayMessage } from "../display/displayMessage.mjs";
import { setAvatar } from "./setAvatar.mjs";

/**
 * This function edits the profile avatar picture, nd displaying user data like name and email
 */

export function submitEditProfileForm() {
  const form = document.querySelector("#editProfile");

  if (form) {
    let { name, email, avatar } = storage.load("user");

    document.querySelector(".name").innerText = name;
    document.querySelector(".email").innerText = email;
    document.querySelectorAll(".avatar").forEach((element) => (element.src = avatar));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;
      avatar = profile.avatar;

      setAvatar();
      updateProfile(profile);

      storage.save("user", profile);
    });
  } else {
    displayMessage("updateMessage", "Something went wrog.", "error");
    throw new Error("Form not found.");
  }
}
