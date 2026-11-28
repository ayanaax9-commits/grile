// Grile capcană: le marchezi cu ★, le vezi pe capitole și dai teste doar din ele.
// Se încarcă DUPĂ app.js și foaie.js (pauza.js e independent).
(() => {
  const KEY = "grila_capcane"; // [qid, qid, ...]
  const citeste = () => new Set(load(KEY, []));
  const scrie = (set) => save(KEY, [...set]);
  // doar o steluță: plină = marcată, goală = nemarcată
  function stilizeaza(b) {
    const on = citeste().has(b.dataset.mark);
    b.textContent = on ? "★" : "☆";
    b.classList.toggle("on", on);
    b.title = on ? "Grilă capcană (click ca să scoți marcajul)" : "Marchează ca grilă capcană";
    b.setAttribute("aria-label", b.title);
  }

  const main = document.querySelector("main");
  const excluse = new Set(); // grile marcate, dar debifate pentru testul curent

  // ---- ramura nouă din meniu + ecranul ei, create din JS ----
  const nav = document.createElement("button");
  nav.id = "nav-capcane";
  nav.className = "nav";
  nav.textContent = "Grile capcană";
  $("nav-stats").after(nav);

  const sec = document.createElement("section");
  sec.id = "view-capcane";
  sec.hidden = true;
  sec.innerHTML = `
    <h2>Grile capcană</h2>
    <p class="muted">Marchezi o grilă cu ★ în timpul testului sau din lista de greșite. Aici le vezi pe capitole și dai teste doar din ele.</p>
    <div id="cap-list"></div>

    <h2>Test din grilele bifate</h2>
    <p id="cap-count" class="muted"></p>
    <input type="number" id="cap-n" min="1" value="10"> <span class="muted">întrebări</span>

    <h2>Mod de testare</h2>
    <label class="choice"><input type="radio" name="cmode" value="imediat" checked> Aflu imediat dacă am răspuns corect</label>
    <label class="choice"><input type="radio" name="cmode" value="final"> Aflu rezultatul abia la final</label>
    <label class="choice"><input type="radio" name="cmode" value="foaie"> Foaie de răspuns</label>

    <h2>Opțiuni</h2>
    <label class="choice"><input type="checkbox" id="cap-sq" checked> Amestecă ordinea întrebărilor</label>
    <label class="choice"><input type="checkbox" id="cap-sa" checked> Amestecă ordinea variantelor de răspuns</label>

    <p id="cap-error" class="error"></p>
    <button id="cap-start" class="primary">Începe testul</button>`;
  main.appendChild(sec);

  // înregistrăm ecranul și ținem meniul corect
  views.push("capcane");
  const showPrev = show;
  show = function (name) {
    showPrev(name);
    nav.classList.toggle("active", name === "capcane");
    if (name === "capcane") $("nav-setup").classList.remove("active");
  };
  nav.onclick = () => { renderCapcane(); show("capcane"); };

  // ---- butonul ★ în timpul testului (modurile imediat / final) ----
  const bMark = document.createElement("button");
  bMark.className = "mark-btn";

  // stilul steluței: fără casetă, mică, în linie cu textul
  const stil = document.createElement("style");
  stil.textContent = `
    button.mark-btn, button.mark-btn:hover {
      background: none; border: none; box-shadow: none;
      padding: 0 6px 0 0; margin: 0; font-size: 1.3em; line-height: 1;
      color: var(--muted); cursor: pointer; vertical-align: middle; display: inline;
    }
    button.mark-btn.on { color: #e0a800; }
    button.mark-btn:hover { color: #e0a800; }`;
  document.head.appendChild(stil);

  const renderQuestionPrev = renderQuestion;
  renderQuestion = function () {
    renderQuestionPrev();
    const q = test.intrebari[test.index];
    bMark.dataset.mark = q.id;
    stilizeaza(bMark);
    $("q-text").prepend(bMark); // la începutul enunțului (textul se rescrie la fiecare întrebare)
  };

  // ---- butoane ★ injectate automat în foaie, rezultate și istoric ----
  function creeazaButon(id) {
    const b = document.createElement("button");
    b.className = "mark-btn";
    b.dataset.mark = id;
    stilizeaza(b);
    return b;
  }

  function injecteaza() {
    // foaia de răspuns: un buton la finalul fiecărei întrebări
    document.querySelectorAll("#sheet-questions .sq").forEach(card => {
      if (card.querySelector(".mark-btn")) return;
      const q = test && test.intrebari[parseInt(card.id.slice(3), 10)];
      const p = card.querySelector("p strong");
      if (q && p) p.prepend(creeazaButon(q.id));
    });
    // lista de greșite și istoricul testelor: buton deasupra comentariului
    document.querySelectorAll("#wrong-list textarea[data-qid], #stats-tests textarea[data-qid]").forEach(t => {
      const card = t.closest(".card");
      const p = card && card.querySelector("p strong");
      if (!p || p.querySelector(".mark-btn")) return;
      p.prepend(creeazaButon(t.dataset.qid));
    });
  }
  ["sheet-questions", "wrong-list", "stats-tests"].forEach(id =>
    new MutationObserver(injecteaza).observe($(id), { childList: true, subtree: true }));

  // ---- click pe ★ (oriunde ar fi) ----
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".mark-btn");
    if (!b) return;
    const set = citeste();
    const id = b.dataset.mark;
    set.has(id) ? set.delete(id) : set.add(id);
    scrie(set);
    document.querySelectorAll(".mark-btn").forEach(stilizeaza);
    // în ecranul Grile capcană: grila rămâne vizibilă (o poți re-marca), dar apare estompată
    const item = b.closest(".cap-item");
    if (item) item.classList.toggle("scos", !set.has(id));
    if (!sec.hidden) updateCount();
  });

  // ---- lista pe capitole ----
  // Capitolul desfăcut arată doar „Grila N”; click pe grilă o desface cu tot cu steluță.
  const stilLista = document.createElement("style");
  stilLista.textContent = `
    .cap-item { border-top: 1px solid var(--line); padding: 4px 0; }
    .cap-item > summary { display: flex; align-items: center; gap: 8px; font-weight: 400; }
    .cap-item.scos { opacity: .5; }
    .cap-body { padding: 8px 0 4px 4px; }`;
  document.head.appendChild(stilLista);

  function renderCapcane() {
    const marcate = citeste();
    const html = DATE.capitole.map(c => {
      const qs = toate.filter(q => q.cap === c.id && marcate.has(q.id));
      if (!qs.length) return "";
      return `<details class="card">
        <summary>${esc(c.nume)} <span class="muted">(${qs.length})</span></summary>
        <button data-toggle-cap="${esc(c.id)}">Bifează / debifează toate</button>
        ${qs.map(q => `
          <details class="cap-item">
            <summary>
              <input type="checkbox" class="cap-q" value="${esc(q.id)}" ${excluse.has(q.id) ? "" : "checked"} aria-label="Include în test">
              <span>Grila ${q.nr}</span>
            </summary>
            <div class="cap-body">
              <p><strong><button class="mark-btn" data-mark="${esc(q.id)}"></button>${esc(q.text)}</strong></p>
              ${imgHTML(q).replace("<img ", '<img loading="lazy" ')}
              ${reviewHTML(q, q.raspunsuri.map((_, i) => i))}
            </div>
          </details>`).join("")}
      </details>`;
    }).join("");
    $("cap-list").innerHTML = html || `<p class="muted">Nicio grilă marcată încă.</p>`;
    $("cap-list").querySelectorAll(".mark-btn").forEach(stilizeaza);
    updateCount();
  }

  // doar grilele bifate care sunt încă marcate cu ★ intră în test
  const bifate = () => {
    const m = citeste();
    return [...document.querySelectorAll(".cap-q:checked")]
      .map(e => dupaId[e.value]).filter(q => q && m.has(q.id));
  };

  function updateCount() {
    const m = citeste();
    const total = [...document.querySelectorAll(".cap-q")].filter(e => m.has(e.value)).length;
    $("cap-count").textContent = `Bifate: ${bifate().length} din ${total}`;
  }

  $("cap-list").addEventListener("change", (e) => {
    if (!e.target.classList.contains("cap-q")) return;
    e.target.checked ? excluse.delete(e.target.value) : excluse.add(e.target.value);
    updateCount();
  });

  $("cap-list").addEventListener("click", (e) => {
    const tg = e.target.closest("[data-toggle-cap]");
    if (tg) {
      const boxes = [...tg.closest("details").querySelectorAll(".cap-q")];
      const toateBifate = boxes.every(b => b.checked);
      boxes.forEach(b => {
        b.checked = !toateBifate;
        b.checked ? excluse.delete(b.value) : excluse.add(b.value);
      });
      updateCount();
    }
  });

  // ---- pornirea testului din grilele bifate ----
  // Refolosim pornirea existentă (app.js / foaie.js): îi dăm temporar
  // grilele bifate în loc de selecția din „Test nou”.
  $("cap-start").onclick = () => {
    const pool = bifate();
    if (!pool.length) return $("cap-error").textContent = "Bifează cel puțin o grilă.";
    $("cap-error").textContent = "";
    const n = parseInt($("cap-n").value, 10) || pool.length;
    const mod = sec.querySelector('input[name="cmode"]:checked').value;

    // salvăm setările din „Test nou”, ca să nu le stricăm
    const radioVechi = document.querySelector('input[name="mode"]:checked');
    const vechi = {
      count: $("count").value,
      sq: $("shuffle-q").checked,
      sa: $("shuffle-a").checked,
      mod: radioVechi && radioVechi.value
    };
    $("count").value = n;
    $("shuffle-q").checked = $("cap-sq").checked;
    $("shuffle-a").checked = $("cap-sa").checked;
    document.querySelector(`input[name="mode"][value="${mod}"]`).checked = true;

    const selectedPoolVechi = selectedPool;
    selectedPool = () => ({ caps: ["capcane"], pool });
    try {
      $("start").click();
    } finally {
      selectedPool = selectedPoolVechi;
      $("count").value = vechi.count;
      $("shuffle-q").checked = vechi.sq;
      $("shuffle-a").checked = vechi.sa;
      if (vechi.mod) document.querySelector(`input[name="mode"][value="${vechi.mod}"]`).checked = true;
    }
  };
})();