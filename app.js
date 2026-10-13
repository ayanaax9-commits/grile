// ---------- Utilitare ----------
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Fisher-Yates
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- Date salvate în browser ----------
const KEY_ISTORIC = "grila_istoric";    // [{qid, cap, ok, ts}]
const KEY_COMENT  = "grila_comentarii"; // {qid: "text"}
function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { alert("Nu am putut salva datele în browser."); }
}

// ---------- Index întrebări ----------
const toate = [];       // toate întrebările, cu capitolul atașat
const dupaId = {};
DATE.capitole.forEach(c => c.intrebari.forEach(q => {
  const item = { ...q, cap: c.id, capNume: c.nume, multi: Array.isArray(q.corect), corecte: [].concat(q.corect) };
  toate.push(item);
  dupaId[q.id] = item;
}));
const numeCap = Object.fromEntries(DATE.capitole.map(c => [c.id, c.nume]));
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
  document.querySelectorAll(".cap-check, #only-wrong").forEach(el => el.onchange = updateAvailable);
  updateAvailable();
}

function selectedPool() {
  const caps = [...document.querySelectorAll(".cap-check:checked")].map(e => e.value);
  let pool = toate.filter(q => caps.includes(q.cap));
  if ($("only-wrong").checked) {
    const gresite = greseliRecente();
    pool = pool.filter(q => gresite.has(q.id));
  }
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

  const alese = shuffle(pool).slice(0, n).map(q => ({
    ...q,
    // variantele amestecate; păstrăm indexul original ca să știm care e cea corectă
    opt: shuffle(q.raspunsuri.map((text, i) => ({ text, i })))
  }));
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
  $("q-chapter").textContent = q.capNume + (q.multi ? " (alege toate răspunsurile corecte)" : "");
  $("q-text").textContent = q.text;
  $("feedback").textContent = "";
  $("feedback").className = "";
  $("next").hidden = true;
  $("next").textContent = etichetaNext();

  $("options").innerHTML = q.opt.map((o, k) =>
    `<button class="option" data-k="${k}">${esc(o.text)}</button>`).join("");
  document.querySelectorAll(".option").forEach(b => b.onclick = () => choose(parseInt(b.dataset.k, 10)));
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
    $("feedback").textContent = `Parțial corect: ${fmt(p)} din 1 punct. Răspunsuri corecte: ${textCorecte(q)}`;
    $("feedback").className = "partial";
  } else {
    $("feedback").textContent = `Greșit. Răspuns corect: ${textCorecte(q)}`;
    $("feedback").className = "bad";
  }
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
  const istoric = load(KEY_ISTORIC, []);
  const ts = Date.now();
  const rezultate = test.intrebari.map((q, idx) => {
    const alese = test.alegeri[idx].map(k => q.opt[k]);
    const p = scor(q, test.alegeri[idx]);
    const ok = p === 1;
    istoric.push({ qid: q.id, cap: q.cap, ok, scor: p, ts });
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
  $("wrong-list").innerHTML = gresite.length ? gresite.map(r => `
    <div class="card">
      <p class="muted">${esc(r.q.capNume)}</p>
      <p><strong>${esc(r.q.text)}</strong></p>
      <p class="bad">Răspunsul tău: ${esc(r.alese.map(o => o.text).join(', '))}</p>
      ${r.p > 0 ? `<p class="partial">Punctaj parțial: ${fmt(r.p)} din 1</p>` : ""}
      <p class="ok">Răspuns corect: ${esc(textCorecte(r.q))}</p>
      <textarea data-qid="${esc(r.q.id)}" placeholder="Comentariu (de ce ai greșit?)">${esc(coment[r.q.id] || "")}</textarea>
    </div>`).join("") : `<p>Nicio greșeală. Bravo!</p>`;
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

// ---------- 4. Statistici ----------
function renderStats() {
  const istoric = load(KEY_ISTORIC, []);
  if (!istoric.length) {
    $("stats-chapters").innerHTML = `<p class="muted">Nu ai încă răspunsuri. Începe un test.</p>`;
    $("stats-wrong").innerHTML = "";
    return;
  }
  const perCap = {}, perQ = {};
  istoric.forEach(r => {
    perCap[r.cap] ??= { ok: 0, total: 0 };
    perCap[r.cap].total++;
    perCap[r.cap].ok += r.scor ?? (r.ok ? 1 : 0); // intrările vechi nu au "scor"
    perQ[r.qid] ??= { gresit: 0, total: 0 };
    perQ[r.qid].total++;
    if (!r.ok) perQ[r.qid].gresit++;
  });

  $("stats-chapters").innerHTML = Object.entries(perCap).map(([id, s]) => {
    const p = Math.round(s.ok / s.total * 100);
    return `<div class="row"><span>${esc(numeCap[id] || id)}</span><span>${fmt(s.ok)} / ${s.total} puncte (${p}%)</span></div>
            <div class="progress small"><div style="width:${p}%"></div></div>`;
  }).join("");

  const coment = load(KEY_COMENT, {});
  const top = Object.entries(perQ).filter(([, s]) => s.gresit > 0)
    .sort((a, b) => b[1].gresit - a[1].gresit).slice(0, 20);
  $("stats-wrong").innerHTML = top.length ? top.map(([id, s]) => {
    const q = dupaId[id];
    if (!q) return "";
    return `<div class="card">
      <p class="muted">${esc(q.capNume)} · răspuns incomplet sau greșit de ${s.gresit} ori din ${s.total}</p>
      <p><strong>${esc(q.text)}</strong></p>
      <p class="ok">Răspuns corect: ${esc(textCorecte(q))}</p>
      <textarea data-qid="${esc(id)}" placeholder="Comentariu">${esc(coment[id] || "")}</textarea>
    </div>`;
  }).join("") : `<p class="muted">Nicio greșeală încă.</p>`;
  bindComments();
}

// ---------- Backup ----------
$("export").onclick = () => {
  const data = { istoric: load(KEY_ISTORIC, []), comentarii: load(KEY_COMENT, {}) };
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
      renderStats();
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
