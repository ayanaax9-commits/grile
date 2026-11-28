// ---------- Utilitare ----------
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LITERE = ["A", "B", "C", "D", "E", "F"];

// ordine = indecșii originali ai variantelor, în ordinea în care se afișează
// alese = indecșii originali bifați de tine (sau undefined dacă nu se știu)
function reviewHTML(q, ordine, alese) {
  return ordine.map(i => {
    const corect = q.corecte.includes(i);
    const ales = !!alese && alese.includes(i);
    let cls = "";
    if (corect) cls = "correct" + (alese && !ales ? " missed" : "");
    else if (ales) cls = "wrong";
    return `<button class="option ${cls}" disabled>${esc(q.raspunsuri[i])}</button>`;
  }).join("");
}

// Fisher-Yates
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const imgHTML = (q) => q.imagine
  ? `<img class="q-img" src="${esc(q.imagine)}" alt="Enunț ilustrat">` : "";

// ---------- Date salvate în browser ----------
const KEY_ISTORIC = "grila_istoric";    // [{qid, cap, ok, ts}]
const KEY_COMENT  = "grila_comentarii"; // {qid: "text"}
const KEY_IN_CURS = "grila_in_curs";
function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { alert("Nu am putut salva datele în browser."); }
}

// ---------- Index întrebări ----------
const toate = [];       // toate întrebările, cu capitolul atașat
const dupaId = {};
DATE.capitole.forEach(c => c.intrebari.forEach((q, idx) => {
  const item = { ...q, nr: idx + 1, cap: c.id, capNume: c.nume, multi: Array.isArray(q.corect), corecte: [].concat(q.corect) };
  toate.push(item);
  dupaId[q.id] = item;
}));
const numeCap = Object.fromEntries(DATE.capitole.map(c => [c.id, c.nume]));
const ordineIndex = Object.fromEntries(DATE.capitole.map((c, i) => [c.id, i]));
const cmpIndex = (a, b) => (ordineIndex[a.cap] - ordineIndex[b.cap]) || (a.nr - b.nr);
const textCorecte = (q) => q.corecte.map(i => q.raspunsuri[i]).join(", ");
// Punctaj între 0 și 1:
//  - dacă ai ales vreun răspuns greșit => 0
//  - altfel => (corecte alese) / (total corecte), deci parțial dacă le-ai ales doar pe unele
function scor(q, selectate) {
  const alese = selectate.map(k => q.opt[k].i);
  if (alese.some(i => !q.corecte.includes(i))) return 0;
  return alese.length / q.corecte.length;
}
const esteCorect = (q, selectate) => scor(q, selectate) === 1;
const fmt = (n) => String(Math.round(n * 100) / 100).replace(".", ",");

// Întrebările la care ultimul răspuns a fost greșit
function greseliRecente() {
  const ultim = {};
  load(KEY_ISTORIC, []).forEach(r => { ultim[r.qid] = r.ok; });
  return new Set(Object.keys(ultim).filter(id => ultim[id] === false && dupaId[id]));
}

// ---------- Navigare între ecrane ----------
const views = ["setup", "test", "results", "stats"];
function show(name) {
  views.forEach(v => { $("view-" + v).hidden = v !== name; });
  $("nav-setup").classList.toggle("active", name !== "stats");
  $("nav-stats").classList.toggle("active", name === "stats");
}
$("nav-setup").onclick = () => { renderSetup(); show("setup"); };
$("nav-stats").onclick = () => { renderStats(); show("stats"); };

// ---------- 1. Configurare ----------
function renderSetup() {
  $("setup-error").textContent = "";
  $("chapters").innerHTML = DATE.capitole.map(c => `
    <label class="choice">
      <input type="checkbox" class="cap-check" value="${esc(c.id)}">
      ${esc(c.nume)} <span class="muted">(${c.intrebari.length} întrebări)</span>
    </label>`).join("");
    document.querySelectorAll("#from, #to").forEach(el => el.oninput = updateAvailable);
    renderResume();
  updateAvailable();
}

// ---------- Pauză / continuare ----------
function renderResume() {}

// returnează true dacă s-a salvat (false dacă testul era de fapt gata și s-a terminat)
function salveazaTest() {
  const alegeri = test.alegeri.map(a => a ? [...a] : null);
  let index = test.index;
  if (!test.foaie && test.mod === "imediat") {
    // întrebarea curentă: dacă a fost deja verificată o socotim făcută, altfel o refacem
    if (test.checked) index++; else alegeri[index] = null;
  }
  if (!test.foaie && index >= test.intrebari.length) { finish(); return false; }
  save(KEY_IN_CURS, {
    ts: Date.now(),
    mod: test.mod,
    foaie: !!test.foaie,
    index,
    alegeri,
    intrebari: test.intrebari.map(q => ({ id: q.id, ordine: q.opt.map(o => o.i) }))
  });
  return true;
}

function reia() {
  const s = load(KEY_IN_CURS, null);
  if (!s) return;
  const intrebari = [], alegeri = [];
  s.intrebari.forEach((x, k) => {
    const q = dupaId[x.id];
    if (!q) return; // întrebare ștearsă între timp
    intrebari.push({ ...q, opt: x.ordine.map(i => ({ text: q.raspunsuri[i], i })) });
    alegeri.push(s.alegeri[k]);
  });
  if (!intrebari.length) return;
  test = {
    intrebari, alegeri,
    index: Math.min(s.index, intrebari.length - 1),
    mod: s.mod,
    foaie: s.foaie,
    reluat: true
  };
  if (s.foaie) return window.reiaFoaie();
  show("test");
  renderQuestion();
}

$("pause").onclick = () => {
  if (!test.reluat && load(KEY_IN_CURS, null) &&
      !confirm("Ai deja un alt test salvat. Îl înlocuiesc cu acesta?")) return;
  if (salveazaTest()) { test = null; renderSetup(); show("setup"); }
};

function selectedPool() {
  const caps = [...document.querySelectorAll(".cap-check:checked")].map(e => e.value);
  let pool = toate.filter(q => caps.includes(q.cap));
  if ($("only-wrong").checked) {
    const gresite = greseliRecente();
    pool = pool.filter(q => gresite.has(q.id));
  }
  const de = parseInt($("from").value, 10) || 1;
  const pana = parseInt($("to").value, 10) || Infinity;
  pool = pool.filter(q => q.nr >= de && q.nr <= pana);
  return { caps, pool };
}

function updateAvailable() {
  const { pool } = selectedPool();
  $("available").textContent = `(disponibile: ${pool.length})`;
}

// ---------- 2. Testul ----------
let test = null; // {intrebari, raspunsuri, index, mod}

$("start").onclick = () => {
  const { caps, pool } = selectedPool();
  const n = parseInt($("count").value, 10);
  if (!caps.length) return $("setup-error").textContent = "Bifează cel puțin un capitol.";
  if (!pool.length) return $("setup-error").textContent = "Nu există întrebări disponibile cu aceste setări.";
  if (!n || n < 1) return $("setup-error").textContent = "Introdu un număr valid de întrebări.";

  const ordonate = $("shuffle-q").checked ? shuffle(pool) : pool;

  const alese = ordonate.slice(0, n).map(q => {
    const variante = q.raspunsuri.map((text, i) => ({ text, i }));
    // variantele de o singură literă (A-E) nu se amestecă niciodată
    const literele = q.raspunsuri.every(t => t.length === 1);
    return {
      ...q,
      opt: ($("shuffle-a").checked && !literele) ? shuffle(variante) : variante
    };
  });

  test = {
    intrebari: alese,
    alegeri: new Array(alese.length).fill(null), // indexul în q.opt
    index: 0,
    mod: document.querySelector('input[name="mode"]:checked').value
  };
  show("test");
  renderQuestion();
};

const etichetaNext = () => test.index === test.intrebari.length - 1 ? "Vezi rezultatul" : "Următoarea";
const selectate = () => test.alegeri[test.index] || [];

function renderQuestion() {
  const q = test.intrebari[test.index];
  const total = test.intrebari.length;
  test.checked = false;
  $("progress-text").textContent = `Întrebarea ${test.index + 1} din ${total}`;
  $("bar").style.width = `${(test.index / total) * 100}%`;
  $("q-chapter").textContent = q.multi ? "Alege toate răspunsurile corecte" : "";
  $("q-text").textContent = q.text;
  const im = $("q-img");
  if (q.imagine) { im.src = q.imagine; im.hidden = false; }
  else { im.hidden = true; im.removeAttribute("src"); }
  $("feedback").textContent = "";
  $("feedback").className = "";
  $("q-nr").textContent = "";
  $("next").hidden = true;
  $("next").textContent = etichetaNext();

  $("options").innerHTML = q.opt.map((o, k) =>
    `<button class="option" data-k="${k}">${esc(o.text)}</button>`).join("");
  document.querySelectorAll(".option").forEach(b => b.onclick = () => choose(parseInt(b.dataset.k, 10)));
  const sel = selectate();
  if (sel.length) {
    document.querySelectorAll(".option").forEach((b, i) => b.classList.toggle("selected", sel.includes(i)));
    $("next").hidden = false;
  }
}

function choose(k) {
  if (test.checked) return;
  const q = test.intrebari[test.index];
  if (q.multi) {
    const s = new Set(selectate());
    s.has(k) ? s.delete(k) : s.add(k);
    test.alegeri[test.index] = [...s];
  } else {
    test.alegeri[test.index] = [k];
  }
  const sel = selectate();
  document.querySelectorAll(".option").forEach((b, i) => b.classList.toggle("selected", sel.includes(i)));
  $("next").hidden = sel.length === 0;
  const imediat = test.mod === "imediat";
  $("next").textContent = (imediat && q.multi) ? "Verifică" : etichetaNext();
  if (imediat && !q.multi) reveal(q);
}

function reveal(q) {
  test.checked = true;
  const sel = selectate();
  document.querySelectorAll(".option").forEach((b, i) => {
    b.disabled = true;
    b.classList.remove("selected");
    const corect = q.corecte.includes(q.opt[i].i);
    if (corect) b.classList.add("correct");
    if (corect && !sel.includes(i)) b.classList.add("missed"); // corect, dar nebifat
    if (!corect && sel.includes(i)) b.classList.add("wrong");
  });
  const p = scor(q, sel);
if (p === 1) {
  $("feedback").textContent = "Corect.";
  $("feedback").className = "ok";
} else if (p > 0) {
  $("feedback").textContent = `Parțial corect (${fmt(p)} din 1 punct)`;
  $("feedback").className = "partial";
} else {
  $("feedback").textContent = "Greșit";
  $("feedback").className = "bad";
}
  $("q-nr").textContent = `Grila nr. ${q.nr} (${q.capNume})`;
  $("next").hidden = false;
  $("next").textContent = etichetaNext();
}

$("next").onclick = () => {
  const q = test.intrebari[test.index];
  if (test.mod === "imediat" && q.multi && !test.checked) return reveal(q);
  if (test.index < test.intrebari.length - 1) {
    test.index++;
    renderQuestion();
  } else {
    finish();
  }
};

// ---------- 3. Rezultate ----------
function finish() {
  if (test.reluat) localStorage.removeItem(KEY_IN_CURS);
  const istoric = load(KEY_ISTORIC, []);
  const ts = Date.now();
  const rezultate = test.intrebari.map((q, idx) => {
    const alese = test.alegeri[idx].map(k => q.opt[k]);
    const p = scor(q, test.alegeri[idx]);
    const ok = p === 1;
    istoric.push({ qid: q.id, cap: q.cap, ok, scor: p, ts, alese: alese.map(o => o.i), ordine: q.opt.map(o => o.i) });
    return { q, alese, ok, p };
  });
  save(KEY_ISTORIC, istoric);

  const puncte = rezultate.reduce((sum, r) => sum + r.p, 0);
  const total = rezultate.length;
  $("score").textContent = `Scor: ${fmt(puncte)} / ${total} (${Math.round(puncte / total * 100)}%)`;

  // pe capitole
  const perCap = {};
  rezultate.forEach(r => {
    perCap[r.q.cap] ??= { ok: 0, total: 0 };
    perCap[r.q.cap].total++;
    perCap[r.q.cap].ok += r.p;
  });
  $("chapter-scores").innerHTML = Object.entries(perCap).map(([id, s]) =>
    `<div class="row"><span>${esc(numeCap[id])}</span><span>${fmt(s.ok)} / ${s.total}</span></div>`).join("");

  // greșite
  const gresite = rezultate.filter(r => !r.ok);
  const coment = load(KEY_COMENT, {});
  $("wrong-list").innerHTML = gresite.length ? `
  <p class="muted">Verde = corect · verde punctat = corect, dar nebifat · roșu = bifat greșit</p>` +
  gresite.map(r => `
    <div class="card">
      <p class="muted">${esc(r.q.capNume)} · grila nr. ${r.q.nr}</p>
      <p><strong>${esc(r.q.text)}</strong></p>
      ${imgHTML(r.q)}
      ${reviewHTML(r.q, r.q.opt.map(o => o.i), r.alese.map(o => o.i))}
      ${r.p > 0 ? `<p class="partial">Punctaj parțial: ${fmt(r.p)} din 1</p>` : ""}
      <textarea data-qid="${esc(r.q.id)}" placeholder="Comentariu (de ce ai greșit?)">${esc(coment[r.q.id] || "")}</textarea>
    </div>`).join("")
  : `<p>Nicio greșeală. Esti boss de boss!!</p>`;
   bindComments();
  show("results");
}


function bindComments() {
  document.querySelectorAll("textarea[data-qid]").forEach(t => {
    t.oninput = () => {
      const c = load(KEY_COMENT, {});
      if (t.value.trim()) c[t.dataset.qid] = t.value; else delete c[t.dataset.qid];
      save(KEY_COMENT, c);
    };
  });
}

$("again").onclick = () => { renderSetup(); show("setup"); };

// rezumat pe capitole: "Cap 3: 1->5 x2; 6->100; 121, 155, 167"
function resumatLinii(rows) {
  const perCap = {};
  rows.forEach(r => {
    const q = dupaId[r.qid];
    if (!q) return;
    const m = (perCap[q.cap] ??= {});
    m[q.nr] = (m[q.nr] || 0) + 1;
  });
  return Object.keys(perCap)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(cap => {
      const m = perCap[cap];
      const nrs = Object.keys(m).map(Number).sort((a, b) => a - b);
      const intervale = [], singure = {};
      let i = 0;
      while (i < nrs.length) {
        let j = i;
        while (j + 1 < nrs.length && nrs[j + 1] === nrs[j] + 1 && m[nrs[j + 1]] === m[nrs[i]]) j++;
        const c = m[nrs[i]];
        if (j > i) intervale.push(`${nrs[i]}->${nrs[j]}${c > 1 ? ` x${c}` : ""}`);
        else (singure[c] ??= []).push(nrs[i]);
        i = j + 1;
      }
      const sing = Object.entries(singure).map(([c, l]) => l.join(", ") + (c > 1 ? ` x${c}` : ""));
      return `${cap.replace("cap", "Cap ")}: ${[...intervale, ...sing].join("; ")}`;
    });
}

function resumatHTML(rows) {
  return `<h3>Grile făcute</h3><div class="resumat">${resumatLinii(rows).map(esc).join("<br>")}</div>`;
}

// foaia (numere + litere + semn) pentru o listă de încercări
function foaieHTML(rows, numerotare) {
  return rows.map((r, k) => {
    const q = dupaId[r.qid];
    const sc = r.scor ?? (r.ok ? 1 : 0);
    const semn = sc === 1 ? "✓" : sc > 0 ? "½" : "✗";
    const cls = sc === 1 ? "ok" : sc > 0 ? "partial" : "bad";
    const eticheta = numerotare === "grila"
      ? `<span class="fnr">${q.nr}.</span>`
      : `<span class="fnr">${k + 1}.</span><span class="fq">${esc(q.cap.replace("cap", "C"))}·${q.nr}</span>`;
    return `<div class="frow">${eticheta}
      <span class="fl">${literePentruHTML(r)}</span>
      <span class="fm ${cls}">${semn}</span></div>`;
  }).join("");
}

// doar întrebările greșite (total sau parțial), desfășurabile
function greseliHTML(rows) {
  const coment = load(KEY_COMENT, {});
  const gresite = rows.filter(r => (r.scor ?? (r.ok ? 1 : 0)) < 1);
  if (!gresite.length) return `<p class="ok">Nicio greșeală.</p>`;
  return gresite.map(r => {
    const q = dupaId[r.qid];
    const sc = r.scor ?? (r.ok ? 1 : 0);
    const cls = sc > 0 ? "partial" : "bad";
    const semn = sc > 0 ? "½" : "✗";
    const txt = sc > 0 ? `Parțial (${fmt(sc)} din 1)` : "Greșit";
    return `<details class="qd">
      <summary>
        <span class="qn">${esc(q.cap.replace("cap", "C"))}·${q.nr}</span>
        <span class="qt">${esc(q.text)}</span>
        <span class="qs ${cls}">${semn}</span>
      </summary>
      <p class="muted">${esc(q.capNume)}</p>
      ${imgHTML(q)}
      ${reviewHTML(q, r.ordine || q.raspunsuri.map((_, i) => i), r.alese)}
      <p class="${cls}">${txt}</p>
      <textarea data-qid="${esc(q.id)}" placeholder="Comentariu">${esc(coment[q.id] || "")}</textarea>
    </details>`;
  }).join("");
}

// teste bifate pentru foaia combinată (ts-ul testului, ca text)
const testeBifate = new Set();

// rândurile unui test, sortate ca în foaie
function randuriTest(ts) {
  return load(KEY_ISTORIC, [])
    .filter(r => String(r.ts) === String(ts) && dupaId[r.qid])
    .sort((a, b) => cmpIndex(dupaId[a.qid], dupaId[b.qid]));
}

// generează foaia ca imagine PNG și o descarcă direct (fără biblioteci)
function printFoaie(titlu, rows, numerotare) {
  const COLS = 3, W = 1020, M = 30, CW = (W - 2 * M) / COLS, RH = 30, S = 2;
  const FONT = "system-ui, 'Segoe UI', sans-serif";

  // rezumatul, împărțit pe rânduri dacă e prea lung
  const mc = document.createElement("canvas").getContext("2d");
  mc.font = `bold 15px ${FONT}`;
  const linii = [];
  resumatLinii(rows).forEach(t => {
    let cur = "";
    t.split(" ").forEach(w => {
      const test = cur ? cur + " " + w : w;
      if (cur && mc.measureText(test).width > W - 2 * M) { linii.push(cur); cur = "    " + w; }
      else cur = test;
    });
    linii.push(cur);
  });

  const TOP = 94 + linii.length * 22 + 8;
  const per = Math.ceil(rows.length / COLS);
  const H = TOP + per * RH + M;

  const c = document.createElement("canvas");
  c.width = W * S; c.height = H * S;
  const g = c.getContext("2d");
  g.scale(S, S);
  g.fillStyle = "#fff"; g.fillRect(0, 0, W, H);

  const puncte = rows.reduce((s, r) => s + (r.scor ?? (r.ok ? 1 : 0)), 0);
  const p = Math.round(puncte / rows.length * 100);

  g.fillStyle = "#000"; g.font = `bold 22px ${FONT}`;
  g.fillText(titlu, M, 38);
  g.font = `16px ${FONT}`;
  g.fillText(`${fmt(puncte)} / ${rows.length} puncte (${p}%)`, M, 66);
  g.font = `bold 15px ${FONT}`;
  linii.forEach((t, i) => g.fillText(t, M, 94 + i * 22));

  rows.forEach((r, k) => {
    const q = dupaId[r.qid];
    const col = Math.floor(k / per), i = k % per;
    const x0 = M + col * CW, y = TOP + i * RH + 20;
    const sc = r.scor ?? (r.ok ? 1 : 0);

    // numărul
    g.font = `15px ${FONT}`; g.fillStyle = "#666";
    g.fillText(numerotare === "grila" ? `${q.nr}.` : `${k + 1}. ${q.cap.replace("cap", "C")}·${q.nr}`, x0, y);

    // literele
    let x = x0 + (numerotare === "grila" ? 42 : 105);
    const ord = r.ordine || q.raspunsuri.map((_, idx) => idx);
    const alese = r.alese || [];
    const parti = [];
    ord.forEach((idx, kk) => {
      const corect = q.corecte.includes(idx), ales = alese.includes(idx);
      if (ales && corect) parti.push({ t: LITERE[kk], tip: "ok" });
      else if (ales) parti.push({ t: LITERE[kk], tip: "bad" });
      else if (corect) parti.push({ t: LITERE[kk], tip: "miss" });
    });
    if (!parti.length) parti.push({ t: "—", tip: "ok" });

    parti.forEach((pt, j) => {
      if (pt.tip === "bad") { g.font = `bold 17px ${FONT}`; g.fillStyle = "#b3261e"; }
      else if (pt.tip === "miss") { g.font = `italic 17px ${FONT}`; g.fillStyle = "#000"; }
      else { g.font = `17px ${FONT}`; g.fillStyle = "#000"; }
      g.fillText(pt.t, x, y);
      const w = g.measureText(pt.t).width;
      if (pt.tip === "miss") {
        g.strokeStyle = "#000"; g.lineWidth = 1; g.setLineDash([2, 2]);
        g.beginPath(); g.moveTo(x, y + 3); g.lineTo(x + w, y + 3); g.stroke();
        g.setLineDash([]);
      }
      x += w;
      if (j < parti.length - 1) {
        g.font = `17px ${FONT}`; g.fillStyle = "#000";
        g.fillText(", ", x, y);
        x += g.measureText(", ").width;
      }
    });

    // verdict
    g.font = `bold 18px ${FONT}`; g.textAlign = "right";
    if (sc === 1) { g.fillStyle = "#1f7a3d"; g.fillText("✓", x0 + CW - 16, y); }
    else if (sc > 0) { g.fillStyle = "#8a5200"; g.fillText("½", x0 + CW - 16, y); }
    else { g.fillStyle = "#b3261e"; g.fillText("✗", x0 + CW - 16, y); }
    g.textAlign = "left";

    // linie sub rând
    g.strokeStyle = "#ddd"; g.lineWidth = 1;
    g.beginPath(); g.moveTo(x0, y + 7); g.lineTo(x0 + CW - 14, y + 7); g.stroke();
  });

  c.toBlob(blob => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    const nume = titlu.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\-]+/g, "_").replace(/^_+|_+$/g, "");
    a.download = (nume || "foaie") + ".png";
    a.click();
    URL.revokeObjectURL(a.href);
  });
}

function renderCombinat() {
  const box = $("stats-combined");
  if (!testeBifate.size) {
    box.innerHTML = `<p class="muted">Bifează unul sau mai multe teste de mai jos ca să vezi foaia lor combinată.</p>`;
    return;
  }
  const istoric = load(KEY_ISTORIC, []);
  const tsuri = [...testeBifate].sort((a, b) => Number(a) - Number(b));

  const rows = [];
  tsuri.forEach(ts => {
    istoric
      .filter(r => String(r.ts) === ts && dupaId[r.qid])
      .sort((a, b) => cmpIndex(dupaId[a.qid], dupaId[b.qid]))
      .forEach(r => rows.push(r));
  });

  const puncte = rows.reduce((s, r) => s + (r.scor ?? (r.ok ? 1 : 0)), 0);
  const p = Math.round(puncte / rows.length * 100);

  box.innerHTML = `
    <div class="card">
      <p><strong>${tsuri.length} teste bifate · ${fmt(puncte)} / ${rows.length} (${p}%)</strong></p>
      ${resumatHTML(rows)}
      <h3>Foaie de răspuns</h3>
      <button id="pdf-combinat">Exportă foaia</button>
      <div class="foaie-stat">${foaieHTML(rows, "secventa")}</div>
      <h3>Întrebări greșite</h3>
      <p class="muted">Apasă pe o întrebare ca să vezi variantele.</p>
      ${greseliHTML(rows)}
    </div>`;
    $("pdf-combinat").onclick = () =>
    printFoaie(`Foaie de răspuns · ${tsuri.length} teste`, rows, "secventa");
  bindComments();
}

// statisticile pe teste
function renderTests() {
  const istoric = load(KEY_ISTORIC, []);
  const grupe = {};
  istoric.forEach(r => (grupe[r.ts] ??= []).push(r));
  const teste = Object.entries(grupe).sort((a, b) => b[0] - a[0]); // cele mai noi primele
  const coment = load(KEY_COMENT, {});

  $("stats-tests").innerHTML = teste.length ? teste.map(([ts, rows], n) => {
    const puncte = rows.reduce((s, r) => s + (r.scor ?? (r.ok ? 1 : 0)), 0);
    const p = Math.round(puncte / rows.length * 100);
    const data = new Date(Number(ts)).toLocaleString("ro-RO");
    const caps = [...new Set(rows.map(r => numeCap[r.cap] || r.cap))].join(", ");
        const sortate = [...rows]
      .filter(r => dupaId[r.qid])
      .sort((a, b) => cmpIndex(dupaId[a.qid], dupaId[b.qid]));

    const foaie = foaieHTML(sortate, "grila");
    const intrebari = greseliHTML(sortate);

    return `<details class="card">
      <summary><input type="checkbox" class="test-check" data-ts="${ts}" ${testeBifate.has(ts) ? "checked" : ""}> Test ${teste.length - n} · ${esc(data)} · ${fmt(puncte)} / ${rows.length} (${p}%)</summary>
      <p class="muted">${esc(caps)}</p>
      ${resumatHTML(sortate)}
      <h3>Foaie de răspuns</h3>
      <button class="pdf-test" data-ts="${ts}">Exportă foaia</button>
      <div class="foaie-stat">${foaie}</div>
      <h3>Întrebări greșite</h3>
      ${intrebari}
    </details>`;
  }).join("") : `<p class="muted">Niciun test încă.</p>`;
  bindComments();
    document.querySelectorAll(".test-check").forEach(c => {
    c.onclick = (e) => e.stopPropagation(); // să nu desfacă/închidă testul
    c.onchange = () => {
      c.checked ? testeBifate.add(c.dataset.ts) : testeBifate.delete(c.dataset.ts);
      renderCombinat();
    };
  });
    document.querySelectorAll(".pdf-test").forEach(b => {
    b.onclick = () => {
      const rows = randuriTest(b.dataset.ts);
      printFoaie("Foaie de răspuns · " + new Date(Number(b.dataset.ts)).toLocaleString("ro-RO"), rows, "grila");
    };
  });
  renderCombinat();
}

// litere colorate: normal = bifat corect, roșu = bifat greșit, italic punctat = corect dar nebifat
function literePentruHTML(r) {
  const q = dupaId[r.qid];
  if (!q || !r.alese) return "—";
  const ord = r.ordine || q.raspunsuri.map((_, i) => i);
  const parts = [];
  ord.forEach((i, k) => {
    const corect = q.corecte.includes(i);
    const ales = r.alese.includes(i);
    if (ales && corect) parts.push(`<span class="lt">${LITERE[k]}</span>`);
    else if (ales) parts.push(`<span class="lt lt-bad">${LITERE[k]}</span>`);
    else if (corect) parts.push(`<span class="lt lt-miss">${LITERE[k]}</span>`);
  });
  return parts.length ? parts.join(", ") : "—";
}

// ---------- 4. Statistici ----------
function renderStats() {
  renderTests();
  const istoric = load(KEY_ISTORIC, []);
  if (!istoric.length) {
    $("stats-chapters").innerHTML = `<p class="muted">Nu ai încă răspunsuri. Începe un test.</p>`;
    return;
  }
  const perCap = {};
  istoric.forEach(r => {
    perCap[r.cap] ??= { ok: 0, total: 0 };
    perCap[r.cap].total++;
    perCap[r.cap].ok += r.scor ?? (r.ok ? 1 : 0);
  });

  $("stats-chapters").innerHTML = Object.entries(perCap).map(([id, s]) => {
    const p = Math.round(s.ok / s.total * 100);
    return `<div class="row"><span>${esc(numeCap[id] || id)}</span><span>${fmt(s.ok)} / ${s.total} puncte (${p}%)</span></div>
            <div class="progress small"><div style="width:${p}%"></div></div>`;
  }).join("");
}

$("sel-all").onclick = () => {
  document.querySelectorAll(".test-check").forEach(c => { c.checked = true; testeBifate.add(c.dataset.ts); });
  renderCombinat();
};
$("sel-none").onclick = () => {
  document.querySelectorAll(".test-check").forEach(c => { c.checked = false; });
  testeBifate.clear();
  renderCombinat();
};

// ---------- Backup ----------
$("export").onclick = () => {
  const data = { istoric: load(KEY_ISTORIC, []), comentarii: load(KEY_COMENT, {}), inCurs: load(KEY_IN_CURS, null),
  capcane: load("grila_capcane", []), pauzate: load("grila_pauzate", []) };
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
  a.download = "backup-grila.json";
  a.click();
};
$("import").onchange = (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result);
      if (!Array.isArray(d.istoric)) throw new Error();
      save(KEY_ISTORIC, d.istoric);
      save(KEY_COMENT, d.comentarii || {});
      if (d.capcane) save("grila_capcane", d.capcane);
      if (d.pauzate) save("grila_pauzate", d.pauzate);
      if (d.inCurs) save(KEY_IN_CURS, d.inCurs);
      else localStorage.removeItem(KEY_IN_CURS);
      renderStats();
      renderResume();
      alert("Date importate.");
    } catch { alert("Fișier invalid."); }
  };
  r.readAsText(f);
};
$("reset").onclick = () => {
  if (confirm("Sigur ștergi toate statisticile și comentariile?")) {
    localStorage.removeItem(KEY_ISTORIC);
    localStorage.removeItem(KEY_COMENT);
    renderStats();
  }
};

// ---------- Start ----------
renderSetup();
show("setup");
