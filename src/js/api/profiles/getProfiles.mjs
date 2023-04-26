import { url } from "../constants.mjs";
import { fetchWhitToken } from "../posts/headers.mjs";
/**
 * This function sending a request to the API to get all of the profiles
 * @returns array of objects
 */

export async function getProfiles() {
  const getProfilesUrl = `${url}/profiles`;

  const response = await fetchWhitToken(getProfilesUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}

/**
 * This function asking for just a specific profile
 * @param {string} name The name of the profile
 * @returns The profile
 * @example
 * ```js
 * getProfile(User)
 * returns {name:"User", id:567, title:"Some text", body:"Some more text"}
 * ```
 */

export async function getProfile(name) {
  if (!name) {
    throw new Error("Get requires a user name");
  }

  const getProfileUrl = `${url}/profiles/${name}`;

  const response = await fetchWhitToken(getProfileUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
