import * as profile from "../api/profiles/index.mjs";
import * as templates from "../templates/index.mjs";
/**
 * This async function displaying the contact/users to a container
 * 
 */
export async function displayContacts() {
  const contacts = await profile.getProfiles();
  const container = document.querySelector("#contactsContainer");
  container.innerHTML = "";
  templates.renderUserTemplates(contacts, container);
}
