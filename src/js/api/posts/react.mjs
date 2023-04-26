import { url } from "../constants.mjs";
import { fetchWhitToken } from "./headers.mjs";

export async function reactPost(postData, symbol) {
  try {
    if (!postData.id) throw new Error("React requires a postId");
    const reactUrl = `${url}/posts/${postData.id}/react/${symbol}`;

    const options = {
      body: JSON.stringify(postData, symbol),
      method: "PUT",
    };

    const response = await fetchWhitToken(reactUrl, options);

    if (response.ok) {
      const reacted = await response.json();

      return reacted;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error);
  }
}
