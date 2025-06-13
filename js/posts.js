import { fetchPosts, fetchComments } from "./api.js";
import { containsRerum } from "./utils.js";

const tableBody = document.getElementById("postsTable");
const searchInput = document.getElementById("searchInput");
let allPosts = [];

function renderPosts(posts) {
  tableBody.innerHTML = "";
  posts.forEach((post) => {
    const tr = document.createElement("tr");
    tr.className = containsRerum(post.body) ? "bg-yellow-100" : "";
    tr.innerHTML = `
      <td class="border px-4 py-2">${post.id}</td>
      <td class="border px-4 py-2">${post.title}</td>
      <td class="border px-4 py-2">${post.body}</td>
    `;
    tr.addEventListener("click", async () => {
      const comments = await fetchComments(post.id);
      alert(`Comments for Post ${post.id}:\n` + comments.map((c) => `- ${c.name}`).join("\n"));
    });
    tableBody.appendChild(tr);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allPosts.filter(
    (p) => p.title.toLowerCase().includes(query) || p.body.toLowerCase().includes(query)
  );
  renderPosts(filtered);
});

fetchPosts().then((posts) => {
  allPosts = posts;
  renderPosts(allPosts);
});
