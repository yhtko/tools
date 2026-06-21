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
    navSt:       '標準時間設計',
    openTool:    'ツールを開く',

    titleLayout:   '工場レイアウト作成ツール',
    titleInspect:  'PDF検査マーカー',
    titleCalc:     'ForgeKit — 工場計算ツール集',
    titleSt:       'ST Designer — 標準作業時間設計ツール',

    badgeLayout:   '🏭 工場レイアウト',
    badgeInspect:  '📐 検査図面',
    badgeCalc:     '🔢 計算ツール',
    badgeSt:       '⏱ 標準時間設計',

    descLayout:  '設備・通路・安全エリアを2D/3Dで配置し、現場レイアウトを視覚化します。ドラッグ＆ドロップで直感的に操作できます。',
    descInspect: 'PDFをブラウザに読み込み、測定箇所・検査コメントをその場でマーキング。検査指示書や現場確認シートの作成を素早く行えます。',
    descCalc:    '単位変換・材料重量・溶接時間・加工時間など、製造現場で使う計算をタブ切り替えでまとめて実行。多言語対応で海外工場でも活用できます。',
    descSt:      '動作要素をパネルからクリックするだけで工程を積み上げ、正味時間・標準時間・VA率を自動集計。パレート図・ガントチャートで作業のムダを即座に可視化できます。',

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

    f_st_lib:    '動作ライブラリから工程を積み上げ',
    f_st_lib_d:  '移動・把握・固定・溶接など8カテゴリ・40種類以上の標準要素を用意。クリックするだけで工程に追加でき、カスタム要素も登録できます。',
    f_st_time:   '正味時間・標準時間を自動計算',
    f_st_time_d: '余裕率を設定するだけで正味時間から標準時間を自動算出。日次工数・VA率もリアルタイムで更新されます。',
    f_st_pareto: 'パレート図で改善ポイントを特定',
    f_st_pareto_d:'時間の長い要素を自動ソートしてパレート図を表示。VA（主要）／SV（補助）／NVA（ムダ）の色分けで改善対象が一目でわかります。',
    f_st_gantt:  '連続動作チャート（ガントチャート）',
    f_st_gantt_d:'工程全体の時間軸を可視化するガントチャートを生成。要素単位・グループ単位で切り替えて工程バランスを分析できます。',
    f_st_group:  'グループ化・並び替え・UNDO対応',
    f_st_group_d:'ドラッグ＆ドロップで要素を並び替え、関連動作をグループ化。UNDOにも対応しているので安心して編集できます。',
    f_st_export: 'JSON保存・CSV ZIP出力',
    f_st_export_d:'工程データをJSONで保存・読み込み。要素一覧・集計・ガントチャートをCSV ZIPでエクスポートして報告書に活用できます。',

    navBg:        '背景除去',
    titleBg:      'Product Photo Cleaner — 背景除去ツール',
    badgeBg:      '🖼️ 背景除去',
    descBg:       '画像をサーバーへ送らず、ブラウザ内で背景除去とマスク修正を行います。AIモデルが自動で被写体を切り抜き、透過PNG・白背景・黒背景・グレーで出力できます。',
    f_bg_ai:      'AIによる自動背景除去',
    f_bg_ai_d:    '@imgly/background-removal モデルをブラウザ内で実行。画像データは一切サーバーへ送信せず、完全ローカルで処理します。',
    f_bg_mask:    'マスク手動修正',
    f_bg_mask_d:  'ポリゴンで囲んで前景・背景を追加／削除。島（連続領域）単位でのワンクリック切替にも対応しています。',
    f_bg_export:  '4種類の背景で出力',
    f_bg_export_d:'透過PNG・白背景・黒背景・検査グレーの4種から選んでコピーまたは保存。ECサイト用途から品質検査資料まで対応します。',
    f_bg_history: '処理履歴の管理',
    f_bg_history_d:'処理した画像を IndexedDB に自動保存。サムネイル一覧からワンクリックで再コピーまたはダウンロードできます。',
    f_bg_view:    '3モードプレビュー',
    f_bg_view_d:  '元画像＋結果の比較表示・結果のみ・元画像の3モードを切り替えてマスクの精度を確認しながら編集できます。',
    f_bg_i18n:    '多言語対応',
    f_bg_i18n_d:  '日本語・英語・タイ語・インドネシア語・中国語に対応。海外工場の商品撮影ラインでもそのまま使えます。',
  },

  en: {
    siteTitle:   'Factory Tools — Manufacturing Tool Suite',
    navTools:    'Tools',
    navLayout:   'Factory Layout',
    navInspect:  'Inspection Drawing',
    navCalc:     'Calculation Tools',
    navSt:       'Standard Time Design',
    openTool:    'Open Tool',

    titleLayout:   'Factory Layout Tool',
    titleInspect:  'PDF Inspection Marker',
    titleCalc:     'ForgeKit — Manufacturing Calculator Suite',
    titleSt:       'ST Designer — Standard Time Design Tool',

    badgeLayout:   '🏭 Factory Layout',
    badgeInspect:  '📐 Inspection',
    badgeCalc:     '🔢 Calculators',
    badgeSt:       '⏱ Standard Time',

    descLayout:  'Place equipment, aisles, and safety zones in 2D/3D to visualize your factory floor. Drag and drop for intuitive operation.',
    descInspect: 'Load PDFs in the browser and mark measurement points and inspection comments on the spot. Quickly create inspection sheets and field review documents.',
    descCalc:    'Run unit conversions, material weight, welding time, machining time and more — all in one tabbed interface. Multilingual support for global factories.',
    descSt:      'Build a process by clicking motion elements from the panel and automatically tally net time, standard time, and VA%. Instantly visualize waste with Pareto charts and Gantt charts.',

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

    f_st_lib:    'Build processes from a motion library',
    f_st_lib_d:  'Over 40 standard elements across 8 categories — movement, grasping, fastening, welding and more. Add with a click; register custom elements too.',
    f_st_time:   'Auto-calculate net and standard time',
    f_st_time_d: 'Set the allowance rate and standard time is calculated from net time automatically. Daily workload and VA% update in real time.',
    f_st_pareto: 'Identify improvement points with Pareto charts',
    f_st_pareto_d:'Elements are automatically sorted by time and displayed as a Pareto chart. VA / SV / NVA color coding makes improvement targets obvious.',
    f_st_gantt:  'Continuous Motion Chart (Gantt)',
    f_st_gantt_d:'Generate a Gantt chart to visualize the time axis across the entire process. Switch between element and group views to analyze process balance.',
    f_st_group:  'Grouping, reordering & undo',
    f_st_group_d:'Drag and drop to reorder elements and group related motions. Undo support lets you edit with confidence.',
    f_st_export: 'JSON save & CSV ZIP export',
    f_st_export_d:'Save and reload process data as JSON. Export element lists, summaries, and Gantt data as a CSV ZIP for reports.',

    navBg:        'Background Removal',
    titleBg:      'Product Photo Cleaner — Background Removal Tool',
    badgeBg:      '🖼️ Background Removal',
    descBg:       'Remove backgrounds and edit masks entirely in the browser — no server uploads. AI model runs locally to cut out subjects and export as transparent PNG, white, black, or gray background.',
    f_bg_ai:      'AI-powered background removal',
    f_bg_ai_d:    'Runs the @imgly/background-removal model locally in the browser. Image data is never sent to any server.',
    f_bg_mask:    'Manual mask editing',
    f_bg_mask_d:  'Draw polygons to add or remove foreground/background regions. One-click island toggle for connected regions.',
    f_bg_export:  '4 background output options',
    f_bg_export_d:'Choose from transparent PNG, white, black, or inspection gray — then copy or save. Works for e-commerce and quality inspection documents alike.',
    f_bg_history: 'Processing history',
    f_bg_history_d:'Processed images are auto-saved to IndexedDB. Re-copy or download any past result from the thumbnail list.',
    f_bg_view:    '3-mode preview',
    f_bg_view_d:  'Switch between compare (original + result), result only, and original modes to check mask accuracy while editing.',
    f_bg_i18n:    'Multilingual support',
    f_bg_i18n_d:  'Available in Japanese, English, Thai, Indonesian, and Chinese. Ready for product photography lines at overseas factories.',
  },

  th: {
    siteTitle:   'Factory Tools — ชุดเครื่องมือจัดการโรงงาน',
    navTools:    'เครื่องมือ',
    navLayout:   'ผังโรงงาน',
    navInspect:  'แบบตรวจสอบ',
    navCalc:     'เครื่องคิดเลข',
    navSt:       'เวลามาตรฐาน',
    openTool:    'เปิดเครื่องมือ',
    titleLayout:   'เครื่องมือสร้างผังโรงงาน',
    titleInspect:  'PDF Inspection Marker',
    titleCalc:     'ForgeKit — ชุดเครื่องคิดเลขโรงงาน',
    titleSt:       'ST Designer — เครื่องมือออกแบบเวลามาตรฐาน',
    badgeLayout:   '🏭 ผังโรงงาน',
    badgeInspect:  '📐 ตรวจสอบ',
    badgeCalc:     '🔢 การคำนวณ',
    badgeSt:       '⏱ เวลามาตรฐาน',
    descLayout:  'จัดวางอุปกรณ์ ทางเดิน และพื้นที่ความปลอดภัยในรูปแบบ 2D/3D เพื่อแสดงภาพผังพื้นที่จริง ลากและวางได้อย่างง่ายดาย',
    descInspect: 'โหลด PDF ลงในเบราว์เซอร์และทำเครื่องหมายจุดวัดและความคิดเห็นการตรวจสอบได้ทันที',
    descCalc:    'รันการแปลงหน่วย น้ำหนักวัสดุ เวลาเชื่อม เวลาตัดเฉือน และอื่นๆ ในอินเทอร์เฟซแท็บเดียว รองรับหลายภาษา',
    descSt:      'สร้างกระบวนการโดยคลิกองค์ประกอบการเคลื่อนไหวจากแผง และรวบรวมเวลาสุทธิ เวลามาตรฐาน และ VA% โดยอัตโนมัติ',
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
    f_st_lib:'สร้างกระบวนการจากไลบรารีการเคลื่อนไหว', f_st_lib_d:'องค์ประกอบมาตรฐานกว่า 40 รายการใน 8 หมวดหมู่',
    f_st_time:'คำนวณเวลาสุทธิและมาตรฐานอัตโนมัติ', f_st_time_d:'ตั้งค่าอัตราเผื่อแล้วคำนวณเวลามาตรฐานโดยอัตโนมัติ',
    f_st_pareto:'ระบุจุดปรับปรุงด้วยแผนภูมิ Pareto', f_st_pareto_d:'จัดเรียงองค์ประกอบตามเวลาและแสดงเป็นแผนภูมิ Pareto',
    f_st_gantt:'แผนภูมิ Gantt การเคลื่อนไหวต่อเนื่อง', f_st_gantt_d:'สร้างแผนภูมิ Gantt เพื่อแสดงแกนเวลา',
    f_st_group:'การจัดกลุ่ม เรียงลำดับ และ Undo', f_st_group_d:'ลากวางเพื่อเรียงลำดับและจัดกลุ่มการเคลื่อนไหว',
    f_st_export:'บันทึก JSON และส่งออก CSV ZIP', f_st_export_d:'บันทึกและโหลดข้อมูลกระบวนการเป็น JSON',

    navBg:        'ลบพื้นหลัง',
    titleBg:      'Product Photo Cleaner — เครื่องมือลบพื้นหลัง',
    badgeBg:      '🖼️ ลบพื้นหลัง',
    descBg:       'ลบพื้นหลังและแก้ไขมาสก์ทั้งหมดในเบราว์เซอร์ ไม่ต้องอัปโหลดไปยังเซิร์ฟเวอร์ โมเดล AI ทำงานในเครื่องเพื่อตัดวัตถุและส่งออกเป็น PNG โปร่งใสหรือพื้นหลังสี',
    f_bg_ai:'ลบพื้นหลังด้วย AI', f_bg_ai_d:'รันโมเดล @imgly/background-removal ในเบราว์เซอร์ ข้อมูลภาพไม่ถูกส่งไปยังเซิร์ฟเวอร์ใดๆ',
    f_bg_mask:'แก้ไขมาสก์ด้วยตนเอง', f_bg_mask_d:'วาดรูปหลายเหลี่ยมเพื่อเพิ่มหรือลบพื้นที่ รองรับการสลับ Island ด้วยคลิกเดียว',
    f_bg_export:'ตัวเลือกพื้นหลัง 4 แบบ', f_bg_export_d:'เลือก PNG โปร่งใส สีขาว สีดำ หรือสีเทา แล้วคัดลอกหรือบันทึก',
    f_bg_history:'ประวัติการประมวลผล', f_bg_history_d:'ภาพที่ประมวลผลแล้วบันทึกอัตโนมัติใน IndexedDB คัดลอกหรือดาวน์โหลดได้จากรายการ',
    f_bg_view:'ดูตัวอย่าง 3 โหมด', f_bg_view_d:'สลับระหว่างโหมดเปรียบเทียบ ผลลัพธ์เท่านั้น และต้นฉบับ',
    f_bg_i18n:'รองรับหลายภาษา', f_bg_i18n_d:'ใช้งานได้ในภาษาญี่ปุ่น อังกฤษ ไทย อินโดนีเซีย และจีน',
  },

  id: {
    siteTitle:   'Factory Tools — Kumpulan Alat Manajemen Pabrik',
    navTools:    'Alat',
    navLayout:   'Tata Letak Pabrik',
    navInspect:  'Gambar Inspeksi',
    navCalc:     'Alat Kalkulasi',
    navSt:       'Desain Waktu Standar',
    openTool:    'Buka Alat',
    titleLayout:   'Alat Tata Letak Pabrik',
    titleInspect:  'PDF Inspection Marker',
    titleCalc:     'ForgeKit — Kalkulator Manufaktur',
    titleSt:       'ST Designer — Alat Desain Waktu Standar',
    badgeLayout:   '🏭 Tata Letak',
    badgeInspect:  '📐 Inspeksi',
    badgeCalc:     '🔢 Kalkulasi',
    badgeSt:       '⏱ Waktu Standar',
    descLayout:  'Tempatkan peralatan, jalur, dan area keselamatan dalam 2D/3D untuk memvisualisasikan lantai pabrik Anda. Drag and drop untuk pengoperasian intuitif.',
    descInspect: 'Muat PDF di browser dan tandai titik pengukuran serta komentar inspeksi langsung di tempat.',
    descCalc:    'Jalankan konversi satuan, berat material, waktu pengelasan, waktu pemesinan, dan lainnya dalam satu antarmuka bertab. Dukungan multibahasa.',
    descSt:      'Bangun proses dengan mengklik elemen gerakan dari panel dan secara otomatis merekap waktu bersih, waktu standar, dan VA%.',
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
    f_st_lib:'Bangun proses dari pustaka gerakan', f_st_lib_d:'Lebih dari 40 elemen standar dalam 8 kategori.',
    f_st_time:'Hitung waktu bersih & standar otomatis', f_st_time_d:'Atur tingkat kelonggaran dan waktu standar dihitung otomatis.',
    f_st_pareto:'Identifikasi titik perbaikan dengan Pareto', f_st_pareto_d:'Elemen diurutkan berdasarkan waktu dan ditampilkan sebagai grafik Pareto.',
    f_st_gantt:'Bagan Gantt Gerakan Berkelanjutan', f_st_gantt_d:'Hasilkan bagan Gantt untuk memvisualisasikan sumbu waktu.',
    f_st_group:'Pengelompokan, pengurutan & undo', f_st_group_d:'Drag and drop untuk mengurutkan dan mengelompokkan gerakan.',
    f_st_export:'Simpan JSON & ekspor CSV ZIP', f_st_export_d:'Simpan dan muat ulang data proses sebagai JSON.',

    navBg:        'Hapus Latar',
    titleBg:      'Product Photo Cleaner — Alat Hapus Latar Belakang',
    badgeBg:      '🖼️ Hapus Latar',
    descBg:       'Hapus latar belakang dan edit mask sepenuhnya di browser tanpa upload ke server. Model AI berjalan lokal untuk memotong subjek dan mengekspor sebagai PNG transparan atau latar berwarna.',
    f_bg_ai:'Hapus latar dengan AI', f_bg_ai_d:'Jalankan model @imgly/background-removal secara lokal. Data gambar tidak pernah dikirim ke server.',
    f_bg_mask:'Edit mask manual', f_bg_mask_d:'Gambar poligon untuk menambah atau menghapus area. Mendukung toggle island dengan satu klik.',
    f_bg_export:'4 pilihan latar belakang', f_bg_export_d:'Pilih PNG transparan, putih, hitam, atau abu-abu inspeksi lalu salin atau simpan.',
    f_bg_history:'Riwayat pemrosesan', f_bg_history_d:'Gambar yang diproses disimpan otomatis di IndexedDB. Salin ulang atau unduh dari daftar thumbnail.',
    f_bg_view:'Pratinjau 3 mode', f_bg_view_d:'Beralih antara mode bandingkan, hasil saja, dan asli untuk memeriksa akurasi mask.',
    f_bg_i18n:'Dukungan multibahasa', f_bg_i18n_d:'Tersedia dalam Jepang, Inggris, Thai, Indonesia, dan Mandarin.',
  },

  zh: {
    siteTitle:   'Factory Tools — 工厂管理工具集',
    navTools:    '工具',
    navLayout:   '工厂布局',
    navInspect:  '检查图纸',
    navCalc:     '计算工具',
    navSt:       '标准时间设计',
    openTool:    '打开工具',
    titleLayout:   '工厂布局创建工具',
    titleInspect:  'PDF检查标记工具',
    titleCalc:     'ForgeKit — 工厂计算工具集',
    titleSt:       'ST Designer — 标准作业时间设计工具',
    badgeLayout:   '🏭 工厂布局',
    badgeInspect:  '📐 检查图纸',
    badgeCalc:     '🔢 计算工具',
    badgeSt:       '⏱ 标准时间',
    descLayout:  '以2D/3D方式配置设备、通道和安全区域，可视化现场布局。通过拖放进行直观操作。',
    descInspect: '在浏览器中加载PDF，直接在测量点和检查注释处进行标注。快速创建检查指示书和现场确认表。',
    descCalc:    '在一个选项卡界面中运行单位转换、材料重量、焊接时间、加工时间等计算。支持多语言。',
    descSt:      '通过点击面板中的动作要素来构建工序，自动汇总净时间、标准时间和VA率。通过帕累托图和甘特图立即可视化作业浪费。',
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
    f_st_lib:'从动作库构建工序', f_st_lib_d:'8个类别、40种以上标准要素，点击即可添加。',
    f_st_time:'自动计算净时间和标准时间', f_st_time_d:'设置余裕率，即可自动从净时间计算标准时间。',
    f_st_pareto:'通过帕累托图确定改善点', f_st_pareto_d:'按时间自动排序要素并显示帕累托图。',
    f_st_gantt:'连续动作图表（甘特图）', f_st_gantt_d:'生成甘特图，可视化整个工序的时间轴。',
    f_st_group:'分组、排序和撤销支持', f_st_group_d:'通过拖放排序，将相关动作分组。',
    f_st_export:'JSON保存和CSV ZIP输出', f_st_export_d:'以JSON格式保存和加载工序数据。',

    navBg:        '背景去除',
    titleBg:      'Product Photo Cleaner — 背景去除工具',
    badgeBg:      '🖼️ 背景去除',
    descBg:       '完全在浏览器内进行背景去除和蒙版修正，无需上传到服务器。AI模型在本地运行，自动抠出主体，支持透明PNG、白色、黑色、灰色背景输出。',
    f_bg_ai:'AI自动背景去除', f_bg_ai_d:'在浏览器内运行 @imgly/background-removal 模型，图像数据不会发送到任何服务器。',
    f_bg_mask:'手动蒙版修正', f_bg_mask_d:'通过绘制多边形添加或删除前景/背景区域，支持一键切换连通区域（岛）。',
    f_bg_export:'4种背景输出', f_bg_export_d:'选择透明PNG、白色、黑色或检查灰色背景，然后复制或保存。',
    f_bg_history:'处理历史管理', f_bg_history_d:'处理的图像自动保存到IndexedDB，可从缩略图列表一键重新复制或下载。',
    f_bg_view:'3模式预览', f_bg_view_d:'在对比（原图+结果）、仅结果、原图三种模式间切换，边编辑边确认蒙版精度。',
    f_bg_i18n:'多语言支持', f_bg_i18n_d:'支持日语、英语、泰语、印度尼西亚语、中文，适用于海外工厂的商品拍摄线。',
  },
};

// ツールURLマッピング（st-toolはja/en、外部ツールは?langを付与）
const TOOL_URLS = {
  layout:     { base: 'https://yhtko.github.io/factory-layout/', langParam: true },
  inspection: { base: 'https://yhtko.github.io/inspection-marker/', langParam: true },
  calc:       { base: 'https://yhtko.github.io/ForgeKit/', langParam: true },
  st:         { base: 'https://yhtko.github.io/st-tool/', langParam: true, stTool: true },
  bg:         { base: 'https://yhtko.github.io/background-remover/', langParam: true },
};

const SUPPORTED_LANGS = ['ja', 'en', 'th', 'id', 'zh'];
let currentLang = 'ja';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || I18N.ja[key] || key;
}

function buildToolUrl(toolKey) {
  const cfg = TOOL_URLS[toolKey];
  if (!cfg) return '#';
  let lang = currentLang;
  if (cfg.stTool && lang !== 'ja') lang = 'en';
  return cfg.langParam ? `${cfg.base}?lang=${lang}` : cfg.base;
}

const sectionTitles = {
  layout:     () => t('titleLayout'),
  inspection: () => t('titleInspect'),
  calc:       () => t('titleCalc'),
  st:         () => t('titleSt'),
  bg:         () => t('titleBg'),
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
