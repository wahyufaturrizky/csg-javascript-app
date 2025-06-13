export async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}

export async function fetchComments(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return await res.json();
}

// js/utils.js
export function containsRerum(text) {
  return /\brerum\b/i.test(text);
}

export function highlightText(text) {
  return text.replace(/(rerum)/gi, "<mark>$1</mark>");
}
