import { updatePost } from "../api/posts/update.mjs";
import * as posts from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";

export async function submitEditPostForm() {
  const form = document.querySelector("#editPostForm");

  if (form) {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const singlePost = await posts.getPost(id);
    const container = document.querySelector("#editSinglePostContainer");
    templates.renderUserPostTemplate(singlePost, container);

    form.title.value = singlePost.title;
    form.body.value = singlePost.body;
    form.tags.value = singlePost.tags;
    form.media.value = singlePost.media;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      console.log(post);

      post.id = id;

      updatePost(post);

      setTimeout(() => {
        location.reload();
      }, 300);
    });
  }
}
