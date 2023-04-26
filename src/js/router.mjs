import * as liseners from "./handlers/index.mjs";
import * as ui from "./display/index.mjs";

import { setAvatar } from "./handlers/setAvatar.mjs";
import { logout } from "./api/auth/logout.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
      liseners.submitLoginForm();
      return;

    case "/profile/register/":
      liseners.submitSignupForm();
      return;

    case "/profile/":
      setAvatar();
      logout();

      ui.displayUserPosts();

      liseners.submitCreatPostForm();
      liseners.submitEditProfileForm();
      return;

    case "/posts/":
      setAvatar();
      logout();

      ui.displayPosts();
      ui.displayContacts();

      liseners.submitFilterForm();
      liseners.submitCreatPostForm();
      liseners.search();

      return;

    case "/post/index.html":
      setAvatar();
      logout();

      ui.displaySingelPost();

      liseners.submitCommentForm();
      return;
    case "/post/edit/index.html":
      setAvatar();
      logout();

      liseners.submitEditPostForm();
  }
}
