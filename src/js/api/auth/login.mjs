import { url } from "/src/js/api/constants.mjs";
import * as storage from "../../storage/index.mjs";
import { displayMessage } from "../../display/displayMessage.mjs";

/**
 * This function sending profile object collected from login form and send it to API, saving the returned user object to Local storage
 * @param {object} profile This is the user profile collected from a login form
 * @returns Returns a User object whit accessToken
 * @examlpe
 *
 */

export async function login(profile) {
  try {
    const loginUrl = `${url}/auth/login`;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(profile),
    };

    const response = await fetch(loginUrl, options);

    if (response.ok) {
      // Save user to sorage
      const { accessToken, ...user } = await response.json();

      storage.save("token", accessToken);
      storage.save("user", user);

      // change the location
      setTimeout(() => {
        location.assign("/posts");
      }, 300);
    } else {
      displayMessage("loginFeedback", "Wrong email or password.", "danger");
    }
  } catch (error) {
    throw new Error(response.errors[0], response.statusText);
  }
}
