import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

/**
 * This function send a post request to the API whit the comment data object
 * @param {object} postData This is the data collected from a form.
 * @returns If the respons oke than return the commnet
 * @example
 * ```js
 * const comment= {"Hello word"}
 * commnetPost(comment);
 * ```
 */

export async function commentPost(commentData) {
  try {
    if (!commentData.id) throw new Error("Comment requires a postId");
    const commentUrl = `${url}/posts/${commentData.id}/comment`;

    const options = {
      body: JSON.stringify(commentData),
      method: "POST",
    };

    const response = await fetchWhitToken(commentUrl, options);

    if (response.ok) {
      const comment = await response.json();
      return comment;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
}
