import { fetchPosts } from "./api.js";
import { containsRerum } from "./utils.js";

const rerumCountSpan = document.getElementById("rerumCount");
const reportTable = document.getElementById("reportTable");

fetchPosts().then((posts) => {
  const rerumPosts = posts.filter((p) => containsRerum(p.body));
  rerumCountSpan.textContent = rerumPosts.length;

  const userMap = {};
  posts.forEach((p) => {
    userMap[p.userId] = (userMap[p.userId] || 0) + 1;
  });

  Object.entries(userMap).forEach(([userId, count]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-4 py-2">${userId}</td>
      <td class="border px-4 py-2">${count}</td>
    `;
    reportTable.appendChild(tr);
  });
});
