import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";
/**
 * This function send a put request to the API whit the data collected from a form
 * @param {Object} postData This is the data collected from form
 * @returns the new postData whit the updated post
 * @example
 * ```js
 * const oldPost={title:"hello", body:"hello", id:"45"}
 * const postData={title:"hello update", body:"hello update", id:"45"}
 *
 * updatePost(postdata)
 * returns PostData
 *
 * ```
 */
export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postId");
  }

  const updatePostUrl = `${url}/posts/${postData.id}`;
  const options = {
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      media: postData.media,
      tags: postData.tags.split(","),
    }),
    method: "put",
  };

  const response = await fetchWhitToken(updatePostUrl, options);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
