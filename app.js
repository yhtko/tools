/* ===================================================
   Factory Tools Portal — app.js
   Navigation + calculation logic
   =================================================== */

// ── Navigation ──────────────────────────────────────

const sectionTitles = {
  layout:     "工場レイアウト作成ツール",
  inspection: "検査図面作成ツール",
  calc:       "各所計算ツール",
};

function activateSection(id) {
  // Update nav items
  document.querySelectorAll(".nav-item").forEach((item) => {
    const section = item.dataset.section;
    item.classList.toggle("active", section === id);
  });

  // Update sections
  document.querySelectorAll(".tool-section").forEach((el) => {
    el.classList.toggle("active", el.id === "section-" + id);
  });

  // Update topbar title
  const titleEl = document.getElementById("topbar-title");
  if (titleEl && sectionTitles[id]) {
    titleEl.textContent = sectionTitles[id];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Wire up nav links
  document.querySelectorAll(".nav-item[data-section]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      activateSection(section);

      // If this is a sub-link (calc sub-category), scroll to the anchor
      const href = link.getAttribute("href");
      if (href && href.startsWith("#calc-")) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
        }
      }
    });
  });
});

// ── Utility helpers ──────────────────────────────────

function showResult(id, html) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = html;
  el.classList.add("visible");
}

function round(value, digits = 2) {
  const factor = Math.pow(10, digits);
  return Math.round(value * factor) / factor;
}

function fmt(value, digits = 2) {
  return value.toLocaleString("ja-JP", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

// ── Takt time ────────────────────────────────────────
// タクトタイム = 稼働時間 × 稼働率 ÷ 必要生産数

function calcTakt() {
  const minutes = parseFloat(document.getElementById("takt-time").value);
  const qty     = parseFloat(document.getElementById("takt-qty").value);
  const eff     = parseFloat(document.getElementById("takt-eff").value);

  if (isNaN(minutes) || isNaN(qty) || isNaN(eff) || qty === 0) {
    showResult("takt-result", "<p style='color:#dc2626'>入力値を確認してください。</p>");
    return;
  }

  const effectiveMinutes = minutes * (eff / 100);
  const taktSec  = (effectiveMinutes / qty) * 60;
  const taktMin  = taktSec / 60;

  showResult("takt-result", `
    <div class="result-value">${fmt(taktSec, 1)} 秒/個</div>
    <div class="result-label">タクトタイム</div>
    <div class="result-sub">
      実稼働時間: ${fmt(effectiveMinutes, 1)} 分
      （${fmt(minutes, 0)} 分 × 稼働率 ${eff}%）<br>
      タクトタイム: ${fmt(taktMin, 2)} 分/個 = ${fmt(taktSec, 1)} 秒/個
    </div>
  `);
}

// ── Production capacity ──────────────────────────────
// 生産能力 = 稼働時間 × 3600 ÷ サイクルタイム × 設備数 × 稼働率

function calcCapacity() {
  const cycle    = parseFloat(document.getElementById("cap-cycle").value);
  const hours    = parseFloat(document.getElementById("cap-hours").value);
  const machines = parseFloat(document.getElementById("cap-machines").value);
  const eff      = parseFloat(document.getElementById("cap-eff").value);

  if (isNaN(cycle) || isNaN(hours) || isNaN(machines) || isNaN(eff) || cycle === 0) {
    showResult("cap-result", "<p style='color:#dc2626'>入力値を確認してください。</p>");
    return;
  }

  const totalSec   = hours * 3600;
  const effectSec  = totalSec * (eff / 100);
  const perMachine = Math.floor(effectSec / cycle);
  const total      = perMachine * machines;

  showResult("cap-result", `
    <div class="result-value">${total.toLocaleString("ja-JP")} 個/日</div>
    <div class="result-label">最大生産能力（全設備合計）</div>
    <div class="result-sub">
      実稼働時間: ${fmt(effectSec / 3600, 2)} 時間
      （${hours}h × 稼働率 ${eff}%）<br>
      1台あたり: ${perMachine.toLocaleString("ja-JP")} 個/日<br>
      設備 ${machines} 台合計: <strong>${total.toLocaleString("ja-JP")} 個/日</strong>
    </div>
  `);
}

// ── Area calculation ─────────────────────────────────

function calcArea() {
  const w     = parseFloat(document.getElementById("area-w").value);
  const d     = parseFloat(document.getElementById("area-d").value);
  const aisle = parseFloat(document.getElementById("area-aisle").value);

  if (isNaN(w) || isNaN(d) || isNaN(aisle)) {
    showResult("area-result", "<p style='color:#dc2626'>入力値を確認してください。</p>");
    return;
  }

  const totalArea    = w * d;
  const aisleArea    = totalArea * (aisle / 100);
  const effectArea   = totalArea - aisleArea;
  const perimeter    = 2 * (w + d);

  showResult("area-result", `
    <div class="result-value">${fmt(totalArea, 1)} m²</div>
    <div class="result-label">総床面積</div>
    <div class="result-sub">
      幅 ${w} m × 奥行 ${d} m = ${fmt(totalArea, 1)} m²<br>
      通路面積 (${aisle}%): ${fmt(aisleArea, 1)} m²<br>
      有効作業面積: ${fmt(effectArea, 1)} m²<br>
      外周長: ${fmt(perimeter, 1)} m
    </div>
  `);
}

// ── Weight / Load ────────────────────────────────────
// 床面荷重 = 重量 × 安全率 ÷ 設置面積

function calcWeight() {
  const kg    = parseFloat(document.getElementById("wt-kg").value);
  const area  = parseFloat(document.getElementById("wt-area").value);
  const sf    = parseFloat(document.getElementById("wt-sf").value);

  if (isNaN(kg) || isNaN(area) || isNaN(sf) || area === 0) {
    showResult("wt-result", "<p style='color:#dc2626'>入力値を確認してください。</p>");
    return;
  }

  const loadKgfM2   = (kg * sf) / area;       // kgf/m²
  const loadKN_M2   = loadKgfM2 * 0.00981;    // kN/m² (≈ kPa)
  const loadTf_M2   = loadKgfM2 / 1000;       // tf/m²

  showResult("wt-result", `
    <div class="result-value">${fmt(loadKgfM2, 0)} kgf/m²</div>
    <div class="result-label">設計床面荷重（安全率込み）</div>
    <div class="result-sub">
      設備重量: ${kg.toLocaleString("ja-JP")} kg<br>
      設置面積: ${area} m²<br>
      安全率: ${sf}<br>
      床面荷重: ${fmt(loadKgfM2, 0)} kgf/m²
        = ${fmt(loadKN_M2, 2)} kN/m²
        = ${fmt(loadTf_M2, 3)} tf/m²<br>
      <span style="color:#d97706">※ 建物の床荷重仕様（通常 500〜2000 kgf/m²）と比較して確認してください。</span>
    </div>
  `);
}
