import { url } from "/src/js/api/constants.mjs";
import { displayMessage } from "../../display/displayMessage.mjs";

/**
 * This function sending  profile data to API
 * @param {*} profile This is the profile data collected from the register form
 * @returns Returns a user object
 * @example
 *    ```js
 * const profile = {name:Jhon, emial:Test@noroff.no, password:something }
 * //sending the profile object to API
 * regiter(profile)
 * //returns a user object
 * ```
 */

export async function register(profile) {
  const registerUrl = `${url}/auth/register`;
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(profile),
  };

  const response = await fetch(registerUrl, options);

  if (response.ok) {
    displayMessage("registerFeedback", "User registered. Please log in!", "success");
    setTimeout(() => {
      location.assign("/profile/login");
    }, 1000);
    return await response.json();
  } else {
    displayMessage("registerFeedback", "User already registered!", "danger");
    throw new Error(response.status);
  }
}
