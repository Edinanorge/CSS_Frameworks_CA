import * as storage from "../storage/index.mjs";
import * as profile from "../api/profiles/index.mjs";
import * as templates from "../templates/index.mjs";
/**
 * This function displays the users/profiles to a container
 */
export async function displayUserPosts() {
  const user = storage.load("user");
  const profilePosts = await profile.getProfilePosts(user.name);

  const container = document.querySelector("#profilePostsContainer");
  container.innerHTML = "";
  templates.renderUserPostTemplates(profilePosts, container);
}
