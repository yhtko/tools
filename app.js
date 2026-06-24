/* ===================================================
   Factory Tools Portal — app.js
   Navigation + i18n
   =================================================== */

const I18N = {
  ja: {
    siteTitle:   'Factory Tools — 工場管理ツール集',
    navTools:    'ツール',
    navLayout:   '工場レイアウト',
    navInspect:  '検査図面',
    navCalc:     '計算ツール',
    openTool:    'ツールを開く',

    titleLayout:   '工場レイアウト作成ツール',
    titleInspect:  'PDF検査マーカー',
    titleCalc:     'ForgeKit — 工場計算ツール集',

    badgeLayout:   '🏭 工場レイアウト',
    badgeInspect:  '📐 検査図面',
    badgeCalc:     '🔢 計算ツール',

    descLayout:  '設備・通路・安全エリアを2D/3Dで配置し、現場レイアウトを視覚化します。ドラッグ＆ドロップで直感的に操作できます。',
    descInspect: 'PDFをブラウザに読み込み、測定箇所・検査コメントをその場でマーキング。検査指示書や現場確認シートの作成を素早く行えます。',
    descCalc:    '単位変換・材料重量・溶接時間・加工時間など、製造現場で使う計算をタブ切り替えでまとめて実行。多言語対応で海外工場でも活用できます。',

    f_layout_2d:      '2Dレイアウト編集',
    f_layout_2d_d:    'グリッドスナップ付きのドラッグ＆ドロップで設備を配置。ズーム・パンで広い工場も快適に編集できます。',
    f_layout_3d:      '3Dプレビュー',
    f_layout_3d_d:    'Three.jsによるリアルタイム3Dビュー。歩行視点・プレゼンモードでステークホルダーへの説明に活用できます。',
    f_layout_tmpl:    '35種類以上のテンプレート',
    f_layout_tmpl_d:  'マシニングセンタ・コンベア・安全柵など、工場でよく使う設備テンプレートを即座に配置できます。',
    f_layout_export:  'JSON / PNG 出力',
    f_layout_export_d:'レイアウトをJSONで保存・読み込み。PNG形式でエクスポートして図面資料として活用できます。',

    f_inspect_pdf:   'PDFインポート・表示',
    f_inspect_pdf_d: '手持ちのPDF図面をそのままブラウザに読み込み。原寸比率を保ったまま表示できます。',
    f_inspect_mark:  '測定箇所へのマーキング',
    f_inspect_mark_d:'矢印・丸・四角などのマーカーを図面上に配置。番号付きで測定ポイントを明示できます。',
    f_inspect_cmt:   'コメント・寸法記入',
    f_inspect_cmt_d: '各マーカーに検査コメントや寸法値を紐付け。テキストは図面上に直接表示されます。',
    f_inspect_ok:    '合否判定マーカー',
    f_inspect_ok_d:  'OK / NG / 要確認の色分けマーカーで検査結果をひと目で把握。現場レビューに活用できます。',

    f_calc_unit:   '単位変換計算機',
    f_calc_unit_d: '長さ・重さ・圧力・温度・面積・体積など多種の単位を即座に変換。現場でよく使う組み合わせを網羅しています。',
    f_calc_mat:    '材料重量計算機',
    f_calc_mat_d:  '板材・丸棒・パイプなど各種形状の金属重量を材質・寸法から算出。発注量や荷重検討に活用できます。',
    f_calc_weld:   '溶接時間計算機',
    f_calc_weld_d: '溶接パラメータ（速度・長さ・パス数）から作業時間とガス使用量を概算。工程計画の精度向上に貢献します。',
    f_calc_mc:     '加工時間計算機',
    f_calc_mc_d:   '切削条件（回転数・送り・加工距離）から機械加工時間を計算。見積もりや稼働計画の根拠データとして使えます。',
    f_calc_i18n:   '多言語対応',
    f_calc_i18n_d: '日本語・英語・タイ語・インドネシア語・中国語に対応。海外拠点や多国籍チームでもそのまま使えます。',
    f_calc_save:   '結果コピー・設定保存',
    f_calc_save_d: '計算結果をワンクリックでコピー。よく使う設定を保存しておけば次回すぐに呼び出せます。',

  },

  en: {
    siteTitle:   'Factory Tools — Manufacturing Tool Suite',
    navTools:    'Tools',
    navLayout:   'Factory Layout',
    navInspect:  'Inspection Drawing',
    navCalc:     'Calculation Tools',
    openTool:    'Open Tool',

    titleLayout:   'Factory Layout Tool',
    titleInspect:  'PDF Inspection Marker',
    titleCalc:     'ForgeKit — Manufacturing Calculator Suite',

    badgeLayout:   '🏭 Factory Layout',
    badgeInspect:  '📐 Inspection',
    badgeCalc:     '🔢 Calculators',

    descLayout:  'Place equipment, aisles, and safety zones in 2D/3D to visualize your factory floor. Drag and drop for intuitive operation.',
    descInspect: 'Load PDFs in the browser and mark measurement points and inspection comments on the spot. Quickly create inspection sheets and field review documents.',
    descCalc:    'Run unit conversions, material weight, welding time, machining time and more — all in one tabbed interface. Multilingual support for global factories.',

    f_layout_2d:      '2D Layout Editor',
    f_layout_2d_d:    'Place equipment with grid-snapping drag and drop. Zoom and pan to edit even large factories comfortably.',
    f_layout_3d:      '3D Preview',
    f_layout_3d_d:    'Real-time 3D view powered by Three.js. Use walk-through and presentation modes to explain layouts to stakeholders.',
    f_layout_tmpl:    '35+ Equipment Templates',
    f_layout_tmpl_d:  'Instantly place machining centers, conveyors, safety fences, and other common factory equipment.',
    f_layout_export:  'JSON / PNG Export',
    f_layout_export_d:'Save and reload layouts as JSON. Export as PNG for use in drawing documentation.',

    f_inspect_pdf:   'PDF Import & Display',
    f_inspect_pdf_d: 'Load your existing PDF drawings directly in the browser, maintaining the original aspect ratio.',
    f_inspect_mark:  'Measurement Point Marking',
    f_inspect_mark_d:'Place arrows, circles, and rectangles on drawings. Number measurement points for clear communication.',
    f_inspect_cmt:   'Comments & Dimensions',
    f_inspect_cmt_d: 'Attach inspection comments and dimension values to each marker, displayed directly on the drawing.',
    f_inspect_ok:    'Pass / Fail Markers',
    f_inspect_ok_d:  'Color-coded OK / NG / Pending markers let you see inspection results at a glance during field reviews.',

    f_calc_unit:   'Unit Converter',
    f_calc_unit_d: 'Instantly convert length, weight, pressure, temperature, area, volume and more. Covers the combinations used most on the shop floor.',
    f_calc_mat:    'Material Weight Calculator',
    f_calc_mat_d:  'Calculate metal weight for plates, round bars, pipes and other shapes from material and dimensions. Useful for ordering and load analysis.',
    f_calc_weld:   'Welding Time Calculator',
    f_calc_weld_d: 'Estimate work time and gas consumption from welding parameters (speed, length, passes). Improves process planning accuracy.',
    f_calc_mc:     'Machining Time Calculator',
    f_calc_mc_d:   'Calculate machining time from cutting conditions (RPM, feed, distance). Use as data for estimates and operation planning.',
    f_calc_i18n:   'Multilingual Support',
    f_calc_i18n_d: 'Available in Japanese, English, Thai, Indonesian, and Chinese. Ready to use at overseas sites and with multinational teams.',
    f_calc_save:   'Copy Results & Save Settings',
    f_calc_save_d: 'Copy calculation results in one click. Save frequently used settings to recall them instantly next time.',

  },

  th: {
    siteTitle:   'Factory Tools — ชุดเครื่องมือจัดการโรงงาน',
    navTools:    'เครื่องมือ',
    navLayout:   'ผังโรงงาน',
    navInspect:  'แบบตรวจสอบ',
    navCalc:     'เครื่องคิดเลข',
    openTool:    'เปิดเครื่องมือ',
    titleLayout:   'เครื่องมือสร้างผังโรงงาน',
    titleInspect:  'PDF Inspection Marker',
    titleCalc:     'ForgeKit — ชุดเครื่องคิดเลขโรงงาน',
    badgeLayout:   '🏭 ผังโรงงาน',
    badgeInspect:  '📐 ตรวจสอบ',
    badgeCalc:     '🔢 การคำนวณ',
    descLayout:  'จัดวางอุปกรณ์ ทางเดิน และพื้นที่ความปลอดภัยในรูปแบบ 2D/3D เพื่อแสดงภาพผังพื้นที่จริง ลากและวางได้อย่างง่ายดาย',
    descInspect: 'โหลด PDF ลงในเบราว์เซอร์และทำเครื่องหมายจุดวัดและความคิดเห็นการตรวจสอบได้ทันที',
    descCalc:    'รันการแปลงหน่วย น้ำหนักวัสดุ เวลาเชื่อม เวลาตัดเฉือน และอื่นๆ ในอินเทอร์เฟซแท็บเดียว รองรับหลายภาษา',
    f_layout_2d:'แก้ไขผัง 2D', f_layout_2d_d:'จัดวางอุปกรณ์ด้วยการลากวางพร้อม Grid Snap',
    f_layout_3d:'ดูตัวอย่าง 3D', f_layout_3d_d:'มุมมอง 3D แบบเรียลไทม์ด้วย Three.js',
    f_layout_tmpl:'เทมเพลต 35+ รายการ', f_layout_tmpl_d:'วางอุปกรณ์โรงงานทั่วไปได้ทันที',
    f_layout_export:'ส่งออก JSON / PNG', f_layout_export_d:'บันทึกและโหลดผังเป็น JSON ส่งออกเป็น PNG',
    f_inspect_pdf:'นำเข้า PDF', f_inspect_pdf_d:'โหลดแบบ PDF ที่มีอยู่โดยตรงในเบราว์เซอร์',
    f_inspect_mark:'ทำเครื่องหมายจุด', f_inspect_mark_d:'วางลูกศร วงกลม และสี่เหลี่ยมบนแบบ',
    f_inspect_cmt:'ความคิดเห็นและขนาด', f_inspect_cmt_d:'แนบความคิดเห็นและค่าขนาดกับแต่ละเครื่องหมาย',
    f_inspect_ok:'เครื่องหมายผ่าน/ไม่ผ่าน', f_inspect_ok_d:'เครื่องหมาย OK/NG สีต่างกันช่วยดูผลการตรวจสอบ',
    f_calc_unit:'เครื่องแปลงหน่วย', f_calc_unit_d:'แปลงความยาว น้ำหนัก ความดัน อุณหภูมิ และอื่นๆ ได้ทันที',
    f_calc_mat:'เครื่องคำนวณน้ำหนักวัสดุ', f_calc_mat_d:'คำนวณน้ำหนักโลหะจากวัสดุและขนาด',
    f_calc_weld:'เครื่องคำนวณเวลาเชื่อม', f_calc_weld_d:'ประมาณเวลาทำงานจากพารามิเตอร์การเชื่อม',
    f_calc_mc:'เครื่องคำนวณเวลาตัดเฉือน', f_calc_mc_d:'คำนวณเวลาตัดเฉือนจากเงื่อนไขการตัด',
    f_calc_i18n:'รองรับหลายภาษา', f_calc_i18n_d:'ใช้งานได้ที่ไซต์ต่างประเทศและทีมหลายสัญชาติ',
    f_calc_save:'คัดลอกผลและบันทึกการตั้งค่า', f_calc_save_d:'คัดลอกผลลัพธ์ในคลิกเดียว',
  },

  id: {
    siteTitle:   'Factory Tools — Kumpulan Alat Manajemen Pabrik',
    navTools:    'Alat',
    navLayout:   'Tata Letak Pabrik',
    navInspect:  'Gambar Inspeksi',
    navCalc:     'Alat Kalkulasi',
    openTool:    'Buka Alat',
    titleLayout:   'Alat Tata Letak Pabrik',
    titleInspect:  'PDF Inspection Marker',
    titleCalc:     'ForgeKit — Kalkulator Manufaktur',
    badgeLayout:   '🏭 Tata Letak',
    badgeInspect:  '📐 Inspeksi',
    badgeCalc:     '🔢 Kalkulasi',
    descLayout:  'Tempatkan peralatan, jalur, dan area keselamatan dalam 2D/3D untuk memvisualisasikan lantai pabrik Anda. Drag and drop untuk pengoperasian intuitif.',
    descInspect: 'Muat PDF di browser dan tandai titik pengukuran serta komentar inspeksi langsung di tempat.',
    descCalc:    'Jalankan konversi satuan, berat material, waktu pengelasan, waktu pemesinan, dan lainnya dalam satu antarmuka bertab. Dukungan multibahasa.',
    f_layout_2d:'Editor Tata Letak 2D', f_layout_2d_d:'Tempatkan peralatan dengan drag and drop grid-snapping.',
    f_layout_3d:'Pratinjau 3D', f_layout_3d_d:'Tampilan 3D real-time menggunakan Three.js.',
    f_layout_tmpl:'35+ Template Peralatan', f_layout_tmpl_d:'Tempatkan peralatan pabrik umum secara instan.',
    f_layout_export:'Ekspor JSON / PNG', f_layout_export_d:'Simpan dan muat ulang tata letak sebagai JSON.',
    f_inspect_pdf:'Import & Tampilkan PDF', f_inspect_pdf_d:'Muat gambar PDF yang ada langsung di browser.',
    f_inspect_mark:'Penandaan Titik Pengukuran', f_inspect_mark_d:'Tempatkan panah, lingkaran, dan persegi pada gambar.',
    f_inspect_cmt:'Komentar & Dimensi', f_inspect_cmt_d:'Lampirkan komentar dan nilai dimensi ke setiap penanda.',
    f_inspect_ok:'Penanda Lulus / Gagal', f_inspect_ok_d:'Penanda OK/NG berwarna untuk melihat hasil inspeksi sekilas.',
    f_calc_unit:'Konverter Satuan', f_calc_unit_d:'Konversi panjang, berat, tekanan, suhu, dan lainnya secara instan.',
    f_calc_mat:'Kalkulator Berat Material', f_calc_mat_d:'Hitung berat logam dari material dan dimensi.',
    f_calc_weld:'Kalkulator Waktu Pengelasan', f_calc_weld_d:'Perkirakan waktu kerja dari parameter pengelasan.',
    f_calc_mc:'Kalkulator Waktu Pemesinan', f_calc_mc_d:'Hitung waktu pemesinan dari kondisi pemotongan.',
    f_calc_i18n:'Dukungan Multibahasa', f_calc_i18n_d:'Siap digunakan di lokasi luar negeri dan tim multinasional.',
    f_calc_save:'Salin Hasil & Simpan Pengaturan', f_calc_save_d:'Salin hasil kalkulasi dengan satu klik.',
  },

  zh: {
    siteTitle:   'Factory Tools — 工厂管理工具集',
    navTools:    '工具',
    navLayout:   '工厂布局',
    navInspect:  '检查图纸',
    navCalc:     '计算工具',
    openTool:    '打开工具',
    titleLayout:   '工厂布局创建工具',
    titleInspect:  'PDF检查标记工具',
    titleCalc:     'ForgeKit — 工厂计算工具集',
    badgeLayout:   '🏭 工厂布局',
    badgeInspect:  '📐 检查图纸',
    badgeCalc:     '🔢 计算工具',
    descLayout:  '以2D/3D方式配置设备、通道和安全区域，可视化现场布局。通过拖放进行直观操作。',
    descInspect: '在浏览器中加载PDF，直接在测量点和检查注释处进行标注。快速创建检查指示书和现场确认表。',
    descCalc:    '在一个选项卡界面中运行单位转换、材料重量、焊接时间、加工时间等计算。支持多语言。',
    f_layout_2d:'2D布局编辑', f_layout_2d_d:'通过带网格吸附的拖放来放置设备。',
    f_layout_3d:'3D预览', f_layout_3d_d:'基于Three.js的实时3D视图。',
    f_layout_tmpl:'35种以上模板', f_layout_tmpl_d:'立即放置常用工厂设备模板。',
    f_layout_export:'JSON/PNG输出', f_layout_export_d:'以JSON格式保存和加载布局，导出为PNG。',
    f_inspect_pdf:'PDF导入和显示', f_inspect_pdf_d:'直接在浏览器中加载现有的PDF图纸。',
    f_inspect_mark:'测量点标注', f_inspect_mark_d:'在图纸上放置箭头、圆形和矩形标记。',
    f_inspect_cmt:'注释和尺寸标注', f_inspect_cmt_d:'将检查注释和尺寸值附加到每个标记上。',
    f_inspect_ok:'合格/不合格标记', f_inspect_ok_d:'颜色区分的OK/NG标记，一目了然地查看检查结果。',
    f_calc_unit:'单位转换计算器', f_calc_unit_d:'立即转换长度、重量、压力、温度等多种单位。',
    f_calc_mat:'材料重量计算器', f_calc_mat_d:'从材质和尺寸计算金属重量。',
    f_calc_weld:'焊接时间计算器', f_calc_weld_d:'从焊接参数估算作业时间和气体用量。',
    f_calc_mc:'加工时间计算器', f_calc_mc_d:'从切削条件计算机械加工时间。',
    f_calc_i18n:'多语言支持', f_calc_i18n_d:'支持日语、英语、泰语、印度尼西亚语、中文。',
    f_calc_save:'复制结果和保存设置', f_calc_save_d:'一键复制计算结果。',
  },
};

const TOOL_URLS = {
  layout:     { base: 'https://yhtko.github.io/factory-layout/', langParam: true },
  inspection: { base: 'https://yhtko.github.io/inspection-marker/', langParam: true },
  calc:       { base: 'https://yhtko.github.io/ForgeKit/', langParam: true },
};

const SUPPORTED_LANGS = ['ja', 'en', 'th', 'id', 'zh'];
let currentLang = 'ja';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || I18N.ja[key] || key;
}

function buildToolUrl(toolKey) {
  const cfg = TOOL_URLS[toolKey];
  if (!cfg) return '#';
  return cfg.langParam ? `${cfg.base}?lang=${currentLang}` : cfg.base;
}

const sectionTitles = {
  layout:     () => t('titleLayout'),
  inspection: () => t('titleInspect'),
  calc:       () => t('titleCalc'),
};

function activateSection(id) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === id);
  });
  document.querySelectorAll('.tool-section').forEach(el => {
    el.classList.toggle('active', el.id === 'section-' + id);
  });
  const titleEl = document.getElementById('topbar-title');
  if (titleEl && sectionTitles[id]) titleEl.textContent = sectionTitles[id]();
}

function applyLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
  currentLang = lang;
  localStorage.setItem('ft_lang', lang);
  document.documentElement.lang = lang;
  document.title = t('siteTitle');

  // data-i18n属性を持つ要素を更新
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  // data-i18n-html属性はinnerHTMLで更新
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  // ツールを開くボタンのhrefを更新
  document.querySelectorAll('[data-tool]').forEach(el => {
    el.href = buildToolUrl(el.dataset.tool);
  });

  // topbar-titleを現在のアクティブセクションに合わせて更新
  const activeSection = document.querySelector('.tool-section.active');
  if (activeSection) {
    const id = activeSection.id.replace('section-', '');
    const titleEl = document.getElementById('topbar-title');
    if (titleEl && sectionTitles[id]) titleEl.textContent = sectionTitles[id]();
  }

  // セレクターの値を同期
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = lang;
}

function setLanguage(lang) {
  applyLanguage(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // 言語優先順位: URLパラメータ → localStorage → ブラウザ言語 → ja
  const params = new URLSearchParams(location.search);
  const urlLang = params.get('lang');
  const storedLang = localStorage.getItem('ft_lang');
  const browserLang = (navigator.language || '').slice(0, 2);
  const initLang = urlLang || storedLang || (SUPPORTED_LANGS.includes(browserLang) ? browserLang : 'ja');

  // ナビゲーション
  document.querySelectorAll('.nav-item[data-section]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      activateSection(link.dataset.section);
    });
  });

  applyLanguage(initLang);
});
