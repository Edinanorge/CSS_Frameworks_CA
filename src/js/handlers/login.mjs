import { login } from "../api/auth/login.mjs";

/**
 * This function gives a submit event to Login form
 */

export function submitLoginForm() {
  const form = document.querySelector("#loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      login(profile);
    });
  }
}
