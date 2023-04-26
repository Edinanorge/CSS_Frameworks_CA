import { getFilteredPosts } from "../api/posts/filter.mjs";
import { renderPostTemplates } from "../templates/posts.mjs";

/**
 * This function It gives a submit event to filter form
 */

export async function submitFilterForm() {
  const form = document.querySelector("#filterForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      // collecting the data from the form
      let { sort, sortOrder, tag } = Object.fromEntries(formData.entries());
      tag = tag.toLowerCase().trim();
      // join an array of string to one string separeted whit &
      const query = [`sort=${sort}`, `sortOrder=${sortOrder}`, `_tag=${tag}`].join("&");

      const container = document.querySelector("#postsContainer");
      container.innerHTML = "";
      const filteredPosts = await getFilteredPosts(query);

      renderPostTemplates(filteredPosts, container);
    });
  }
}
