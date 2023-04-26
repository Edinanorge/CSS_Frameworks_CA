import * as storage from "../../storage/index.mjs";

export function headers() {
  const token = storage.load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchWhitToken(url, options = {}) {
  return fetch(url, {
    headers: headers(),
    ...options,
  });
}
