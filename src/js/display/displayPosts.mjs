import * as posts from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";
/**
 * This function displaying the post to there container. 
 */
export async function displayPosts() {
  const feeds = await posts.getPosts();
  const container = document.querySelector("#postsContainer");
  container.innerHTML = "";
  templates.renderPostTemplates(feeds, container);
}
