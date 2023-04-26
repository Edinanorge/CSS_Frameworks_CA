import { register } from "../api/auth/register.mjs";

/**
 * This function is a handler function, adding a submit event to the register form
 */

export function submitSignupForm() {
  const form = document.querySelector("#signupForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      register(profile);
      form.reset();
    });
  }
}
