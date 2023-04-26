import { url } from "../constants.mjs";
import { fetchWhitToken } from "../posts/headers.mjs";

/**
 * This function sends a put request to the API to change the profile avatar
 * @param {object} profileData -Data collected from a form: name and avatar(URL)

 */

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error("Update requires a name");
  }

  const updateProfileUrl = `${url}/profiles/${profileData.name}/media`;
  const options = {
    body: JSON.stringify(profileData),
    method: "put",
  };

  const response = await fetchWhitToken(updateProfileUrl, options);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}
