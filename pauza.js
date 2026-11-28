// Teste puse pe pauză: poți avea mai multe în așteptare.
// Se încarcă DUPĂ app.js și foaie.js și refolosește funcțiile lor.
(() => {
  const KEY = "grila_pauzate";
  const citeste = () => load(KEY, []);
  const scrie = (v) => save(KEY, v);

  // ---- lista testelor în așteptare, afișată sus pe ecranul „Test nou” ----
  const box = document.createElement("div");
  box.id = "pauzate";
  $("view-setup").prepend(box);

  const nrRasp = (alegeri) => alegeri.filter(a => a && a.length).length;
  const etichetaMod = (p) => p.sheet ? "foaie de răspuns"
    : p.mod === "imediat" ? "răspuns imediat" : "rezultat la final";

  // testul salvat de vechiul sistem (KEY_IN_CURS) trece automat în lista nouă
  function migreaza() {
    const v = load(KEY_IN_CURS, null);
    if (!v || !Array.isArray(v.intrebari)) return;
    const lista = citeste();
    lista.push({
      id: Date.now(), ts: v.ts || Date.now(), sheet: !!v.foaie, mod: v.mod,
      index: v.index || 0, checked: false,
      intrebari: v.intrebari, alegeri: v.alegeri
    });
    scrie(lista);
    localStorage.removeItem(KEY_IN_CURS);
  }

  function renderPauzate() {
    migreaza();
    const lista = citeste();
    box.innerHTML = lista.length
      ? `<h2>Teste în așteptare</h2>` + lista.map(p => `
        <div class="card">
          <p class="muted">${esc(new Date(p.ts).toLocaleString("ro-RO"))} · ${etichetaMod(p)}</p>
          <p><strong>${nrRasp(p.alegeri)} răspunsuri din ${p.intrebari.length} întrebări</strong></p>
          <button class="primary" data-act="continua" data-id="${p.id}">Continuă</button>
          <button data-act="termina" data-id="${p.id}">Termină acum</button>
          <button class="danger" data-act="sterge" data-id="${p.id}">Șterge</button>
        </div>`).join("")
      : "";
  }

  // la fiecare întoarcere pe ecranul „Test nou” se reface și lista
  const renderSetupOriginal = renderSetup;
  renderSetup = function () {
    renderSetupOriginal();
    renderPauzate();
  };

  // ---- pune testul curent pe pauză ----
  function pauza() {
    if (!test) return;
    const lista = citeste();
    const stare = {
      sheet: !!test.foaie || !$("view-sheet").hidden,
      mod: test.mod,
      index: test.index,
      checked: !!test.checked,
      intrebari: test.intrebari.map(q => ({ id: q.id, ordine: q.opt.map(o => o.i) })),
      alegeri: test.alegeri
    };
    // dacă testul vine dintr-o pauză veche, o actualizăm pe aceea (nu facem alta)
    const i = test.pauzaId ? lista.findIndex(x => x.id === test.pauzaId) : -1;
    if (i >= 0) lista[i] = { ...lista[i], ...stare, ts: Date.now() };
    else lista.push({ id: Date.now(), ts: Date.now(), ...stare });
    scrie(lista);
    test = null;
    renderSetup();
    show("setup");
    window.scrollTo(0, 0);
  }

  // butoane de pauză create din JS
  // butonul care există deja în index.html (id="pause"): îi luăm locul vechiului handler
  $("pause").onclick = pauza;

  // în foaie: preluăm butonul de pauză deja existent (dacă are „pauz” în text), altfel creăm unul
  const bFoaieVechi = [...document.querySelectorAll("#view-sheet button")].find(b => /pauz/i.test(b.textContent));
  if (bFoaieVechi) {
    bFoaieVechi.onclick = pauza;
  } else {
    const bPauzaFoaie = document.createElement("button");
    bPauzaFoaie.textContent = "⏸ Pauză și salvează";
    bPauzaFoaie.onclick = pauza;
    $("sheet-submit").after(bPauzaFoaie);
  }

  // ---- reia un test ----
  function reia(id) {
    const lista = citeste();
    const p = lista.find(x => x.id === id);
    if (!p) return;
    const intrebari = [], alegeri = [];
    p.intrebari.forEach((s, n) => {
      const q = dupaId[s.id];
      if (!q) return; // întrebare ștearsă între timp
      intrebari.push({ ...q, opt: s.ordine.map(i => ({ text: q.raspunsuri[i], i })) });
      alegeri.push(p.alegeri[n]);
    });
    if (!intrebari.length) return;

    // intrarea rămâne în listă; la următoarea pauză se actualizează,
    // iar la terminarea normală a testului se șterge singură
    test = {
      intrebari,
      alegeri,
      index: Math.min(p.index, intrebari.length - 1),
      mod: p.sheet ? "final" : p.mod,
      foaie: !!p.sheet,
      pauzaId: id
    };

    if (p.sheet && window.reiaFoaie) {
      window.reiaFoaie();
    } else if (p.sheet) {
      window.renderSheet();
      alegeri.forEach((a, i) => (a || []).forEach(k => {
        const b = document.querySelector(`.bubble[data-q="${i}"][data-k="${k}"]`);
        if (b) b.classList.add("selected");
      }));
      window.updateCount();
      show("sheet");
    } else {
      show("test");
      renderQuestion();
      const q = test.intrebari[test.index];
      const sel = test.alegeri[test.index] || [];
      if (p.checked) {
        reveal(q); // întrebarea fusese deja verificată
      } else if (sel.length) {
        document.querySelectorAll(".option").forEach((b, i) =>
          b.classList.toggle("selected", sel.includes(i)));
        $("next").hidden = false;
        $("next").textContent = (test.mod === "imediat" && q.multi) ? "Verifică" : etichetaNext();
      }
    }
    window.scrollTo(0, 0);
  }

  // ---- termină un test pus pe pauză: intră în statistici ----
  // Se numără DOAR întrebările la care ai răspuns.
  function termina(id) {
    const lista = citeste();
    const p = lista.find(x => x.id === id);
    if (!p) return;
    const intrebari = [], alegeri = [];
    p.intrebari.forEach((s, n) => {
      const q = dupaId[s.id];
      const a = p.alegeri[n];
      if (!q || !a || !a.length) return;
      intrebari.push({ ...q, opt: s.ordine.map(i => ({ text: q.raspunsuri[i], i })) });
      alegeri.push(a);
    });
    if (!intrebari.length) return alert("Nu ai răspuns la nicio întrebare din acest test.");
    if (!confirm(`Se vor număra doar cele ${intrebari.length} întrebări la care ai răspuns (din ${p.intrebari.length}). Termini testul?`)) return;

    scrie(lista.filter(x => x.id !== id));
    test = { intrebari, alegeri, index: 0, mod: "final" };
    finish(); // același calcul de scor, istoric și rezultate ca în celelalte moduri
  }

  // când un test reluat din pauză se termină normal, intrarea lui dispare din listă
  const finishPrev = finish;
  finish = function () {
    if (test && test.pauzaId) scrie(citeste().filter(x => x.id !== test.pauzaId));
    finishPrev();
  };

  box.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b) return;
    const id = Number(b.dataset.id);
    if (b.dataset.act === "continua") reia(id);
    else if (b.dataset.act === "termina") termina(id);
    else if (b.dataset.act === "sterge") {
      if (!confirm("Ștergi definitiv acest test în așteptare?")) return;
      scrie(citeste().filter(x => x.id !== id));
      renderPauzate();
    }
  });

  renderPauzate();
})();