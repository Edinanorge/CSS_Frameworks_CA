import { commentPost } from "../api/posts/comment.mjs";
/**
 * This function is a handler function which adds a submit eventListener to the comment from
 */
export function submitCommentForm() {
  const form = document.querySelector("#commentForm");

  if (form) {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const comment = Object.fromEntries(formData.entries());

      comment.id = id;
      commentPost(comment);

      setTimeout(() => {
        location.reload();
      }, 200);
    });
  }
}
