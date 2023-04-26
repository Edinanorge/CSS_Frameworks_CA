import { clear } from "../../storage/clear.mjs";

export function logout() {
  const btnLogout = document.querySelectorAll(".btnLogout");

  btnLogout.forEach((btn) =>
    btn.addEventListener("click", () => {
      clear();
      setTimeout(() => {
        location.assign("/profile/login");
      }, 200);
    })
  );
}
