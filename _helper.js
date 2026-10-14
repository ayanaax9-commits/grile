   window.CAPITOLE = window.CAPITOLE || {};
   window.adaugaIntrebari = function (idCap, numeCap, intrebari) {
     if (!window.CAPITOLE[idCap]) {
       window.CAPITOLE[idCap] = { id: idCap, nume: numeCap, intrebari: [] };
     }
     window.CAPITOLE[idCap].intrebari.push(...intrebari);
   };   