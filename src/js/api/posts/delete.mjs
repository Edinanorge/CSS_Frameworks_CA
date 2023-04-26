import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";
/**
 * This Function sends a delete request to the API
 * @param {number} id -The id of the post you want to delete
 *
 * @example
 * ```js
 * const post={id:"567",title:"Remove me", body:"Thanks for removeng me."}
 * removePost(567);
 * ```
 */
export async function removePost(id) {
  if (!id) {
    throw new Error("Delete requires a postId");
  }

  const removePostUrl = `${url}/posts/${id}`;
  const options = {
    method: "DELETE",
  };

  const response = await fetchWhitToken(removePostUrl, options);

  if (response.ok) {
    const post = await response.json();

    location.reload();
    return post;
  } else {
    throw new Error(response.statusText);
  }
}
