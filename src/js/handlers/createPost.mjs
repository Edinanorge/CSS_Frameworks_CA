import { createPost } from "../api/posts/create.mjs";
/**
 * This is a handler function. It gives a submit event to the createPost form
 */
export function submitCreatPostForm() {
  const form = document.querySelector("#createPostForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createPost(post);

      setTimeout(() => {
        location.reload();
      }, 200);
    });
  }
}
