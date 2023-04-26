/**
 * This function is a helper function, to give feedback to the user
 * @param {string} container -The container id were the message needs to be displayed
 * @param {string} message -The message we want to display
 * @param {string} style -The styles for the container..
 * @example
 *  ```js
 * displayMessage("#message","Fail Password", "error")
 */
export function displayMessage(container, message, style) {
  const feedback = document.getElementById(container);
  feedback.innerHTML = "";
  feedback.innerText = message;
  feedback.classList.add(style);
}
