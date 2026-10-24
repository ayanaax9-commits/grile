// Mod "Foaie de răspuns": întrebările în stânga, bulele A-E în dreapta.
// Se încarcă DUPĂ app.js și refolosește funcțiile lui (selectedPool, shuffle, finish etc.).
(() => {
  const LITERE = ["A", "B", "C", "D", "E", "F"];
  const main = document.querySelector("main");

  // ---- secțiunea nouă, creată din JS ----
  const sec = document.createElement("section");
  sec.id = "view-sheet";
  sec.hidden = true;
  sec.innerHTML = `
    <div class="sheet">
      <div id="sheet-questions"></div>
      <aside class="sheet-side">
        <h2>Foaie de răspuns</h2>
        <p id="sheet-count" class="muted"></p>
        <div id="sheet-grid"></div>
        <button id="sheet-submit" class="primary">Predă foaia</button>
      </aside>
    </div>`;
  main.appendChild(sec);

  // înregistrăm ecranul nou și lărgim pagina doar pe el
  views.push("sheet");
  const showOriginal = show;
  show = function (name) {
    showOriginal(name);
    main.classList.toggle("wide", name === "sheet");
  };

  // ---- pornirea testului ----
  const startOriginal = $("start").onclick;
  $("start").onclick = () => {
    const mod = document.querySelector('input[name="mode"]:checked').value;
    if (mod !== "foaie") return startOriginal();

    const { caps, pool } = selectedPool();
    const n = parseInt($("count").value, 10);
    if (!caps.length) return $("setup-error").textContent = "Bifează cel puțin un capitol.";
    if (!pool.length) return $("setup-error").textContent = "Nu există întrebări disponibile cu aceste setări.";
    if (!n || n < 1) return $("setup-error").textContent = "Introdu un număr valid de întrebări.";

    const alese = shuffle(pool).slice(0, n).map(q => ({
      ...q,
      opt: shuffle(q.raspunsuri.map((text, i) => ({ text, i })))
    }));
    test = {
      intrebari: alese,
      alegeri: alese.map(() => []),
      index: 0,
      mod: "final"
    };
    renderSheet();
    show("sheet");
    window.scrollTo(0, 0);
  };

  // ---- desenarea ----
  function renderSheet() {
    $("sheet-questions").innerHTML = test.intrebari.map((q, i) => `
      <div class="card sq" id="sq-${i}">
        <p class="muted">${esc(q.capNume)}</p>
        <p><strong>${i + 1}. ${esc(q.text)}</strong></p>
        ${q.opt.map((o, k) =>
          `<div class="sopt"><b>${LITERE[k]}.</b> ${esc(o.text)}</div>`
        ).join("")}
      </div>`).join("");

    $("sheet-grid").innerHTML = test.intrebari.map((q, i) => `
      <div class="srow">
        <a class="snr" href="#sq-${i}" data-go="${i}">${i + 1}</a>
        ${q.opt.map((o, k) =>
          `<button class="bubble" data-q="${i}" data-k="${k}" aria-label="Întrebarea ${i + 1}, varianta ${LITERE[k]}">${LITERE[k]}</button>`
        ).join("")}
      </div>`).join("");
    updateCount();
  }

  function updateCount() {
    const rasp = test.alegeri.filter(a => a.length).length;
    $("sheet-count").textContent = `Completate: ${rasp} / ${test.intrebari.length}`;
  }

  // ---- click pe bule sau pe variantele din stânga ----
  sec.addEventListener("click", (e) => {
    const go = e.target.closest("[data-go]");
    if (go) {
      e.preventDefault();
      const el = $("sq-" + go.dataset.go);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("flash");
      setTimeout(() => el.classList.remove("flash"), 900);
      return;
    }
    const b = e.target.closest(".bubble");
    if (!b) return;
    const i = parseInt(b.dataset.q, 10);
    const k = parseInt(b.dataset.k, 10);
    const s = new Set(test.alegeri[i]);
    s.has(k) ? s.delete(k) : s.add(k);
    test.alegeri[i] = [...s];
    sec.querySelectorAll(`.bubble[data-q="${i}"]`).forEach(el =>
      el.classList.toggle("selected", s.has(parseInt(el.dataset.k, 10))));
    updateCount();
  });

  // ---- predarea ----
  $("sheet-submit").onclick = () => {
    const goale = test.alegeri.filter(a => !a.length).length;
    if (goale && !confirm(`Ai ${goale} întrebări fără răspuns (se punctează cu 0). Predai foaia?`)) return;
    finish(); // același calcul de scor, istoric și rezultate ca în celelalte moduri
  };
})();