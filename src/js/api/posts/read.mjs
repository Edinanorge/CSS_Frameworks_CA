import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";
/**
 * This function sends a request to the API to get posts
 * @returns Posts
 * @example
 * ```js
 * getPosts
 * ```
 */
export async function getPosts() {
  try {
    const getPostsUrl = `${url}/posts?_author=true&_comments=true&_reactions=true`;

    const response = await fetchWhitToken(getPostsUrl);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Send a get request to the API to get a specific post
 * @param {number} id -Id of the post you want to get from the API
 * @returns the post
 * @example
 * ```js
 * getPost(6798)
 * ```
 */
export async function getPost(id) {
  try {
    if (!id) {
      throw new Error("Get requires a postId");
    }

    const getPostsUrl = `${url}/posts/${id}?_author=true&_comments=true&_reactions=true`;

    const response = await fetchWhitToken(getPostsUrl);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
}
