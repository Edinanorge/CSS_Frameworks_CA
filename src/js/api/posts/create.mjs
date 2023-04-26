import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

/**
 * This function send a Post request to the API whit the postData
 * @param {Object} postData -Object collected from a form.
 * @returns If the respons is oke returns a post whit the data collected form form.
 * @example
 * ```js"
 * const postData={title:"Hello", body:"Word", tag:"test" }
 * createPost(postData)
 * returns a postData
 * ```
 */

export async function createPost(postData) {
  try {
    const createPostUrl = `${url}/posts`;
    const options = {
      body: JSON.stringify({
        title: postData.title,
        body: postData.body,
        media: postData.media,
        tags: postData.tags.split(","),
      }),
      method: "POST",
    };

    const response = await fetchWhitToken(createPostUrl, options);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch {
    console.log(error);
  }
}
