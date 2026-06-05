/* ===================================================
   Factory Tools Portal — app.js
   Navigation logic
   =================================================== */

const sectionTitles = {
  layout:     "工場レイアウト作成ツール",
  inspection: "PDF検査マーカー",
  calc:       "ForgeKit — 工場計算ツール集",
  st:         "ST Designer — 標準作業時間設計ツール",
};

function activateSection(id) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.section === id);
  });

  document.querySelectorAll(".tool-section").forEach((el) => {
    el.classList.toggle("active", el.id === "section-" + id);
  });

  const titleEl = document.getElementById("topbar-title");
  if (titleEl && sectionTitles[id]) {
    titleEl.textContent = sectionTitles[id];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-item[data-section]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      activateSection(link.dataset.section);
    });
  });
});
