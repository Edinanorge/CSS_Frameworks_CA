import { url } from "../constants.mjs";
import { fetchWhitToken } from "../posts/headers.mjs";

/**
 * This function asking for posts from a specific profile
 * @param {string} name -this is the owner name of the profile
 * @returns An array of posts form the ${name} profile.
 * @example
 * ```js
 * getProfilePosts(testuser);
 * retuns an array
 * ```
 */
export async function getProfilePosts(name) {
  if (!name) {
    throw new Error("Get requires a user name");
  }

  const getProfilePostsUrl = `${url}/profiles/${name}/posts?_author=true&_comments=true&_reactions=true`;

  const response = await fetchWhitToken(getProfilePostsUrl);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
