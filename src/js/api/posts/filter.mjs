import { renderPostTemplates } from "../../templates/posts.mjs";
import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

/**
 * This function sends a request to the API whit query string parameters collected form a form.
 * @param {string} query
 * @returns the filtered posts
 * @example
 * ```js
 * getFilteredPosts(sort=created_tag=test)
 * ```
 */
export async function getFilteredPosts(query) {
  try {
    const getPostsUrl = `${url}/posts?_author=true&_comments=true&_reactions=true&${query}`;

    const response = await fetchWhitToken(getPostsUrl);

    if (response.ok) {
      const posts = await response.json();
      console.log(posts);

      return posts;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
}
