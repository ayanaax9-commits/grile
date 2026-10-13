// Aici adaugi întrebările tale.
// "corect" = poziția răspunsului corect în lista "raspunsuri", începând de la 0.
//   - un singur răspuns corect:        corect: 2
//   - mai multe răspunsuri corecte:    corect: [0, 2]   (punctaj parțial dacă alegi doar o parte din ele, dar 0 dacă alegi și un răspuns greșit)
// Fiecare întrebare trebuie să aibă un "id" unic (nu-l schimba după ce ai început să dai teste,
// pe el se leagă statisticile și comentariile).
const DATE = {
  capitole: [
    {
      id: "cap1",
      nume: "Introducere în anatomie şi fiziologie.Celulele şi fiziologia celulară",
      intrebari: [
  {
    "id": "cap1_1",
    "text": "Alegeți afirmațile false dintre cele de mai jos:",
    "raspunsuri": [
      "Pentru a înțelege corpul uman este esențială cunoaşterea anatomiei, a fiziologiei şi a subdiviziunilor acestora",
      "Teoria celulară reprezintă o subdiviziune a anatomiei macroscopice",
      "Anatomia macroscopică studiază acele structuri ale corpului care sunt vizibile fără ajutorul microscopului (optic sau electronic)",
      "Studiul celulelor şi al funcțiilor acestora se numeşte artrologie",
      "Anatomia dezvoltării se ocupă cu dezvoltarea individului de la stadiul de ou fecundatpână la cel de organism adult"
    ],
    "corect": [1, 3]
  },
  {
    "id": "cap1_2",
    "text": "Selectați asocierile corecte:",
    "raspunsuri": [
      "Citologia - studiul celulelor, inclusiv al funcțiilor acestora",
      "Histologia - studiul dezvoltării individului de la stadiul de ou fecundat până la cel de organism adult",
      "Anatomia macroscopică - studiul acelor structuri ale corpului care sunt vizibile fără microscop",
      "Fiziologia reproducerii - studiul organelor reproducătoare şi al modalităților de reproducere",
      "Neurofiziologie - subdiviziune a anatomiei macroscopice"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_3",
    "text": "Referitor la histologie, sunt false următoarele afirmații:",
    "raspunsuri": [
      "Reprezintă studiul structurilor corpului, cu ajutorul unei lupe sau cu ochiul liber",
      "Se ocupă cu studiul perioadei embrionare (primele patru luni de dezvoltare intrauterină)",
      "Realizează studiul structurilor corpului cu ajutorul unui microscop",
      "Este o subdiviziune a anatomiei, denumită şi anatomie microscopică",
      "Descrie planurile care traversează corpul uman, oferind puncte de reper pentru organele acestuia"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_4",
    "text": "Selectați afirmațiile adevărate referitoare la subdiviziuni ale unor știinţe care studiază corpul uman:",
    "raspunsuri": [
      "Citologia este una dintre ramurile fiziologiei şi reprezintă studiul celulelor",
      "Fiziologia renală este o subdiviziune a histologiei şi studiază sistemul excretor",
      "Ramura anatomiei care studiază articulațiile se numeşte artrologie",
      "al Anatomia reproducerii reprezintă studiul organelor reproducătoare (mai puțin modalităților de reproducere)",
      "Neurofiziologia studiază funcţiile sistemului nervos"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_5",
    "text": "Selectați asocierile greșite privind componentele majore şi rolul fiziologic sistemelor de organe:",
    "raspunsuri": [
      "al A. Scheletul - oase, tendoane, muşchi striați şi netezi - nu contribuie la protecția corpului, doar la susținerea acestuia",
      "B. Tubul digestiv - cavitate orală, glande salivare, esofag, stomac, intestin, ficat, pancreas - sinteza alimentelor şi absorbția nutrienților insolubili din hrana ingerată",
      "С. Sistemul urinar - rinichi, vezică urinară şi căi urinare asociate - îndepărtează produşii de catabolism din sânge",
      "D. Sistemul tegumentar - piele, păr, unghii - rol metabolic în sinteza vitaminelor din grupul B",
      "E. Sistemul endocrin - hipofiza, glandele suprarenale, tiroida şi glandele paratiroide - coordonează şi integrează chimic activitățile organismului"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_6",
    "text": "Alegeți dintre cele de mai jos răspunsurile la care ambele afirmații sunt adevărate:",
    "raspunsuri": [
      "Funcția sistemului excretor este obiectul de studiu al fiziologiei renale. Neurofiziologia studiază funcția nervoasă",
      "Funcţiile celulei sunt studiate în cadrul histologiei. Sistemul excretor şi funcţiile sale sunt studiate în cadrul fiziologiei renale",
      "Fiziologia reproducerii studiază sistemul excretor şi funcțiile acestuia. Histologia mai este denumită şi anatomie microscopică",
      "Fiziologia reproducerii studiază organele reproducătoare şi modalităţile de reproducere. Funcţia sistemului nervos este obiectul de studiu al unei ramuri a fiziologiei numită neurofiziologie",
      "Funcțiile corpului uman depind de structura sa. Anatomia are ca subdiviziuni anatomía macroscopică, anatomia microscopică, dar nu şi citologia (considerată subdiviziune a fiziologiei)"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_7",
    "text": "Selectați afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "La cel mai simplu nivel de organizare, organismul este alcătuit din particule electronomicroscopice de materie numite molecule şi macromolecule",
      "Atomii se combină între ei, formând molecule (simple - apa, dioxidul de carbon sau complexe - proteinele)",
      "Dintre moleculele cu importanță redusă pentru corpul uman fac parte apa, oxigenul, dioxidul de carbon şi glucoza",
      "Asocierea mai multor molecule între ele dă naştere următorului nivel de organizare, organul",
      "Celula este unitatea fundamentală a organismelor vii şi reprezintă un nivel inferior de organizare celui tisular (țesutul)"
    ],
    "corect": [1, 4]
  },
  {
    "id": "cap1_8",
    "text": "Alegeți afirmațiile adevărate dintre cele enumerate mai jos:",
    "raspunsuri": [
      "Glucidele, proteinele, lipidele şi apa sunt exemple tipice pentru cel mai simplu nivel de organizare structurală a organismului, în care componentele sunt reprezentate exclusiv de atomi şi de ioni",
      "Glucidele, proteinele şi lipidele sunt molecule organice care intră în alcătuirea corpului uman",
      "La cel mai complex nivel de organizare, corpul uman este compus din celule",
      "Atomii de oxigen, carbon sau azot se regăsesc în corpul uman, în combinații denumite molecule",
      "Celula conține structuri interstițiale cum sunt nucleul, mitocondriile, ribozomii, lizozomii"
    ],
    "corect": [1, 3]
  },
  {
    "id": "cap1_9",
    "text": "Referitor la celulă, următoarele afirmații sunt false:",
    "raspunsuri": [
      "Unitatea fundamentală a organismului uman este celula eucariotă",
      "Celula conține lizozomii - particule electronomicroscopice de materie, implicate în sintezele proteice",
      "În organism, celulele cu structură similară şi care îndeplinesc aceeaşi funcție formează un ţesut",
      "Celulele musculare striate scheletice, cele musculare striate cardiace şi cele musculare netede au compoziție şi structură identice",
      "Neuronii, fibrele musculare striate cardiace şi trombocitele sunt exemple de celule care prezintă un singur nucleu, situat periferic"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_10",
    "text": "Selectați afirmațiile false cu privire la țesuturi:",
    "raspunsuri": [
      "Un grup de celule diferite ca structură şi organizare vor avea întotdeauna aceeaşi funcţie şi vor forma un ţesut",
      "Tesutul reprezintă un grup de celule cu structură similară, care funcționează împreună și îndeplinesc aceeaşi funcţie",
      "Organismul uman include patru tipuri principale de țesuturi: țesutul conjunctiv propriuzis, ţesutul muscular neted, țesutul epitelial şi țesutul nervos",
      "Un organ este compus din două sau mai multe tipuri diferite de țesuturi",
      "Nivelul de organizare imediat superior țesuturilor este sistemul de organe"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_11",
    "text": "Stabiliți care dintre răspunsurile de mai jos conțin prima și a treia afirmație adevărate, iar cea de a doua falsă:",
    "raspunsuri": [
      "Tipul de țesut din care face parte sângele este țesutul conjunctiv. Ţesutul osos spongios nu aparţine țesuturilor conjunctive. Celulele care protejează neuronii şi aparţin ţesutului nervos sunt denumite celule gliale",
      "Organismul uman cuprinde patru tipuri principale de țesuturi: epitelial, conjunctiv muscular şi nervos. Epidermul din structura pielii este un țesut epitelial. Nivelul de organizare imediat superior celui reprezentat de celulă este țesutul",
      "Un organ funcţionează ca un centru anatomic şi fiziologic specializat pentru o anumită activitate. Intestinul subțire este un organ compus dintr-un singur tip de ţesut. În structura stomacului se regăsesc țesut muscular neted, alături de cel epitelial, conjunctiv şi nervos",
      "Dermul de la nivelul pielii este o varietate de țesut epitelial. Ţesutul conjunctiv include sângele şi țesutul osos. Tesutul muscular striat scheletic nu reprezintă o varietate de țesut conjunctiv",
      "Nivelul de organizare imediat superior țesuturilor este organul. La cel mai simplu nivel, corpul uman este compus din ţesuturi. Celula nervoasă şi cea musculară sunt exemple de celule din organismul uman"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_12",
    "text": "Alegeți afirmațiile false dintre cele enumerate mai jos:",
    "raspunsuri": [
      "Epidermul (care intră în structura tegumentului) reprezintă un tip de țesut epitelial",
      "Sistemele de organe funcționează împreună pentru a forma organismul, cel mai înalt nivel de organizare",
      "Celulele aceluiaşi ţesut au structură şi organizare similară, dar îndeplinesc funcții diferite",
      "Nivelul de organizare imediat superior ţesutului este sistemul de organe, compus din mai multe organe cu funcții complementare",
      "Sistemul de organe este compus din mai multe organe identice, cu funcții complementare"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_13",
    "text": "Selectați enunțurile care prezintă prima afirmaţie adevărată și cea de-a doua falsă:",
    "raspunsuri": [
      "Un organ poate fi alcătuit din două sau mai multe tipuri diferite de țesuturi. Nu se întâlnesc în organism organe cu mai mult de 3 tipuri de ţesuturi în componenţa lor",
      "Stomacul este compus din doar două tipuri principale de țesuturi - epitelial şi conjunctiv. În alcătuirea stomacului se întâlnesc tesut conjunctiv, epitelial, muscular neted şi nervos",
      "Sistemul de organe este format din mai multe organe cu funcții complementare. Organismul are în alcătuirea sa mai multe sisteme de organe",
      "Sistemul muscular include muşchi striați, muşchi netezi şi muşchiul cardiac. Miocardul este o varietate de muşchi neted",
      "Sistemul urinar are ca şi componente rinichii,vezica urinară şi căile urinare asociate. Din asocierea mai multor celule între ele ia naştere nivelul molecular de organizare structurală al organismului"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_14",
    "text": "Care dintre următoarele afirmații referitoare la metabolism nu sunt adevărate?",
    "raspunsuri": [
      "Metabolismul constă în reacții chimice de sinteză şi de degradare, grupate în căi metabolice, care se desfăşoară exclusiv extracelular",
      "O cale metabolică este o secvență de reacții chimice care se desfăşoară în interiorul unei celule",
      "Metabolismul cuprinde catabolismul, care necesită de obicei energie pentru sinteza de materie organică",
      "Catabolismul reprezintă degradarea moleculelor mari, de obicei cu producere de energie",
      "O cale metabolică presupune conlucrarea enzimelor implicate în reacţiile care o compun"
    ],
    "corect": [0, 2]
  },
  {
    "id": "cap1_15",
    "text": "Care dintre următoarele afirmații sunt adevărate?",
    "raspunsuri": [
      "Catabolismul reprezintă sinteza unor macromolecule (glicogen, colagen) din molecule mici (CO2, H2O, glucoză), cu eliberare de energie",
      "Anabolismul reprezintă sinteza unor molecule (glucoza) şi macromolecule (imunoglobuline) şi necesită de obicei energie",
      "O cale metabolică poate include reacții de oxido-reducere catalizate enzimatic",
      "Substanţele care sunt utilizate în metabolism provin exclusiv din procesul de digestie celulară",
      "Componenta metabolismului prin care materia organică este descompusă, de obicei cu eliberare de energie, se numeşte catabolism"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_16",
    "text": "Selectați afirmațiile adevărate referitoare la mişcare:",
    "raspunsuri": [
      "Funcţia de mişcare este asigurată de celulele musculare, prin capacitatea lor de a efectua lucru mecanic şi de a se contracta",
      "Mişcarea care apare la nivelul muşchilor scheletici este mişcarea voluntară",
      "Mişcarea involuntară este asigurată de schelet, care prin oase şi ligamente oferă locuri de ataşare muşchilor striați scheletici",
      "La funcţia de mişcare participă muşchii scheletici, care oferă locuri de ataşare oaselor şi ligamentelor",
      "Mişcarea de tip involuntar este descrisă la muşchiului neted şi la muşchiul striat cardiac"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_17",
    "text": "Alegeți asocierile corecte cu privire la funcţiile corpului:",
    "raspunsuri": [
      "Mişcarea - voluntară sau involuntară - rezultatul contracției fibrelor musculare (striate scheletice, netede, striate cardiace)",
      "Conductibilitatea - proprietatea unor celule de a transmite stimuli - caracteristică pentru celule osoase şi musculare",
      "Conductibilitatea - proprietatea unor celule de a transmite stimuli - caracteristică pentru celule nervoase şi musculare",
      "Reproducerea asexuată - formarea în totalitate a unui nou individ - include spermatozoizii şi ovulele",
      "Reproducerea sexuată - producere de spermatozoizi şi ovule - fecundarea unui ovul de către un spermatozoid - diviziunea oului (zigotului) - dezvoltarea unui nou individ"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_18",
    "text": "Referitor la funcţia de reproducere a organismului, se pot afirma următoarele:",
    "raspunsuri": [
      "Reprezintă capacitatea organismului de a produce în totalitate un nou individ prin diviziunea meiotică a zigotului",
      "Tipul de reproducere prin care rezultă un ou fecundat se numeşte reproducere sexuată",
      "Reproducerea ca funcție importantă a organismelor vii, defineşte capacitatea de a procrea, dar nu şi formarea de noi celule în scopul reparării sau înlocuirii",
      "Diviziunea unei singure celule cu formarea a două celule fiice identice se numeşte reproducere asexuată şi are loc prin mitoză",
      "Reproducerea asexuată asigură procesele de creştere şi reparaţie"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_19",
    "text": "Care dintre următoarele enunțuri privind homeostazia conțin prima afirmație adevărată şi a doua falsă?",
    "raspunsuri": [
      "Totalitatea proceselor care contribuie la menținerea parametrilor mediului intern al organismului în limite normale se numeşte homeostazie. Homeostazia nu este compatibilă cu satisfacerea nevoilor nutritive şi energetice ale celulelor organismului",
      "Organismul nu se află în homeostazie atunci când nevoile celulelor sale sunt satisfăcute. Toate sistemele de organe sunt implicate în menţinerea homeostaziei",
      "Menținerea homeostaziei se realizează prin mecanismele de feed-back, prin care organismul trimite informații înapoi la sistem, pentru a induce un răspuns. Expulzia fetală şi a placentei reprezintă un exemplu de feed-back negativ",
      "În menținerea homeostaziei este implicat doar sistemul nervos. În homeostazie, parametrii mediului intern al organismului sunt menținuți în limitele normale, chiar dacă mediul înconjurător se modifică",
      "Diferite afecțiuni (boli), căldura excesivă, durerea sau absența oxigenului din sânge determină dezechilibre ale mediului intern al organismului. Valoarea de referinţă a unui mecanism de feed-back este reprezentată de dublul valorii normale a unui factor variabil"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_20",
    "text": "Referitor la homeostazie, se poate afirma că:",
    "raspunsuri": [
      "La menţinerea ei contribuie toate sistemele de organe",
      "În homeostazie, compoziția fluidelor este menținută constantă doar în condiții de stres (hipoxie, febră)",
      "Deoarece condițiile interne variază în mod constant, organismul este protejat împotriva extremelor prin sisteme de autoreglare, cunoscute ca mecanisme de feed-back",
      "Reprezintă totalitatea proceselor care contribuie la menținerea parametrilor mediului intern al organismului în limite normale, numai dacă mediul înconjurător nu se modifică",
      "Prin intermediul mecanismelor de feed-back, în organism sunt transmise informații de la un receptor la centrul de control, unde stimulul este transformat în răspuns, care apoi este transmis unui efector care va produce răspunsul care să mențină homeostazia"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_21",
    "text": "Alegeţi asocierile corecte cu privire la mecanismele de feed-back care contribuie la menținerea homeostaziei:",
    "raspunsuri": [
      "Feed-back negativ - mecanism de autoreglare prin care, în urma informației primite, scade producția sistemului, acesta revenind la valoarea sa de referință - mecanism care intervine (prin intermediul insulinei) în controlul glicemiei",
      "Glicemie scăzută după ingestia de alimente - eliberare de insulină din celulele insulelor Langerhans pancreatice - favorizarea intrării glucozei în celule - scăderea nivelului glicemiei - scăderea eliberării de insulină - menţinerea homeostaziei (feed-back negativ)",
      "Valoare de referință - valoarea normală a unui factor variabil (temperatura)",
      "Feed-back pozitiv - parte a unui mecanism general de reglare - deviere din ce în ce mai mare de la valoarea de referință - rezultatul este obținerea răspunsului dorit",
      "Feed-back pozitiv - mecanism unic de menținere a homeostaziei - reglare care aduce sistemul la valoarea sa de referință"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_22",
    "text": "Stabiliţi afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Atunci când corpul este în poziție anatomică, el se află în poziție verticală (clinostatism), cu membrele superioare pe lângă corp și palmele orientate anterior",
      "Poziția anatomică a corpului implică poziția verticală (ortostatism) cu membrele superioare pe lângă corp şi palmele orientate spre anterior",
      "În poziție anatomică, corpul prezintă două fețe, una anterioară (ventrală) şi una posterioară (dorsală)",
      "În poziție anatomică, corpul prezintă două feţe, una medială (dreaptă) şi una laterală (stângă)",
      "Termenul „dorsal„ este opus termenului „ventral„ şi este utilizat în terminologia anatomică umană cu semnificația de ,anterior"
    ],
    "corect": [1, 2]
  },
  {
    "id": "cap1_23",
    "text": "Alegeţi succesiunile de afirmații adevărate dintre cele enumerate mai jos:",
    "raspunsuri": [
      "În poziție anatomică, palmele sunt orientate spre lateral. Termenul direcţional folosit pentru a descrie partea din față a corpului, de aceeaşi parte cu abdomenul, este „posterior“",
      "Termenul „ipsilateral“ se referă la structuri aflate de aceeaşi parte a corpului. Termenul „superior“ defineşte poziția direcționată spre cap (cranială)",
      "În locul termenului ,,superior“ se utilizează frecvent „cervical” sau „cranial”. Oprirea unei hemoragii implică un mecanism de feed-back negativ, la fel cu expulzia placentei ulterior expulziei fetale",
      "Termenul ,,posterior“ se referă la partea din spate a corpului, acest termen poate fi înlocuit cu „dorsal“. Supradiafragmatic, în mediastin, esofagul este situat posterior față de trahee",
      "Termenul „caudal“ - alternativă pentru termenul „inferior“, este utilizat şi în anatomia umană. Segmentele colonului pot fi descrise ca „ipsilaterale” dacă ne referim la colonul descendent şi colonul sigmoid sau,„controlaterale” dacă ne referim la colonul ascendent şi colonul descendent"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_24",
    "text": "Care dintre următoarele afirmații privind termenii direcționali sunt false?",
    "raspunsuri": [
      "În nomenclatura anatomică, se consideră că abdomenul (subdiviziunea superioară a cavității abdomino-pelviene) este situat inferior față de torace",
      "Termenul „proximal“ se referă la un punct apropiat de locul unde o extremitate se ataşează de trunchi",
      "Termenul „ipsilateral“ se referă la structuri aflate de partea opusă a corpului",
      "Termenul „controlateral” se referă la structuri aflate de aceeaşi parte a corpului",
      "Termenul „lateral” se referă la o poziție situată pe linia mediană a corpului"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_25",
    "text": "Alegeţi asocierile incorecte cu privire la termenii direcţionali ai corpului:",
    "raspunsuri": [
      "Mâna - proximal față de antebraț - proximal față de braț",
      "Mâna stângă - picior drept - ipsilateral",
      "Mâna dreaptă - picior drept - ipsilateral",
      "Braţ stâng - picior drept - controlateral",
      "Coapsa - distal față de gambă - distal față de picior"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_26",
    "text": "Utilizând termenii direcționali, se poate afirma că:",
    "raspunsuri": [
      "Față de gură, nasul şi ochii sunt situați superior",
      "Faţă de orbită şi ochi, nasul este situat superior, iar bărbia, inferior",
      "Brațul este situat proximal față de antebraț, dar distal în raport cu mâna",
      "Cavitatea toracică este situată superior față de cavitatea abdomino-pelviană, de care este separată prin diafragmă",
      "Muşchii peretelui toracic sunt superficiali în raport cu organele din cavitatea toracică"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_27",
    "text": "Referitor la planurile corpului, se poate afirma că:",
    "raspunsuri": [
      "Planul vertical care împarte corpul într-o parte dreaptă și una stângă, se numeşte plan sagital",
      "Planul oblic care împarte corpul într-o parte anterioară şi una posterioară, este planul frontal",
      "Planul orizontal care împarte corpul într-o parte superioară şi una inferioară, se numeşte plan transversal",
      "Planurile parasagitale divid întotdeauna corpul în două părți egale",
      "Planul mediosagital împarte corpul în două jumătăți (dreaptă şi stângă)"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_28",
    "text": "Selectați afirmațiile adevărate referitoare la planurile corpului:",
    "raspunsuri": [
      "Pot fi descrise ca suprafete drepte imaginare care traversează corpul",
      "Planul mediosagital este un plan vertical care divide corpul în două jumătăți, stângă şi dreaptă",
      "Planul frontal are o direcție verticală și divide corpul într-o parte anterioară şi una ventrală",
      "Planurile traversează corpul uman şi oferă puncte de reper pentru organele acestuia",
      "Planul coronal formează un unghi drept cu planul frontal"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_29",
    "text": "Care dintre următoarele afirmații referitoare la cavitatea dorsală (posterioară) a corpului sunt false?",
    "raspunsuri": [
      "Reprezintă, alături de cea anterioară, principalele cavități ale corpului",
      "Este subîmpărțită în canalul rahidian, care adăposteşte măduva osoasă roşie şi cavitatea craniană, care adăposteşte encefalul",
      "Include cavitatea craniană, care adăposteşte encefalul",
      "Prezintă două subdiviziuni importante, reprezentate de cavitatea toracică şi de cea pelviană",
      "Canalul rahidian, subdiviziune a cavității posterioare a corpului, este delimitat de vertebre (oase neregulate)"
    ],
    "corect": [1, 3]
  },
  {
    "id": "cap1_30",
    "text": "Care dintre următoarele afirmații privind cavitățile și regiunile corpului sunt adevărate?",
    "raspunsuri": [
      "Inima, esofagul, traheea și bronhiile primare sunt localizate în mediastin, supradiafragmatic",
      "Cavitatea abdomino-pelviană este separată de cavitatea toracică prin diafragmă, muşchi respirator, de mari dimensiuni, cu formă de cupolă",
      "Cavitatea abdomino-pelviană este mai des întâlnită sub denumirea de „cavitate retroperitoneală” şi conține organele interne abdominale şi pelviene",
      "Stomacul este situat în subdiviziunea abdominală a cavității abdomino-pelviene",
      "Regiunea ombilicală se află în centrul abdomenului, iar regiunea epigastrică se localizează inferior de aceasta"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_31",
    "text": "Sunt regiuni ale cavitații abdomino-pelviene următoarele:",
    "raspunsuri": [
      "Regiunea hipogastrică (hipogastrul), situată imediat superior de regiunea ombilicală",
      "Regiunile iliace, în număr de două, stângă şi dreaptă",
      "Regiunea ombilicală, situată în centrul abdomenului",
      "Regiunea epigastrică, localizată superior de regiunea ombilicală",
      "Regiunea mediastinală care include cavitatea pericardică"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_32",
    "text": "Alegeţi precizările corecte despre cavități și regiuni ale corpului:",
    "raspunsuri": [
      "La nivelul mediastinului sunt situate toate componentele cavității toracicе",
      "Plămânii (în număr de doi, drept şi stâng) sunt situați în cavitatea toracică, de-o parte şi alta a inimii",
      "Noţiunile de cadrane (superior - drept şi stâng şi inferior - drept şi stâng) sunt curent utilizate în practica clinică",
      "Intersectarea a două linii imaginare, una orizontală şi alta verticală, în centrul cavității abdomino-pelviene are ca rezultat delimitarea a patru cadrane",
      "Canalul rahidian, delimitat de meninge, este parte componentă a cavității posterioare a trunchiului şi conține lichid interstițial"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_33",
    "text": "Stabiliţi afirmațiile adevărate dintre cele enumerate mai jos:",
    "raspunsuri": [
      "Regiunea hipogastrică se află superior față de regiunea ombilicală",
      "Atât hipocondrul stâng, cât şi hipocondrul drept se află medial de regiunea epigastrică",
      "Lateral dreapta față de regiunea ombilicală se află flancul drept",
      "Cele două flancuri (stâng şi drept) încadrează regiunea aflată în centrul abdomenului (regiunea ombilicală)",
      "Hipogastrul este flancat de cele două regiuni iliace, dreaptă şi stângă"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_34",
    "text": "Referitor la membranele cavităților corpului sunt false următoarele afirmaţii:",
    "raspunsuri": [
      "Pereții cavității abdominale şi organele abdominale sunt căptuşite de o membrană fină, alcătuită dintr-o singură foiță, numită membrană bazală",
      "O membrană seroasă este alcătuită din două foițe, care secretă o cantitate mică de lichid seros, cu rol lubrifiant",
      "Foiţele membranelor seroase sunt situate la distanţă mare una de cealaltă, delimitând cavități de dimensiuni considerabile, pline cu lichid seros",
      "Foița viscerală a peritoneului acoperă diverse organe ale cavității abdomino-pelviene",
      "Foița parietală a membranelor seroase înveleşte organele interne (viscerele) şi aderă de suprafața lor"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_35",
    "text": "Următoarele afirmații referitoare la cavitatea abdomino-pelviană sunt adevărate:",
    "raspunsuri": [
      "Face parte din cavitatea ventrală a corpului, alături de cavitatea toracică",
      "Este întâlnită și sub numele de cavitate peritoneală și conține organele interne abdominale şi pelviene",
      "Conţine în cadrul subdiviziunii abdominale ficatul, stomacul, splina şi canalul anal",
      "Este separată de cavitatea toracică printr-un muşchi de mari dimensiuni, în formă de cupolă - diafragma",
      "Nu conţine în cadrul subdiviziunii pelviană, vezica urinară şi rectul"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_36",
    "text": "Alegeți afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "În corpul uman există trei membrane seroase: pleura, pericardul şi peritoneul",
      "Fiecare dintre cele trei membrane seroase are câte două foițe parietale şi una viscerală",
      "Foiţa parietală a peritoneului căptuşeşte cavitatea abdominală şi pelviană",
      "Foița parietală a peritoneului căptuşeşte doar cavitatea abdominală",
      "Spaţiul dintre foițele pleurale se numeşte cavitate pleurală, iar cel dintre foițele pericardice - cavitate pericardică"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_37",
    "text": "Care dintre următoarele afirmații sunt adevărate?",
    "raspunsuri": [
      "La nivelul capului se găsesc mici cavități (cavitatea orală, cavitatea nazală, urechea medie şi orbita)",
      "Cavitatea pericardică adăposteşte inima şi este situată într-o regiune a toracelui denumită mediastin",
      "Cavitatea pleurală este reprezentată de spațiul dintre foița parietală a membranei seroase şi peretele cavității toracice",
      "Fiecare cavitate pleurală este reprezentată de spațiul dintre foița viscerală şi foița parietală a pleurei, membrană seroasă care secretă un lichid cu rol lubrifiant",
      "Cavitatea pericardică se află în afara foiței parietale a pericardului"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_38",
    "text": "Selectați afirmațiile adevărate referitoare la celulele procariote:",
    "raspunsuri": [
      "Pot prezenta doar un singur nucleu, care conţine 46 de cromozomi circulari",
      "Sunt lipsite de nucleu, acesta fiind prezent la celulele eucariote",
      "Se divid prin procesul de mitoză, la fel cu celulele eucariote",
      "Nu se divid prin procesul de mitoză, spre deosebire de celulele eucariote",
      "Bacteriile sunt celule procariote"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_39",
    "text": "Selectați afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Celulele procariote se divid prin procesul de citokineză, numit şi meioză",
      "Celulele eucariote prezintă nucleu şi organite celulare şi se divid prin procesul de mitoză",
      "Celulele procariote (spre exemplu bacteriile) sunt lipsite de nucleu",
      "Plantele, animalele şi oamenii sunt organisme vii formate din celule procariote",
      "Bacteriile aparțin celulelor procariote, iar celulele animale şi cele umane sunt eucariote"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_40",
    "text": "Selectaţi afirmațiile false referitoare la celulele eucariote:",
    "raspunsuri": [
      "Se divid prin procesul de mitoză, proces prin care ADN-ul nuclear al celulei este distribuit în mod egal celor două celule fiice",
      "Prin procesul de diviziune mitotică, ADN-ul nuclear al celulei-mamă este distribuit inegal celor două celule-fiice",
      "Citoplasma (numită şi cromatină) şi membrana plasmatică (numită şi membrană acelulară) fac parte dintre componentele lor de bază",
      "Intră în componența organismelor plantelor, animalelor şi omului",
      "Plantele şi bacteriile sunt alcătuite din celule eucariote, spre deosebire de mamifere, ale căror celule sunt eucromatinice"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_41",
    "text": "Selectați asocierile adevărate referitoare la celulele procariote şi eucariote:",
    "raspunsuri": [
      "Prezenţa citoplasmatică a mitocondriilor şi a ribozomilor - diviziune exclusiv sexuată - celulele eucariote",
      "Incapacitate de a se divide prin mitoză - incapacitate de creştere şi reparare - celulele eucariote",
      "Bacterie - lipsa nucleului - celulă procariotă",
      "Nucleu delimitat de membrană nucleară - prezența cromatinei/cromozomilor - celulă eucariotă",
      "Celulele ţesutului epitelial pavimentos simplu - prezența nucleului cu 46 de cromozomi - celule eucariote"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_42",
    "text": "Selectaţi afirmațiile false referitoare la celule:",
    "raspunsuri": [
      "Celulele eucariote includ celula vegetală, celula animală, celula umană",
      "Spre deosebire de celulele procariote, celulele eucariote nu au nucleu",
      "Celulele procariote se divid prin procesul de mitoză",
      "Celulele eucariote prezintă nucleu cu cromatină/cromozomi şi se divid prin procesul de mitoză",
      "Bacteriile sunt celule eucariote, cu nucleu delimitat de un înveliş nuclear"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_43",
    "text": "Selectaţi afirmațiile adevărate referitoare la citoplasmă:",
    "raspunsuri": [
      "Se mai numeşte sarcoplasmă la celulele musculare",
      "Conţine mai mulţi nucleoli ataşați reticulului endoplasmatic",
      "Conține cel mai mare component celular - nucleul - şi o serie de organite",
      "La nivelul ei au loc procese metabolice cum sunt ciclul Krebs sau lanțul transportor de electroni",
      "Este o substanță cu consistenţa unui gel, fundamentală pentru celulă"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_44",
    "text": "Selectați afirmațiile adevărate referitoare la membrana plasmatică:",
    "raspunsuri": [
      "Este alcătuită din proteine (transmembranare și periferice), fosfolipide dispuse în dublu strat şi colesterol",
      "Proteinele din membrana plasmatică sunt dispuse în două straturi (structură bistratificată)",
      "Lipidele din membrana plasmatică sunt dispuse în două straturi (structură bistratificată)",
      "Are o structură de mozaic fluid, datorită colesterolului care îi creşte fluiditatea şi pare să plutească printre fosfolipide",
      "Are o structură de mozaic fluid datorită proteinelor globulare încorporate în bistratul fosfolipidic şi care par să plutească printre moleculele de lipide"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_45",
    "text": "Selectaţi afirmațiile false referitoare la membrana celulară:",
    "raspunsuri": [
      "Denumită şi membrana plasmatică, delimitează celulele, separându-le de mediul lor extern",
      "Fiind impermeabilă, asigură comunicarea citoplasmei cu mediul extern al celulei",
      "Este compusă în principal din molecule lipidice (colesterol şi fosfolipide) şi proteice",
      "Nu conţine proteine, acestea fiind prezente exclusiv în nucleul celulei",
      "Datorită caracterului hidrofil al proteinelor globulare, are o structură de „sandwich"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_46",
    "text": "Selectați substanțele care intră în alcătuirea membranei plasmatice:",
    "raspunsuri": [
      "Glicogen şi glucoză (aparținând carbohidraţilor)",
      "Colesterol (un sterol de origine animală) şi fosfolipide (dispuse în dublu strat)",
      "Glicolipide şi glicoproteine (cu rol de receptori pentru diverse molecule, precum hormonii)",
      "Enzime cu structură glicoproteică (ATP-aza)",
      "Proteine, unele cu rol de enzime, iar altele cu rol de transportori ai moleculelor organice"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_47",
    "text": "Selectați afirmațiile adevărate referitoare la membrana plasmatică:",
    "raspunsuri": [
      "Întreaga grosime a membranei este ocupată de proteinele transmembranare, care proemină pe ambele fețe ale acesteia",
      "Conţine glicerofosfolipide, cu un capăt polarizat, hidrofob (cu fosfor) şi unul nepolarizat, hidrofil (fară fosfor)",
      "Conţine fosfolipide cu un capăt polarizat, hidrofil (conținând fosfor) şi unul nepolarizat, hidrofob (format din lanțuri de acizi graşi)",
      "Conţine proteine periferice, care se extind spre citoplasmă, ocupând întreaga grosime a membranei",
      "Prezintă pe fața ei externă glicolipide şi glicoproteine care permit celulelor să se recunoască între ele"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_48",
    "text": "Selectați afirmațiile adevărate referitoare la compoziția membranei plasmatice:",
    "raspunsuri": [
      "Conţine substanțe lipidice, care includ în molecula lor două regiuni distincte: un capăt hidrofil şi unul hidrofob",
      "Conţine lipide cu fosfor (fosfolipide), dar şi compuşi steroidieni, cum este colesterolul",
      "Nu conţine structuri proteice, cu excepția unor enzime (ATP-sintetaza)",
      "Conţine proteine transmembranare cu funcție de canale pentru transportul unor ioni (canale de Na+ sau de Ca2+)",
      "Conține proteine intramembranare care inhibă remodelarea celulară în timpul contracțiilor celulare"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_49",
    "text": "Fosfolipidele din membrana plasmatică:",
    "raspunsuri": [
      "Au un capăt polarizat, care conține fosfor şi este atras de apă (hidrofil)",
      "Au un capăt nepolarizat, hidrofob, care interacţionează cu alte substanțe nepolarizate dar respinge moleculele de apă",
      "Sunt dispuse în două straturi, cu capetele hidrofile aflate față în față în porțiunea internă a membranei",
      "Datorită proprietăților de hidrosolubilitate, împiedică mărirea suprafeței membranei la fuzionarea acesteia cu veziculele aparatului Golgi",
      "Prezintă proprietăți (tensioactive) care permit membranei să îşi mărească suprafața, atunci când veziculele aparatului Golgi fuzionează cu ea"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_50",
    "text": "Selectați afirmațiile adevărate referitoare la fosfolipidele din structura membranei plasmatice:",
    "raspunsuri": [
      "Capetele polarizate ale moleculelor fosfolipidice din membrana plasmatică intră în contact cu moleculele de apă din mediul intracelular şi din spațiul extracelular",
      "Capetele nepolarizate ale moleculelor fosfolipidelor se află față în față înspre exteriorul membranei celulare şi interacţionează cu moleculele de apă din spațiul extracelular",
      "Capetele nepolarizate ale molcculclor fosfolipidice din membrana plasmatică intră în contact cu moleculele de apă din mediul intracelular",
      "Fosfolipidele membranare sunt responsabile de mărirea suprafeței membranei plasmatice atunci când veziculele aparatului Golgi fuzionează cu ea",
      "Caracterul lor hidrofil se datorează prezenţței lanțurilor de carbon din structura alcoolilor graşi"
    ],
    "corect": [0, 3]
  },
  {
    "id": "cap1_51",
    "text": "Selectați afirmațiile adevărate referitoare la diferitele tipuri de lipide din membrana plasmatică:",
    "raspunsuri": [
      "Capetele nepolarizate ale moleculelor de colesterol se află față în față în porțiunea externă a membranei plasmatice",
      "Capetele nepolarizate ale moleculelor de fosfolipide se află față în față în porțiunea internă a membranei plasmatice",
      "Acele molecule ale stratului lipidic situat spre exterior (spre mediul extracelular) care au ataşate molecule glucidice sunt glicolipide",
      "Unele dintre moleculele stratului lipidic situat spre citoplasmă au ataşate molecule de glicogen şi se numesc glicolipide",
      "Datorită anumitor proprietăți ale fosfolipidelor, membrana celulară îşi măreşte suprafața când veziculele aparatului Golgi fuzionează cu ea"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_52",
    "text": "Care dintre afirmațiile referitoare la structurile din membrana plasmatică nu sunt adevărate?",
    "raspunsuri": [
      "Lipidele membranare sunt reprezentate de molecule de colesterol şi fosfolipide",
      "Fosfolipidele bipolare se clasifică în transmembranare şi periferice",
      "Moleculele de glicerol sese pot lega de moleculele de fosfolipide, formând lipoproteine",
      "Proteinele-enzime reduc fluiditatea membranei plasmatice",
      "Colesterolul este prezent în cantități mari în membrana plasmatică, având un rol stabilizator"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_53",
    "text": "Selectați afirmațiile adevărate referitoare la membrana plasmatică:",
    "raspunsuri": [
      "Reprezintă, alături de citoplasmă, un component de bază al celulei",
      "Poate să conțină cantități mari dintr-o substanţă de natură glicoproteică, denumită colesterol",
      "Datorită faptului că unul dintre capetele moleculelor fosfolipidice este hidrofil iar celălalt este hidrofob, acestea se organizează în dublu strat cu aspect de ,sandwich\"",
      "Fosfolipidele par să plutească într-un strat proteic în membrană, conferindu-i acesteia caracterul fluid",
      "Conține cantități mari de colesterol, un steroid prezent în grăsimile de origine animală"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_54",
    "text": "Selectați afirmațiile adevărate cu privire la structura și proprietățile membranei plasmatice:",
    "raspunsuri": [
      "Denumită şi membrană celulară, este alcătuită în principal din proteine şi lipide, mai ales fosfolipide",
      "Are o structură de mozaic fluid, în care proteinele globulare încorporate par să plutească printre lipide",
      "Capătul hidrofil al moleculelor fosfolipidice permite membranei plasmatice să îşi micşoreze suprafața când fuzionează cu membrana nucleară",
      "Glicolipidele şi glicoproteinele de pe versantul extern al membranei plasmatice au rol în recunoaşterea intercelulară",
      "Pe suprafața membranei celulare se ataşează proteine periferice, care vor proemina spre citoplasmă"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_55",
    "text": "Care dintre următoarele informații referitoare la membrana plasmatică (celulară) nu sunt corecte?",
    "raspunsuri": [
      "Este compusă în principal din colesterol (steroid animal) şi nu conține proteine şi fosfolipide",
      "Se conformează modelului reprezentat de o structură lipidică bistratificată în care plutesc molecule de proteine globulare",
      "Se conformează modelului de mozaic fluid, în care moleculele proteinelor fibrilare plutesc într-o mare de glicolipide stratificate",
      "Este impermeabilă pentru orice tip de molecule, indiferent de dimensiunea lor, permițând doar trecerea unor ioni înspre şi dinspre citoplasmă",
      "Controlează schimburile de substanțe cu mediul extracelular şi prezintă un model structural denumit mozaic fluid"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_56",
    "text": "Selectaţi afirmațiile adevărate referitoare la moleculele de proteine prezente în membrana plasmatică:",
    "raspunsuri": [
      "Sunt de două tipuri: transmembranare şi periferice",
      "Au un capăt hidrofil şi unul hidrofob, ceea ce conferă membranei structura de „sandwich\"",
      "Cele periferice pot acţiona ca şi enzime sau pot interveni în remodelarea celulară în timpul diviziunii celulei",
      "Cele de pe fața externă a membranei plasmatice se pot asocia cu molecule de glucide, formând glicoproteine",
      "Colinesteraza (proteină periferică membranară) creşte fluiditatea membranei plasmatice"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_57",
    "text": "Selectaţi afirmațiile adevărate referitoare la moleculele de proteine prezente în membrana plasmatică:",
    "raspunsuri": [
      "Cele transmembranare pot servi ca transportori ai unor molecule organice, cum este glucoza",
      "Cele periferice pot interveni în diferite circumstanțe în remodelarea celulară",
      "Cu cât numărul proteinelor transportoare este mai mare, cu atât este mai mică rata de transport prin difuziunea facilitată",
      "Cele transmembranare pot servi drept canale pentru transportul ionilor prin membrana plasmatică (canalele cu poartă pentru ionii de sodiu)",
      "Un exemplu de proteină periferică îl constituie hemoglobina"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_58",
    "text": "Selectați afirmațiile adevărate referitoare la transportul prin membrana plasmatică:",
    "raspunsuri": [
      "Difuziunea reprezintă mişcarea moleculelor dintr-o zonă cu o concentrație mare într-una cu concentrație mică (conform gradientului de concentrație)",
      "Reprezintă o necesitate pentru celulă, deoarece permite comunicarea citoplasmei cu mediul extern al celulei",
      "Una dintre modalitățile prin care substanțele traversează membrana plasmatică reprezintă osmoza care constă în difuziunea ionilor cu sarcină electrică pozitivă",
      "Osmoza reprezintă difuziunea moleculelor de apă dintr-o regiune cu o concentrație mică a solvitului, într-una cu o concentrație mare de solvit",
      "Un exemplu de osmoză este trecerea oxigenului din alveolele pulmonare în capilare"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_59",
    "text": "Care dintre afirmațiile următoare referitoare la osmoză sunt adevărate?",
    "raspunsuri": [
      "Este procesul prin care are loc eliberarea neurotransmițătorilor (cum este glicina) din celulele nervoase",
      "Reprezintă difuziunca moleculelor de apă printr-o membrană semipermeabilă, dinspre soluţia hipotonă spre cea hipertonă",
      "Reprezintă difuziunea moleculelor de solvit (NaCI) printr-o membrană impermeabilă pentru apă",
      "Are loc dinspre soluția mai diluată (concentrație mai mică de solvit) spre cea mai concentrată (concentrație mai mare de solvit)",
      "Realizarea ei necesită energie furnizată de scindarea adenozin-trifosfatului la adenozinmonofosfat"
    ],
    "corect": [1, 3]
  },
  {
    "id": "cap1_60",
    "text": "Selectați afirmațiile false dintre cele de mai jos:",
    "raspunsuri": [
      "Solvitul este o substanță chimică dizolvată într-un lichid numit solvent",
      "Solventul este o substanță chimică dizolvată într-un lichid numit solvit",
      "Solutia care are o concentrație mai mare de sare faţă de cea a citoplasmei se numeşte soluție hipertonă",
      "Soluția care are o concentrație mai mare de apă față de cea a citoplasmei se numeşte soluție hipertonă",
      "Soluția care are concentrația de clorură de sodiu egală cu cea a citoplasmei este izotonă în raport cu aceasta"
    ],
    "corect": [1, 3]
  },
  {
    "id": "cap1_61",
    "text": "Selectaţi afirmaţiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Celulele plasate în soluții hipertone se divid şi apoi se lizează",
      "Celulele plasate în soluții hipotone suferă un proces de liză, (balonizare/umflare şi dezintegrare, asemănător unei explozii) datorită pătrunderii apei în celulă",
      "Osmoza nu se produce când celulele sunt plasate în soluție hipotonă, deoarece concentrația solvitului este aceeaşi de ambele părți ale membranei",
      "Când celula este plasată într-un mediu hiperton, concentrația mai mare de solvit se află în afara celulei, apa iese din celulă şi aceasta se deshidratează, micşorându-se",
      "Osmoza se produce doar atunci când celulele sunt plasate în soluție izotonă"
    ],
    "corect": [1, 3]
  },
  {
    "id": "cap1_62",
    "text": "Membrana plasmatică este o membrană semipermeabilă care:",
    "raspunsuri": [
      "Permite trecerea apei dintr-o regiune cu o concentrație mică a solvitului într-una cu o concentrație mare a acestuia",
      "Lasă să treacă doar anumite molecule (spre exemplu, O2, apă, CO2)",
      "Conţine proteine denumite histone, care funcţionează ca pompe ionice membranare",
      "Reprezintă împreună cu ribozomii sediul sintezei proteinelor transmembranare",
      "Nu permite trecerea cu uşurinţă a moleculelor mari înspre sau dinspre celulă"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_63",
    "text": "Alegeți afirmațiile adevărate despre osmoză și consecințele ei asupra eritrocitului plasat în soluții hipo-, izo- și hipertone:",
    "raspunsuri": [
      "Osmoza reprezintă difuziunea moleculelor de apă printr-o membrană semipermeabilă, dintr-o regiune cu o concentrație mai mare a solventului într-una cu concentraţie mai mare a solvitului",
      "Osmoza reprezintă difuziunea moleculelor de apă printr-o membrană semipermeabilă, dintr-o regiune cu o concentrație mai mică a solventului într-una cu concentrație mai mare a acestuia",
      "Osmoza este similară difuziunii facilitate şi nu are nicio influență asupra eritrocitului, indiferent de mediul în care acesta este plasat",
      "Dacă se plasează eritrocite într-o soluție hipotonă, concentrația de sare (solvit) va fi mai mare în interiorul eritrocitelor şi apa va pătrunde în celule, facilitând liza acestora (hemoliza eritrocitară)",
      "Dacă se plasează eritrocite în soluție izotonă, osmoza nu se produce, concentrația de sare fiin egală de ambele fețe ale membranei eritrocitare, iar eritrocitul îşi menține integritatea structurală"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_64",
    "text": "Selectați afirmațiile adevărate cu privire la transportul transmembranar:",
    "raspunsuri": [
      "Trecerea moleculelor/ionilor prin membrana plasmatică, dintr-o regiune cu concentrație mare într-una cu concentrație mică, se numeşte difuziune",
      "Moleculele de apă se deplasează prin membrana plasmatică, dintr-o regiune cu o concentrație mică a solvitului în una cu concentrație mare a acestuia, prin procesul de osmoză",
      "Difuziunea facilitată este modalitatea de mişcare moleculară prin membrana celulară a anumitor molecule împotriva gradientului de concentrație",
      "Când compuşii chimici sunt transportați prin membrana plasmatică dintr-o regiune cu concentrație mică într-una cu concentrație mare, transportul este activ şi implică consum de energie",
      "Fagocitoza este forma de exocitoză în care anumite materii solide sunt înglobate în celulă"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_65",
    "text": "Care dintre următoarele sunt mecanisme de transport ale unor ioni şi molecule prin membrana celulară?",
    "raspunsuri": [
      "Difuziunea (transportul activ) al moleculelor mari proteice înspre şi dinspre celulă",
      "Difuziunea oxigenului şi dioxidului de carbon prin membrana eritrocitară",
      "Osmoza (difuziunea moleculelor de apă datorită unui gradient osmotic) - exemplu: reabsorbția apei din tubul proximal şi distal al nefronului",
      "Transportul activ - exemplu: reabsorbția ionilor de Na+ din tubul proximal al nefronului",
      "Cariokineza şi diapedeza leucocitelor, pentru a fagocita microorganisme"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_66",
    "text": "Care dintre următoarele nu sunt mecanisme de transport prin membrana celulară?",
    "raspunsuri": [
      "Mitoza şi interfaza ciclului celular",
      "Difuziunea facilitată, realizată cu ajutorul unor proteine transportoare, prezente membrană",
      "Difuziunea activă a apei în tubii renali",
      "Exocitoza unor produşi de secreție celulară (eliberarea neurotransmițătorilor din neuroni)",
      "Osmoza - mecanism de transport activ al ionilor de sodiu și potasiu"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_67",
    "text": "Alegeți afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Fagocitoza reprezintă transportul materialului solid prin endocitoză",
      "Pinocitoza reprezintă transportul unor picături de lichid prin exocitoză",
      "Eliberarea neurotransmițătorilor din veziculele presinaptice ale neuronilor se realizează prin exocitoză",
      "Eliberarea unor hormoni din celulele exocrine se face prin exocitoză",
      "Traversarea de către oxigen a membranei eritrocitare se realizează prin difuziune"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_68",
    "text": "Selectați afirmațiile false cu privire la permeabilitatea membranei celulare:",
    "raspunsuri": [
      "Moleculele de oxigen trec din alveolele pulmonare în hematii prin osmoză",
      "Dacă se vor introduce hematii într-o soluție hipertonă, acestea vor suferi procesul de hemoliză",
      "Membrana plasmatică semipermeabilă permite trecerea cu uşurință a unor molecule de dimensiuni mici",
      "Transportul activ se realizează în sensul gradientului de concentrație (de la concentrație mare la concentrație mică)",
      "Pentru desfăşurarea transportului activ transmembranar, energia se poate obține prin desfacerea unui compus care conține legături fosfat cu potențial energetic ridicat (adenozintrifosfat)"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_69",
    "text": "Selectați afirmațiile adevărate cu privire la transportul prin membrana plasmatică:",
    "raspunsuri": [
      "Osmoza se realizează cu ajutorul proteinelor transportoare transmembranare",
      "Ingestia bacteriilor de către leucocite se realizează prin endocitoză",
      "Ingestia bacteriilor de către leucocite se realizează prin exocitoză",
      "Difuziunea facilitată se realizează cu ajutorul proteinelor transportoare transmembranare",
      "Transportul activ presupune trecerea moleculelor/ionilor din zone cu concentrație mică în zone cu concentrație mare, cu ajutorul proteinei transportoare şi a energiei furnizate de ATP"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_70",
    "text": "Selectați afirmațiile adevărate cu privire la transportul activ prin membrana plasmatică:",
    "raspunsuri": [
      "Se realizează împotriva gradientului de concentrație, cu energie furnizată prin desfacerea (hidroliza) adenozin-trifosfatului",
      "Rata transportului activ este limitată de numărul proteinelor transportoare",
      "Se realizează cu ajutorul proteinelor transmembranare, împotriva gradientului de concentrație",
      "Nu necesită energie din desfacerea (hidroliza) adenozin-trifosfatului",
      "Una dintre formele de transport activ este difuziunea facilitată"
    ],
    "corect": [0, 1, 2]
  },
  {
    "id": "cap1_71",
    "text": "În transportul activ, substanțele chimice se deplasează dintr-o zonă cu concentrație scăzută, într-una cu concentrație crescută și pentru aceasta este nevoie de:",
    "raspunsuri": [
      "Funcţionarea genelor care să controleze procesul de transcripție",
      "Energie furnizată de adenozin-trifosfat, prin hidroliză (se eliberează 7,3 kcal/mol)",
      "Energie furnizată prin hidroliza unei substanțe care conține legături fosfat cu potențial energetic ridicat - adenozin-trifosfat (ATP)",
      "Implicarea aparatului Golgi, care să remodeleze proteinele sintetizate în ribozomi",
      "Implicarea mitocondriilor, care furnizează ATP prin respirație celulară"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_72",
    "text": "Selectați afirmațiile adevărate cu privire la endocitoză:",
    "raspunsuri": [
      "Când endocitoza implică transport de material solid prin membrană, procesul se numeşte pinocitoză",
      "Când endocitoza implică transport de material solid prin membrană, procesul se numeşte fagocitoză",
      "Se desfăşoară în acelaşi sens cu exocitoza",
      "Se desfăşoară în sens opus cu exocitoza",
      "Leucocitele realizează endocitoză atunci când fagocitează microbii"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_73",
    "text": "Selectați afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "În pinocitoză celula preia în interiorul ei substanțe chimice dizolvate în apă",
      "În fagocitoză celula preia în interiorul ei substanțe chimice dizolvate în apă",
      "În fagocitoză celula preia în interiorul ei particule solide",
      "În pinocitoză celula preia în interiorul ei particule solide",
      "Fagocitoza şi pinocitoza sunt forme de endocitoză"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_74",
    "text": "Selectați afirmațiile adevărate referitoare la endocitoză și exocitoză:",
    "raspunsuri": [
      "Fagocitoza şi pinocitoza sunt forme de exocitoză",
      "În timpul endocitozei, o mică porţiune din membrana plasmatică se pliază și înglobează particule sau mici volume de lichid din exteriorul celulei (de la suprafața celulară)",
      "În timpul endocitozei, o mică porțiune din membrana plasmatică se pliază şi înglobează particule sau mici volume de lichid din interiorul celulei",
      "În timpul endocitozei, după ce particula/volumul de lichid au fost înglobate, membrana se închide, delimitând o veziculă care va intra în citoplasmă",
      "În endocitoză se formează o veziculă care se desprinde şi migrează în spațiul extracelular"
    ],
    "corect": [1, 3]
  },
  {
    "id": "cap1_75",
    "text": "Fagocitoza este o formă de endocitoză care:",
    "raspunsuri": [
      "Este prezentă la unele elemente figurate - leucocite (globulele albe)",
      "Necesită controlul expresiei genice de către celulă",
      "Scoate din celule diverse substanţe solide",
      "Implică lizozomii, care conţin enzime pentru digestia intracelulară",
      "Este funcţia principală a neutrofilelor (denumitc şi leucocite polimorfonucleare)"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_76",
    "text": "Selectați afirmațiile adevărate cu privire la procesele de endocitoză şi exocitoză:",
    "raspunsuri": [
      "În endocitoză se formează o veziculă care se desprinde şi migrează în citoplasmă",
      "Leucocitele sunt capabile să realizeze endocitoză când înglobează microbii",
      "Leucocitele sunt capabile să realizeze exocitoză când înglobează microbii",
      "În timpul exocitozei, substanțele se deplasează din interiorulunei celule spre mediul extracelular",
      "În timpul exocitozei, substanțele se deplasează din exteriorul unei celule spre mediul intracelular"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_77",
    "text": "Selectați afirmațiile false referitoare la endocitoză şi exocitoză:",
    "raspunsuri": [
      "Prin procesul de exocitoză se realizează secreția hormonilor de către celulele glandelor endocrine",
      "Prin procesul de endocitoză se realizează secreția hormonilor de către celulele glandelor exocrine",
      "În timpul exocitozei, veziculele citoplasmatice delimitate de membrană migrează spre membrana nucleară, cu care fuzionează",
      "În timpul exocitozei, veziculele citoplasmatice delimitate de membrană migrează spre membrana celulară, cu care fuzionează",
      "În timpul endocitozei, veziculele citoplasmatice delimitate de membrană migrează spre membrana celulară, cu care fuzionează"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_78",
    "text": "Selectați afirmațiile adevărate referitoare la endocitoză şi exocitoză:",
    "raspunsuri": [
      "În cazul exocitozei, conținutul veziculei citoplasmatice este eliminat în mediul extracelular",
      "În cazul exocitozei, conținutul veziculei citoplasmatice este eliminat în mediul intracelular",
      "Eliberarea neurotransmițătorilor la nivelul terminațiilor celulelor nervoase presinaptice are loc prin procesul de exocitoză",
      "Eliberarea neurotransmițătorilor la nivelul terminaţiilor presinapticc ale celulelor musculare are loc prin procesul de exocitoză",
      "Pinocitoza, care presupune înglobarea în celulă de material lichid, este o formă de endocitoză"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_79",
    "text": "Selectaţi afirmațiile adevărate referitoare la nucleul celulelor:",
    "raspunsuri": [
      "Este înconjurat de o membrană triplă alcătuită din fosfolipide",
      "Porii din membrana nucleară permit mediului intern al nucleului să comunice cu citoplasma celulei",
      "Nucleul celulelor umane este înconjurat de o membrană numită înveliş nuclear",
      "Nucleul celulelor umane este înconjurat de o membrană numită membrană plasmatică",
      "Nucleul conține ADN (acid dezoxiribonucleic) şi histone (proteine histonice)"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_80",
    "text": "Selectați răspunsurile corecte cu privire la nucleu:",
    "raspunsuri": [
      "Nucleul delimitat de membrană este prezent în celulele eucariote",
      "În corpul uman există celule lipsite de nucleu, cum sunt hematiile (globulele roşii sau eritrocitele)",
      "Masa densă din nucleu care conţine acid ribonucleic (ARN) se numeşte nucleol",
      "În nucleul celular, moleculele de acid ribonucleic (ARN) sunt înfăşurate în jurul complexelor de histone pentru a forma cromatina",
      "În timpul perioadei în care cromozomii nu se pot distinge unul de altul (în interfază), masa dispersată de ADN şi proteinele asociate lui din nucleul celular se numeşte cromatină"
    ],
    "corect": [0, 1, 2, 4]
  },
  {
    "id": "cap1_81",
    "text": "Selectaţi afirmațiile adevărate cu privire la nucleu:",
    "raspunsuri": [
      "Există aproximativ 30.000 de gene în nucleul fiecărei celule umane",
      "Învelişul nuclear constă din două straturi de proteine cu pori prin care mediul intern al nucleului comunică cu citoplasma",
      "Nucleolul conține acid ribonucleic (ARN) şi intervine în producerea subunităţilor ribozomale, care vor fi asamblate în citoplasmă sub formă de ribozomi",
      "Este înconjurat de o membrană alcătuită din două straturi duble de fosfolipide",
      "Spre deosebire de membrana celulară, membrana nucleară nu este prevăzută cu pori"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_82",
    "text": "Selectați afirmațiile adevărate referitoare la nucleul celulelor:",
    "raspunsuri": [
      "Forma şi dimensiunea nucleului variază de la un tip celular la altul",
      "Poziţia nucleului în celulă este centrală la toate tipurile celulare",
      "Este înconjurat de o membrană dublă, care poartă numele de înveliş nuclear",
      "Include nucleoli care conțin acid ribonucleic (ARN)",
      "Nucleolii sunt sediul sintezei lizozomilor"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_83",
    "text": "Selectați afirmațiile adevărate referitoare la învelişul nuclear:",
    "raspunsuri": [
      "Este o membrană poroasă numită membrană celulară",
      "Fiind alcătuit din două straturi duble de fosfolipide, are un conținut în aceste substante dublu faţă de membrană celulară",
      "Separă conținutul nuclear de spațiul extracelular",
      "Este o membrană poroasă dublă",
      "Controlează pasajul substanțelor între nucleu şi citoplasmă"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_84",
    "text": "Selectați afirmațiile false referitoare la învelişul nuclear:",
    "raspunsuri": [
      "Conţine pori care permit comunicarea nucleului cu mediul extracelular",
      "Are un conținut în fosfolipide redus la jumătate față de membrana celulară",
      "Are un conținut în fosfolipide dublu față de membrana plasmatică",
      "Controlează pasajul substanțelor între celulă şi mediul extracelular",
      "Conţine informația genetică pentru sinteza proteică"
    ],
    "corect": [0, 1, 3, 4]
  },
  {
    "id": "cap1_85",
    "text": "Selectați afirmațiile adevărate referitoare la nucleoli:",
    "raspunsuri": [
      "Sunt structuri dense prezente în nucleul celulelor",
      "Conţin acid ribonucleic (ARN) şi sunt sediul sintezei subunităților ribozomale",
      "Sunt saci membranoşi cu partiție interioară",
      "Sunt organite care conţin enzime lizozomale",
      "În derularea etapei de mitoză a ciclului celular, dispar în profază şi reapar în telofază"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_86",
    "text": "Selectați afirmațiile false referitoare la nucleoli:",
    "raspunsuri": [
      "Sunt structuri dense prezente în toate celulele anucleate",
      "Conţin acidul nucleic care are în componenţie baza azotată uracil",
      "Sunt sediul sintezei subunităţilor lizozomale",
      "Sunt corpusculi lipsiți de membrană și care conţin ARN (acid ribonucleic)",
      "Sunt prezenți în eritrocite"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_87",
    "text": "Selectați afirmațiile adevărate referitoare la citoplasmă:",
    "raspunsuri": [
      "Este sediul unor procese metabolice celulare",
      "Conţine citoscheletul constituit din subunități glucidice",
      "Conține structuri specializate numite organite (reticul endoplasmatic, corpul/aparatul Golgi etc.)",
      "Are o consistență solidă, fundamentală pentru celulă",
      "La nivelul organitelor din citoplasmă se desfăşoară diverse funcții celulare"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_88",
    "text": "Selectați afirmațiile false referitoare la reticulul endoplasmatic:",
    "raspunsuri": [
      "Are rol important în digestia celulară",
      "La nivelul lui se desfăşoară o etapă importantă din respirația celulară (fosforilarea oxidativă)",
      "Este un organit alcătuit dintr-un ansamblu de membrane care se extind intracitoplasmatic",
      "Dacă are ribozomi ataşaţi, poartă numele de reticul endoplasmatic rugos",
      "Reticulul endoplasmatic rugos este sediul exclusiv al sintezei şi degradării lipidelor"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_89",
    "text": "Selectați afirmațiile adevărate referitoare la reticulul endoplasmatic rugos:",
    "raspunsuri": [
      "Este implicat în sinteza proteinelor (realizată prin asamblarea aminoacizilor în ribozomii ataşaţi)",
      "Prezintă ataşate structuri numite lizozomi, în care se combină chimic aminoacizii",
      "Reprezintă sediul sintezei lipidelor",
      "Este un organit alcătuit dintr-un ansamblu de membrane, care se extind intracitoplasmatic şi prezintă ribozomi ataşaţi",
      "Are rol în sinteza proteinelor prin respirație celulară"
    ],
    "corect": [0, 3]
  },
  {
    "id": "cap1_90",
    "text": "Selectați afirmațiile adevărate referitoare la ribozomi:",
    "raspunsuri": [
      "Sunt organite citoplasmatice care pot fi ataşate membranelor aparatului Golgi",
      "La nivelul lor are loc legarea aminoacizilor în lanțuri peptidice",
      "Sunt organite citoplasmatice care pot fi ataşate membranelor reticulului endoplasmatic",
      "Sunt structuri submicroscopice, compuse din proteine şi ARN",
      "Reprezintă depozitul de ioni de calciu (Ca2+) din celulă"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_91",
    "text": "Selectați afirmațiile false referitoare la reticulul endoplasmatic:",
    "raspunsuri": [
      "Poate fi de două tipuri: neted şi rugos",
      "În reticulul endoplasmatic rugos are loc sinteza proteinelor prin cuplarea acizilor graşi",
      "În reticulul endoplasmatic neted are loc sinteza lipidelor şi a membranelor",
      "Este un organit alcătuit dintr-un ansamblu de membrane care se extind extracitoplasmatic",
      "La nivelul ribozomilor ataşați reticulului endoplasmatic neted are loc sinteza proteinelor prin cuplarea nucleotidelor"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_92",
    "text": "Reticulul endoplasmatic se poate descrie ca fiind:",
    "raspunsuri": [
      "Organit citoplasmatic cu rol specific în etapa de transcripție din cadrul sintezei proteinelor",
      "Structură funcţională aflată în citoplasmă, cu rol în depozitarea Ca2+",
      "Ansamblu de membrane care se extind intracitoplasmatic",
      "Sediu al respirației celulare, conținând sistemul transportor de electroni",
      "De două tipuri, neted (sediu al sintezei de lipide şi de membrane) şi rugos (care au ataşați ribozomi)"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_93",
    "text": "Alegeţi dintre enunţurile de mai jos, pe cele care conțin prima afirmație adevărată și cea de a doua falsă, cu referire la lizozom:",
    "raspunsuri": [
      "Conţine enzime cu rol în procesele de digestie ale celulei. Este un organit celular extern care permite deplasarea anumitor celule",
      "Reprezintă depozitul de sodiu şi calciu al celulei. Are forma unei vezicule şi conține enzime implicate în procesele de digestie celulară",
      "Conţine enzime care degradează particulele nutritive pătrunse în celulă şi pune la dispoziția celulei produşii finali. La nivelul lui are loc sinteza membranelor celulare",
      "Este o sursă de săruri (clorura de sodiu, fosfat de calciu). Enzimele sale pot să degradeze particulele nutritive pătrunse în celulă",
      "Reprezintă o veziculă care derivă din sacii aparatului Golgi și conține enzime pentru digestia intracelulară. Se află în celulă ataşat membranelor reticulului endoplasmatic"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_94",
    "text": "Despre mitocondrii se poate afirma că:",
    "raspunsuri": [
      "Sunt organite în care se sintetizează adenozin-trifosfat (ATP) pentru nevoile energetice ale celulei",
      "Constituie o parte componentă a cromozomilor şi cromatinei nucleare",
      "Sunt organite care dețin informaţia genetică pentru sinteza tuturor componentelor celulei",
      "Se găsesc în număr mare în fibra musculară striată (în vecinătatea filamentelor subţiri de actină și a celor groase de miozină) şi furnizează ATP-ul necesar contracţiei musculare",
      "La nivelul lor se eliberează cea mai mare parte a energiei provenite din degradarea substanţelor de natură glucidică, lipidică sau proteică, utilizându-se oxigenul provenit din aerul inspirat"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_95",
    "text": "Alegeți enunțurile care descriu corect structura şi funcția mitocondriei:",
    "raspunsuri": [
      "Considerată sac membranos cu partiție interioară, mitocondria reprezintă sediul desfăşurării ciclului acizilor tricarboxilici (CAT)",
      "Asigură formarea moleculelor de ATP în cadrul respirației celulare, care se desfăşoară în întregime în anaerobioză",
      "Posedă o membrană externă şi una internă între care se delimitează spațiul intermembranar (compartiment mitocondrial extern)",
      "Membrana mitocondrială externă este plicaturată sub formă de criste, la nivelul cărora se află enzime importante pentru scindarea ATP",
      "Membrana mitocondrială internă este plicaturată sub formă de criste şi delimitează matricea (compartimentul mitocondrial intern)"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_96",
    "text": "Selectați afirmațiile adevărate referitoare la aparatul Golgi:",
    "raspunsuri": [
      "Structura lui include saci membranoşi turtiți, de obicei curbați la capete",
      "Sacii se unesc între ei parțial, formând vezicule asemănătoare unor picături",
      "Conţine saci membranoşi cu partiție interioară, denumiți subunități mici şi mari",
      "La nivelul lui au loc procesarea şi împachetarea în vezicule a proteinelor (după ce proteina sintetizată este îndepărtată din ribozomi)",
      "Este o structură nonmembranoasă care conține pigmenți denumiți citocromi"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_97",
    "text": "Care dintre următoarele structuri sunt componente microscopice specializate ale celulei (organite celulare)?",
    "raspunsuri": [
      "Kinetocorul - structură care conține o proteină motorie care asigură deplasarea cromozomilor prin celulă",
      "Aparatul Golgi - vezicule asemănătoare unor picături, formate prin unirea parțială a unor saci turtiți, de obicei curbați la capete",
      "Lizozomii - sediu unic al enzimelor care realizează sinteza proteinelor",
      "Nucleolul - format din mase dense de adenozin-trifosfat (ATP)",
      "Mitocondria - în interiorul căreia, în procesul de respirație celulară, oxigenul se combină cu hidrogen (sub formă de protoni) şi electroni (e) ca să formeze apă"
    ],
    "corect": [1, 4]
  },
  {
    "id": "cap1_98",
    "text": "Selectaţi afirmațiile adevărate referitoare la mitocondrie:",
    "raspunsuri": [
      "În interiorul ei, respirația celulară este completă când oxigenul se combină cu hidrogen şi electroni ca să formeze apă",
      "La nivelul acestui organit, în matricea mitocondrială, are loc sinteza de glucoză, cu eliberare de energie",
      "La nivelul acestui organit, se desfăşoară căi metabolice importante (ciclul Krebs, lanțul transportor de electroni, chemiosmoza)",
      "Energia produsă de mitocondrie este stocată sub formă de ADN (acid dezoxiribonucleic)",
      "Este un organit celular intern implicat în procesele energetice ale celulei"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_99",
    "text": "Selectați afirmațiile false referitoare la mitocondrii:",
    "raspunsuri": [
      "Pentru desfăşurarea respirației celulare, mitocondriile utilizează oxigenul provenit din aerul inspirat",
      "Energia rezultată din catabolismul diferitelor substraturi la nivel mitocondrial este utilizată pentru formarea de molecule de ATP (adenozin-trifosfat)",
      "La nivelul lor, membrana mitocondrială internă delimitează citoplasma celulei de matricea mitocondrială",
      "Pentru că mitocondriile pot produce ATP şi în absența oxigenului, celulele supraviețuiesc doar prin procese biochimice anaerobe",
      "Spațiul intermembranar al mitocondriei este delimitat între matrice şi membrana mitocondrială internă"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_100",
    "text": "Alegeţi afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Sunt elemente ale citoscheletului celular filamentele intermediare, microfilamentele, microtubulii",
      "În faza G2 a ciclului celular, se formează filamentele fusului de diviziune din molecule lipidice şi glucidice",
      "Microtubulii reprezintă alături de microfilamente şi de microfilamente intermediare o structură de suport a celulei",
      "Toate componentele citoscheletului sunt alcătuite din subunităţi lipidice",
      "Centriolii în formă de tijă vor facilita distribuția cromozomilor către celulele fiice în timpul reproducerii celulare"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_101",
    "text": "Care dintre următoarele afirmații sunt adevărate și se referă la extensii ale unor celule ale corpului uman?",
    "raspunsuri": [
      "Flagelii, prezenți la celulele Leydig, participă la constituirea unui suport pentru citoplasma acestora",
      "Cilii, mai lungi şi mai puțin numeroşi decât flagelii, se regăsesc în tractul respirator şi în alveolele pulmonarc",
      "Cilii se întâlnesc la celulele din căile aeriene superioare şi se ondulează în mod sincron",
      "Flagelul este lung şi asemănător unui fir de păr",
      "Cilii şi flagelii sunt ataşați corpusculilor bazali de sub membrana celulară"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_102",
    "text": "Selectaţi afirmațiile adevărate referitoare la citoscheletul celular:",
    "raspunsuri": [
      "Este o rețea interconectată de microtubului, microfilamente şi filamente intermediare din interiorul citoplasmei",
      "Este o rețea interconectată de fibre, fascicule şi molecule izolate aflată în interiorul nucleului",
      "Participă la realizarea deplasării particulelor în citoplasmă",
      "Serveşte drept structură de suport pentru celulă și are toate componentele alcătuite din subunități proteice",
      "Filamentele intermediare sunt componente ale citoscheletului celular doar la celula procariotă"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_103",
    "text": "Selectați răspunsurile incorecte referitoare la citoscheletul celular:",
    "raspunsuri": [
      "Microtubulii şi filamentele intermediare nu sunt componente ale citoscheletului celular",
      "Microfilamentele fac parte din structurile citoscheletului celular",
      "Toate componentele citoscheletului celular sunt alcătuite din subunităţi proteice",
      "Toate componentele citoscheletului celular sunt alcătuite din subunități fosfolipidice",
      "Are componente asemănătoare firelor de păr, care străbat membrana celulară și intră în nucleu"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_104",
    "text": "Selectați afirmațiile adevărate referitoare la cili şi flageli:",
    "raspunsuri": [
      "Flagelul este prezent la spermatozoid şi asigură mişcarea acestuia",
      "Cilii sunt structuri mai scurte decât flagelii",
      "Flagelul este o prelungire prezentă la unele dintre celulele tractului respirator",
      "Cilii sunt prezenți la nivelul celulelor tractului respirator, unde se ondulează în mod sincron",
      "Spre deosebire de flagel, cilii sunt imobili şi mult mai lungi decât acesta"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_105",
    "text": "Selectați afirmațiile false referitoare la cili şi flageli:",
    "raspunsuri": [
      "Cilul este o structură unică, mai lungă decât flagelul",
      "Sunt extensii prezente la anumite celule umane",
      "Cilii asigură mişcarea spermatozoidului în lichidul spermatic",
      "Flagelul asigură mişcarea ovulului în trompa uterină, în vederea fecundaţiei",
      "Flagelul, prin mişcări ondulatorii, deplasează stratul de mucus cu particule străine prinse în el, de la suprafața celulelor tractului respirator"
    ],
    "corect": [0, 2, 3, 4]
  },
  {
    "id": "cap1_106",
    "text": "Alegeți afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "În celulele umane care căptuşesc căile aeriene superioare şi tractul respirator, cilii se ondulează sincron, eliminând mucusul cu particulele străine prinse în el",
      "În celulele umane care căptuşesc tractul respirator, cilii se ondulează asincron, eliminând mucusul cu impurități",
      "Atunci când este prezent la nivelul unei celule umane, flagelul asigură reproducerea celulei",
      "Flagelul, prezent la nivelul spermatozoidului, asigură mişcarea acestei celule",
      "Cilii prezenți în epiteliul alveolelor pulmonare determină propulsia mucusului pe suprafeţele celulare"
    ],
    "corect": [0, 3]
  },
  {
    "id": "cap1_107",
    "text": "Selectați afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Proteinele care oferă un cadru de sprijin pentru ARN (acid ribonucleic) în cromozomi se numesc histone",
      "Când pe reticulul endoplasmatic sunt prezenți ribozomi, reticulul endoplasmatic se numeşte rugos",
      "Înainte de a fi transportate spre destinațiile finale, proteinele şi lipidele sunt procesate într-un organit celular numit nucleozom",
      "Organitele care eliberează energia celulară din molecule de proveniență alimentară și în care se produc moleculele de ATP (adenozin-trifosfat) sunt mitocondriile",
      "Principalele componente ale citoscheletului sunt filamentele intermediare, microfilamentele şi microtubulii"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_108",
    "text": "Selectați afirmațiile adevărate referitoare la energia celulară:",
    "raspunsuri": [
      "Reacţiile chimice însoțite de eliberare de energie se numesc exergonice",
      "Reacţiile chimice care necesită energie pentru desfăşurarea lor se numesc endergonice",
      "Proteinele care accelerează reacțiile chimice, ele însele rămânând neschimbate, se numesc hormoni",
      "Cele trei părți ale unei molecule de adenozin-trifosfat (ATP) sunt uracilul, unitatea fosfat şi riboza",
      "Sursa energetică imediată folosită de majoritatea celulelor umane este adenozintrifosfatul (АТР)"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_109",
    "text": "Despre adenozin-trifosfat (ATP) este adevărat că:",
    "raspunsuri": [
      "Atunci când elimină gruparea fosfat terminală, se eliberează energie echivalentă cu 7,3 kcal/mol",
      "Prin descompunerea lui pentru a furniza energie sunt eliberate riboza şi adenozina",
      "Serveşte drept sursă de energie în timpul contracției musculare",
      "Conţine o singură grupare fosfat cu nivel energetic ridicat, pe care o eliberează sub acţiunea ATP-azei",
      "În fibra musculară trebuie în permanenţă regenerat din ADP şi grupări fosfat, cu aport de energie"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_110",
    "text": "Selectați afirmațiile false dintre cele de mai jos:",
    "raspunsuri": [
      "Energia necesară supraviețuirii celulelor corpului uman provine din alimente",
      "Orice reacție chimică în care se eliberează energie se numeşte exergonică",
      "Orice reacție chimică în care se eliberează energie se numeşte endergonică",
      "Reacțiile chimice se desfăşoară în celule fără a implica schimburi energetice",
      "Compuşii chimici din celule reacționează între ei automat şi se degradează spontan"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_111",
    "text": "Care dintre următoarele afirmaţii caracterizează enzimele?",
    "raspunsuri": [
      "Majoritatea enzimelor au structură glicolipidică",
      "Acționează nespecific asupra substratului, transformându-l în produs final de reacție",
      "Temperaturile ridicate pot determina denaturarea structurii lor",
      "Participă la reacții chimice în cadrul unor căi metabolice",
      "Prezintă o porțiune-cheie, zona activă, la nivelul căreia se leagă moleculele de substrat"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_112",
    "text": "Selectați afirmațiile adevărate referitoare la enzime:",
    "raspunsuri": [
      "Fiecare enzimă catalizează o singură reacție chimică, scăzând energia de activare necesară desfăşurării acesteia",
      "O enzimă poate cataliza una sau mai multe reacții chimice diferite, situație în care se regăseşte modificată structural la finalul reacției sau reacțiilor catalizate",
      "Substanţa asupra căreia acţionează o enzimă pentru a se obține reactantul se numeşte produs final",
      "Substanţa asupra căreia acţionează o enzimă pentru a se obține produsul final se numeşte substrat",
      "Amilaza, catalaza şi peptidaza sunt exemple de proteine care acționează ca enzime asupra unor substraturi"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_113",
    "text": "Selectaţi răspunsurile corecte referitoare la enzime şi la acțiunea acestora:",
    "raspunsuri": [
      "Prezintă o porţiune-cheie, zona activă, care interacționează cu substratul, accelerând obținerea produşilor finali",
      "Majoritatea enzimelor sunt de natura polizaharidică, exceptând peptidazele, care sunt de natură proteică",
      "Temperatura influenţează viteza unei reacții catalizate enzimatic (la temperaturi ridicate, reacţiile enzimatice au loc mult mai rapid)",
      "Energia de activare termică a unei reacţii endergonice sau exergonice este produsă de enzime",
      "Temperatura influenţează viteza unei reacții catalizate enzimatic dar excesul de căldură poate provoca modificarea structurii proteice a enzimei (denaturarea ei)"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_114",
    "text": "Selectați afirmațiile false referitoare la enzime:",
    "raspunsuri": [
      "Sunt catalizatori anorganici, care accelerează reacția enzimatică și se consumă până la finalul acesteia",
      "De obicei, reacțiile catalizate enzimatic se desfăşoară rapid, în câteva milisecunde, iar viteza lor este influențată de factori cum este concentrația substratului",
      "De obicei, reacţiile catalizate enzimatic se desfăşoară lent, în câteva ore iar viteza de reacţie nu depinde de concentrația substratului",
      "Produşii unei reacții catalizate de o enzimă se numesc produşi finali",
      "Concentrația substratului şi aciditatea mediului în care are loc reacția catalizată enzimatic nu influențează viteza de desfăşurare a acesteia"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_115",
    "text": "Care dintre afirmaţiile următoare sunt false?",
    "raspunsuri": [
      "Procesele catabolice presupun sinteza unor molecule mari, iar cele anabolice presupun degradarea unor molecule complexe",
      "O cale metabolică este o secvență de reacții chimice care are loc într-o celulă",
      "Într-o celulă numărul enzimelor este foarte redus, doar câteva reacții chimice degradare fiind catalizate enzimatic",
      "Procesele anabolice presupun sinteza de molecule complexe (proteine, polizaharide, fosfolipide)",
      "Procesele anabolice presupun digestia moleculelor mari, complexe (spre exemplu, oxidarea glucozei sau a acizilor graşi)"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_116",
    "text": "Care dintre următoarele afirmații sunt false?",
    "raspunsuri": [
      "Celulele epiteliale din tractul gastrointestinal nu se divid (spre deosebire de hematii)",
      "Catalaza este enzima care degradează peroxidul de hidrogen în apă şi oxigen",
      "Cilii şi flagelii sunt extensii ataşate pe fața membranei nucleare orientată spre citoplasmă",
      "ADN-ul din structura materialului nuclear este alcătuit din nucleozide (riboză + baze azotate) legate unele de altele prin legături ionice",
      "În interiorul mitocondriei, respirația celulară este completă atunci când are loc combinarea oxigenului cu hidrogen şi electroni pentru a forma apa"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_117",
    "text": "Selectați afirmațiile adevărate referitoare la materialul nuclear al celulei:",
    "raspunsuri": [
      "Este compus în principal din acid dezoxiribonucleic şi dintr-un tip de proteine numite histone",
      "Conţine ADN organizat în unități circulare cu denumirea de cromozomi (forma despiralizată) sau de cromatină (forma spiralizată)",
      "Conţine ADN organizat fie sub formă de cromozomi, fie sub formă de cromatină",
      "Constă din fosfolipide şi ATP, acesta din urmă alcătuit din nucleotide legate unele de altele prin legături covalente",
      "Se găseşte sub formă de cromatină despiralizată în faza G₁ a ciclului celular."
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_118",
    "text": "Selectați afirmațiile false referitoare la materialul nuclear al celulei:",
    "raspunsuri": [
      "Nucleozomul este o structură cu dimensiuni electronomicroscopice, alcătuită din ADN şi complexe histonice",
      "Un nucleozom este o structură alcătuită dintr-un lanț dublu spiralat de acid ribonucleic (ARN) înfăşurat în jurul complexelor de histone",
      "Un cromozom este alcătuit din milioane de nucleozomi care se înfășoară între ei",
      "Structura şi conținutul nucleului sunt implicate direct în reproducerea celulară",
      "Nucleozomul este alcătuit dintr-un mare număr de molecule de acid dezoxiribonucleic, în jurul cărora se înfăşoară proteina histonică"
    ],
    "corect": [1, 4]
  },
  {
    "id": "cap1_119",
    "text": "Despre reproducerea celulară și ciclul celular este adevărat că:",
    "raspunsuri": [
      "În anumite țesuturi ale corpului uman celulele se divid frecvent (tract gastrointestinal), în altele se divid mai rar",
      "Ciclul celular are două etape importante: interfaza (Gı-S-G2) şi mitoza (profaza-metafazaanafază-telofază)",
      "Ciclul celular poate fi definit ca repetarea creşterii şi reproducerii celulare",
      "Una dintre etapele ciclului celular este interfaza formată din patru faze: profază, metafază, anafază şi telofază",
      "Nucleul, prin structura şi conținutul lui, este direct implicat în reproducerea celulară"
    ],
    "corect": [0, 1, 2, 4]
  },
  {
    "id": "cap1_120",
    "text": "Selectați răspunsurile corecte referitoare la ciclul celular:",
    "raspunsuri": [
      "Perioada din cadrul ciclului celular în care ADN-ul nuclear al celulei este distribuit spre cele două celule fiice se numeşte mitoză",
      "Etapa interfazei în care celula sintetizează proteine structurale şi enzime este reprezentată de faza G3",
      "Faza S, aparținând interfazei, reprezintă perioada în care ADN-ul din mucleu se replică (fiecare cromozom fiind copiat cu acuratețe)",
      "În timpul fazei G2 a interfazei, celula se pregăteşte de mitoză, iar proteinele citoplasmatice se organizează într-o serie de filamente numite histone",
      "În faza G2 a interfazei celulele cresc, îşi îndeplinesc funcția şi se pregătesc de intrarea în mitoză"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_121",
    "text": "Selectați afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Interfaza este perioada în care se desfăşoară toate activitățile specifice unei celule",
      "Cariokineza reprezintă diviziunea efectivă a celulei",
      "Creşterea în dimensiuni a celulei se produce în toate cele trei faze distincte ale interfazei",
      "Ciclul celular constă în patru faze distincte, care se desfășoară în ordinea: anafaza, profaza, metafaza şi telofaza",
      "După faza S a interfazei, în urma replicării ADN-ului nuclear, celula va avea 46 de cromozomi, fiecare cu câte două cromatide per cromozom"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_122",
    "text": "Ciclul celular prezintă ca etape majore interfaza și mitoza. Care dintre afirmațiile de mai jos caracterizează interfaza?",
    "raspunsuri": [
      "Este perioada ciclului celular în care ADN-ul (acidul dezoxiribonucleic) nuclear al celulei este împărțit între cele două celule fiice",
      "Este faza în care cromozomii se găsesc sub formă de cromatină despiralizată",
      "În cadrul ei se derulează faza S, în care are loc dublarea cantității de ADN (acid dezoxiribonucleic)",
      "Este perioada în care se desfăşoară toate activitățile specifice unei celule",
      "Se mai numeşte citokineză (formarea a două celule separate)"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_123",
    "text": "Selectați afirmațiile false cu privire la ciclul celular:",
    "raspunsuri": [
      "Are două perioade majore: interfaza şi mitoza",
      "Interfaza are patru faze (care decurg în ordinea telofază, anafază, metafază şi profază), iar mitoza trei faze (care decurg în succesiunea G1, G2 şi S3)",
      "În faza G2 a mitozei, celula sintetizează proteine structurale, enzime şi creşte în dimensiuni",
      "În faza S a interfazei, ADN-ul (acidul dezoxoribonucleic) nuclear se replică, dar nu apare sub formă de cromozomi, ci sub formă de cromatină",
      "In faza S, prin procesul de replicare a ADN-ului (acidului dezoxiribonucleic), cele 46 de cromatide citoplasmatice (care formează cromatina nucleară) îşi sintetizează câte două copii identice"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_124",
    "text": "Alegeţi asocierile corecte referitoare la ciclul celular și la fazele (etapele) sale:",
    "raspunsuri": [
      "Interfaza - replicarea ADN-ului - desfăşurarea activităților specifice celulei",
      "Citokineza - alinierea cromozomilor la nivelul plăcii metafazice – 92 de cromatide",
      "Faza G - activități normale ale celulei (secreția de substanțe în celula glandulară, contracția în celula musculară)",
      "Ciclul celular - derularea a trei faze distincte - profaza, metafaza şi telofaza - finalizare prin meioză",
      "Faza Gı din interfază - sinteză de proteine structurale - creştere dimensională a celulei – cromatină despiralizată"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_125",
    "text": "Despre cromatide, cromozomi și cromatină este adevărat că:",
    "raspunsuri": [
      "Se prezintă sub formă de structuri fibrilare sau granulare vizibile cu ochiul liber",
      "Conţin informația genetică pentru sinteza proteinelor",
      "Se asociază cu moleculele de ATP (adenozin-trifosfat), formând nucleozomi",
      "Conțin ADN (acid dezoxiribonucleic) şi proteine asociate acestuia, denumite histone",
      "Nu conțin ARN (acid ribonucleic)"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_126",
    "text": "Selectați afirmațiile adevărate referitoare la mitoză:",
    "raspunsuri": [
      "Este una dintre cele două perioade ale ciclului celular, alături de interfază",
      "Este una dintre cele două perioade ale ciclului celular, alături de spiralizarea cromozomilor",
      "Este perioada ciclului celular în care ADN-ul (acidul dezoxiribonucleic) nuclear al celulei este împărţit între cele două celule fiice",
      "După mitoză urmează faza S, etapă a interfazei",
      "Este singura perioadă în care celula sintetizează proteine structurale"
    ],
    "corect": [0, 2]
  },
  {
    "id": "cap1_127",
    "text": "Selectați informațiile corecte referitoare la mitoză:",
    "raspunsuri": [
      "Este un proces continuu care cuprinde mai multe etape succesive (profaza, metafază, anafază şi telofază)",
      "Stadiul în care cele 92 de cromatide se aliniază sub forma a 46 de cromozomi de-a lungul plăcii ecuatoriale este metafaza",
      "În timpul profazei, structurile microscopice care migrează spre polii opuşi ai celulei se numesc centrozomi",
      "Când cromozomii ajung la polii opuşi ai celulei, spiralizându-se pentru a forma cromatina, celula se află în telofază",
      "Când cromozomii ajung la polii opuşi ai celulei, despiralizându-se şi dispersându-se pentru a forma cromatina, celula se află în telofază"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_128",
    "text": "Selectați asocierile adevărate referitoare la evenimentele derulate în timpul mitozei:",
    "raspunsuri": [
      "La începutul profazei - condensarea cromatinei şi formarea de filamente vizibile",
      "În timpul interfazei - desfăşurarea funcţiilor specifice ale celulei",
      "În timpul fazei G2-sinteza enzimelor şi a proteinelor structurale",
      "În timpul metafazei - alinierca perechilor de cromatide în planul ecuatorial (alinierea centromerilor în placa metafazică)",
      "În timpul telofazei - despiralizarea şi dispersarea cromozomilor ajunşi la polii opuşi ai celulei, pentru a forma mase de cromatină"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_129",
    "text": "ARN-ul (acidul ribonucleic) este conținut în celulă într-o serie de structuri, cu excepția:",
    "raspunsuri": [
      "Ribozomilor, la nivelul cărora are loc sinteza proteinelor",
      "Moleculelor care transportă în citoplasmă informația genetică, primită în urma transcripției",
      "Filamentelor fusului de diviziune, formate din microtubuli",
      "Moleculelor care transportă aminoacizii la ribozomi în timpul sintezei proteice",
      "Cromatinei despiralizate din metafaza ciclului celular"
    ],
    "corect": [2, 4]
  },
  {
    "id": "cap1_130",
    "text": "Selectați afirmațiile adevărate referitoare la faza G1 din interfază:",
    "raspunsuri": [
      "Este perioada în care celula sintetizează proteine structurale",
      "Este perioada în care celula sintetizează enzime",
      "Urmează după faza S a ciclului celular",
      "În această etapă, celula creşte în dimensiuni",
      "În această etapă are loc replicarea ADN-ului (acidului dezoxiribonucleic) nuclear"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_131",
    "text": "Selectați asocierile corecte dintre cele de mai jos referitoare la ciclul celular:",
    "raspunsuri": [
      "Faza G₁ - urmează mitozei - sinteză de proteine structurale şi enzime - creştere în dimensiuni a celulei",
      "Interfază - perioadă a ciclului celular între fazele Gı şi G2 - funcţii celulare inhibate",
      "Faza S - sinteză de ADN (acid dezoxiribonucleic) - replicarea ADN-ului",
      "Faza G2- continuă creşterea celulară - continuă desfășurarea funcțiilor celulei",
      "Faza S - sinteza ADN-ului - citokineză – sinteza ARN-ului"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_132",
    "text": "Selectați afirmațiile adevărate referitoare la faza S a ciclului celular:",
    "raspunsuri": [
      "La sfârşitul acestei faze, cantitatea de ADN (acid dezoxiribonucleic) nuclear va fi dublă comparativ cu cea din faza G2",
      "La sfârşitul acestei faze, cantitatea de ADN (acid dezoxiribonucleic) nuclear va fi dublă comparativ cu cea din faza Gı",
      "Se derulează între fazele Gı şi G2",
      "Este o etapă a mitozei, ca şi metafaza",
      "În această fază, cromozomii nucleari nu sunt vizibili"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_133",
    "text": "Despre succesiunea evenimentelor derulate în ciclul celular se poate afirma că:",
    "raspunsuri": [
      "Faza G urmează anafazei şi precede faza S",
      "Faza G2 urmează fazei S şi precede profaza",
      "Interfaza cuprinde în ordine etapele S-G2-G1",
      "Profaza târzie urmează după anafáză",
      "Anafaza precede metafaza şi urmează telofazei"
    ],
    "corect": [1]
  },
  {
    "id": "cap1_134",
    "text": "Despre faza Gı a ciclului celular nu este adevărat că:",
    "raspunsuri": [
      "Acum are loc sinteza de proteine structurale şi de enzime, fără replicarea ADN-ului (acid dezoxiribonucleic)",
      "Precede interfaza şi asigură sinteza proteinelor structurale şi enzimelor, ca şi replicarea ADN-ului nuclear",
      "Este urmată de fazele S şi apoi G2 ale interfazei",
      "Acum au loc activități normale ale celulei iar cromozomii se află sub formă de cromatină despiralizată",
      "Este denumită şi citokineză, finalizându-se prin separarea celor două celule fiice"
    ],
    "corect": [1, 4]
  },
  {
    "id": "cap1_135",
    "text": "Selectați afirmațiile false referitoare la faza G2 a ciclului celular:",
    "raspunsuri": [
      "Este perioada în care celula se pregăteşte pentru intrarea în telofază",
      "Este perioada în care celula se pregăteşte pentru mitoză",
      "Urmează după faza S, la sfârşitul căreia în nucleu există 92 de cromatide (câte două cromatide/cromozom)",
      "Are loc înaintea fazei S de replicare a acidului dezoxiribonucleic",
      "Cromozomii sunt spiralizați, cu o singură cromatidă, aşezați la nivelul plăcii ecuatoriale"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_136",
    "text": "Selectați afirmațiile adevărate referitoare la fusul de diviziune:",
    "raspunsuri": [
      "Este alcătuit din microtubuli, structuri de natură proteică",
      "Este asamblat (reconstruit) pentru fiecare mitoză şi dezasamblat la sfârşitul mitozei",
      "În profază, de filamentele lui se ataşează cromatidele prin intermediul kinetocorului de la nivelul centromerului",
      "Este asamblat (reconstruit) pentru fiecare interfază şi dezasamblat la sfârşitul acesteia",
      "Filamentele lui sunt alcătuite din microtubule"
    ],
    "corect": [0, 1, 2, 4]
  },
  {
    "id": "cap1_137",
    "text": "Selectați afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "În celulele umane există 64 de cromozomi, fiecare cu câte o cromatidă/cromozom în faza Gi şi cu câte două cromatide/cromozom după faza S",
      "În celulele umane există 46 de cromozomi, fiecare cu câte o cromatidă/cromozom în faza G₁ și cu câte două cromatide/cromozom după faza S",
      "În interfază, materialul genetic se găseşte sub formă de masă dispersată de ADN (acid dezoxiribonucleic) şi de proteine asociate lui",
      "În mitoză, cromozomii se organizează sub formă de mononucleotide",
      "În metafază, cromozomii se găsesc sub formă de cromatină dispersată"
    ],
    "corect": [1, 2]
  },
  {
    "id": "cap1_138",
    "text": "Alegeți afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "În celulele umane există 92 de cromozomi în faza G",
      "Cu puţine excepții (spre exemplu eritrocitele) toate celulele corpului uman se divid",
      "O moleculă de ATP (adenozin-trifosfat) este formată din adenină (bază azotată), pentoza riboză şi trei unități fosfat şi serveşte drept sursă de energie imediată pentru toate celulele organismului.",
      "In structura fiecărui nucleozom intră milioane de cromozomi",
      "În corpul uman, excesul de căldură poate provoca denaturarea structurii enzimelor implicate în reacțiile chimice"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_139",
    "text": "Selectați răspunsurile și asocierile corecte dintre cele de mai jos:",
    "raspunsuri": [
      "Ciclul celular - interfaza şi mitoza - repetarea creşterii şi reproducerii celulare",
      "Separarea efectivă a celor două celule fiice - citokineza - proces prin care se divide citoplasma, rezultând două celule separate",
      "Replicarea ADN (acidul dezoxiribonucleic) are loc în mitoză",
      "Interfaza cuprinde fazele Gz-S-G3",
      "Telofaza - urmează anafazei -- despiralizarea cromozomilor ajunşi la polii opuşi ai celulei - formarea unor mase de cromatină - dezasamblarea fusului de diviziune"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_140",
    "text": "Selectaţi afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Prin ciclu celular se înţelege reproducerea sexuată a celulei procariote",
      "Pierderea controlului asupra mitozei poate să conducă la apariția cancerului",
      "În celulele umane (exceptând gameţii) sunt 23 cromozomi, fiecare cu câte o cromatidă",
      "În anafază, cromozomii sunt tractați spre polii opuşi ai celulei cu ajutorul filamentelor fusului de diviziune şi adoptă forma literei ,V\"",
      "Mitoza este una dintre perioadele principale ale ciclului celular şi cuprinde mai multe etape succesive"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_141",
    "text": "Selectați asocierile corecte referitoare la fazele ciclului celular:",
    "raspunsuri": [
      "Faza S - interfază - replicarea ADN (acid dezoxiribonucleic)",
      "Faza G2 - mitoză - celula creşte",
      "Faza G1 - sinteză proteică - cromatină despiralizată",
      "Faza G1 – sinteză de enzime - cromatină despiralizată",
      "Faza S- mitoză - replicarea ARN-ului (acidului ribonucleic)"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_142",
    "text": "Alegeți succesiunea corectă a fazelor din derularea ciclului celular:",
    "raspunsuri": [
      "S-G- mitoză - G2",
      "Interfază - profază - metafază - anafază - telofază",
      "G1-S-G2-mitoză",
      "S1 -G-S2-interfază",
      "G₁-S- G2-profază"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_143",
    "text": "Selectați afirmațiile corecte dintre cele de mai jos referitoare la o prezentare succintă a mitozei, aşa cum se desfăşoară în celula umană:",
    "raspunsuri": [
      "În metafază numărul cromatidelor se dublează prin procesul de replicare",
      "În profază se dezasamblează membrana nucleară şi nucleolii dispar",
      "În profaza târzie cromozomii au câte două cromatide surori şi se ataşează de filamentele fusului de diviziune prin intermediul kinetocorului de la nivelul centromerului",
      "În metafază are loc alinierea cromozomilor la polii celulei-mamă",
      "În anafază, câte un set de 46 de cromozomi cu o singură cromatidă migrează spre fiecare din cei doi poli ai celulei"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_144",
    "text": "Care dintre următoarele afirmaţii sunt false?",
    "raspunsuri": [
      "Profaza reprezintă prima etapă a mitozei şi este urmată de metafază",
      "Microtubulii radiari, care înconjoară centriolii ajunşi la polii opuşi ai celulei în profază, poartă numele de aster",
      "Căile metabolice care utilizează catabolismul asigură sinteza moleculelor mari",
      "O enzimă conţine o porţiune cheie denumită substrat şi va acţiona asupra zonei active a produsului final",
      "Similară fagocitozei, exocitoza este o modalitate importantă de locomoție a celulelor secretoare"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_145",
    "text": "Selectați afirmațiile adevărate referitoare la profază:",
    "raspunsuri": [
      "Începe cu despiralizarea cromatinei şi formarea de filamente vizibile",
      "În această etapă se produce condensarea cromatinei cu formarea de filamente vizibile",
      "În această fază există câte patru copii ale fiecărui filament cromozomial",
      "In această etapă există 46 de perechi de cromatide",
      "În această etapă, două structuri macroscopice denumite centromeri migrează spre polii celulei"
    ],
    "corect": [1, 3]
  },
  {
    "id": "cap1_146",
    "text": "În celulele umane aflate în profază:",
    "raspunsuri": [
      "Cele două cromatide surori sunt unite într-o regiune numită centromer",
      "Nucleolii dispar, iar membrana nucleară se dezasamblează",
      "Centriolii (structuri de dimensiuni microscopice) migrează spre acelaşi pol al celulei",
      "Structurile de dimensiuni microscopice - centriolii - migrează spre polii opuşi ai celulei",
      "Centriolii situați la polii opuşi ai celulei sunt înconjurați de microtubuli radiari, denumiți aster"
    ],
    "corect": [0, 1, 3, 4]
  },
  {
    "id": "cap1_147",
    "text": "Selectați afirmațiile false referitoare la profază:",
    "raspunsuri": [
      "Fusul de diviziune se dezasamblează",
      "Învelişul nuclear se dezasamblează",
      "Învelişul nuclear nu suferă modificări",
      "Cromatidele surori (identice între ele), sunt unite la nivelul centromerului",
      "Cromatidele surori (identice între ele), sunt unite la nivelul asterului"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_148",
    "text": "Selectați afirmațiile adevărate referitoare la evenimentele din profază:",
    "raspunsuri": [
      "Centriolii migrează spre polii celulei",
      "Filamentele fusului de diviziune se extind",
      "Centriolii migrează spre placa ecuatorială",
      "Cromatidele se ataşează de filamentele fusului de diviziune prin intermediul unei structuri de la nivelul centromerului numită kinetocor",
      "Cromatidele se ataşează de membrana celulară prin intermediul centromerilor"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_149",
    "text": "Selectați modificările care apar la nivel celular în profază:",
    "raspunsuri": [
      "Cele două cromatide ale cromozomilor se unesc printr-o formaţiune de natură lipidică numită kinetocor",
      "Centriolii poziționați la cei doi poli ai celulei sunt înconjurați de aster, alcătuit din microtubuli dispuşi radiar",
      "Cromatina se ataşează de fusul de diviziune, alcătuit din microfilamente intermediare prin intermediul centromerilor",
      "Kinetocorii conțin o proteină motorie care contribuie la deplasarea cromozomilor în celulă",
      "Membrana dublă a nucleului se dezasamblează şi nucleolii dispar"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_150",
    "text": "Selectați afirmațiile adevărate referitoare la metafază:",
    "raspunsuri": [
      "Este o etapă a mitozei care se desfășoară după profază",
      "Este o etapă a interfazei după care urmează anafaza",
      "Perechile de cromatide sunt aliniate în placa ecuatorială",
      "În această etapă se reface învelişul nuclear",
      "Placa ecuatorială se mai numeşte şi placă metafazică"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_151",
    "text": "Selectați afirmaţiile false referitoare la evenimentele care se desfăşoară în metafază:",
    "raspunsuri": [
      "Fusul de diviziune se dezasamblează",
      "Cromozomii sunt aşezați în planul ecuatorial, formând placa ecuatorială sau placa metafazică",
      "Reapar nucleolii",
      "Se reface învelişul nuclear",
      "Se dezasamblează membrana celulară"
    ],
    "corect": [0, 2, 3, 4]
  },
  {
    "id": "cap1_152",
    "text": "Selectaţi afirmațiile adevărate referitoare la anafază:",
    "raspunsuri": [
      "Cromozomii sunt tractați spre un singur pol al celulei",
      "Cromozomii sunt tractați spre polii opuşi ai celulei",
      "Pe măsură ce migrează spre poli, cromozomii iau forma literei „V\"",
      "Cromozomii sunt ataşaţi de filamentele fusului de diviziune, în zona centromerului",
      "Cromozomii sunt ataşați pe placa ecuatorială"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_153",
    "text": "Selectați afirmaţiile false referitoare la anafază:",
    "raspunsuri": [
      "Se desfăşoară înaintea metafazei",
      "Ca etapă a mitozei este urmată de telofază şi precedată de metafază",
      "Cromozomii cu o singură cromatidă se îndepărtează unul de celălalt, fiind ataşați filamentelor fusului de diviziune",
      "Pentru că unul dintre telomere rămâne în urmă, cromozomii se deplasează spre polii celulei, luând forma literei „Y”",
      "Pe măsură ce migrează, cromozomii iau forma literei „V”, fiind pe toată lungimea lor ataşați de filamentele fusului de diviziune"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_154",
    "text": "Selectați afirmațiile false referitoare la telofază:",
    "raspunsuri": [
      "În derularea ei, cromozomii ajung la polii opuşi ai celulei",
      "Ca etapă în desfăşurarea mitozei, urmează după anafază",
      "Acum se formează fusul de diviziune al următoarei mitoze",
      "Cromatina se condensează şi prin dispersare, formează cromozomii care se deplasează spre poli",
      "Toți cromozomii ajunşi la acelaşi pol al celulei se spiralizează, se dispersează şi formează mase de cromatină"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_155",
    "text": "Selectați asocierile corecte referitoare la evenimentele din telofază:",
    "raspunsuri": [
      "Fus de diviziune - formare",
      "Fus de diviziune - dezasamblare",
      "Înveliş nuclear - refacere",
      "Înveliş nuclear - dezasamblare",
      "Nucleolii - reapariție"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_156",
    "text": "Selectați enunțurile care conțin câte două afirmații adevărate referitoare la evenimentele din telofază:",
    "raspunsuri": [
      "Cromozomii ajung la polii opuşi ai celulei. Se reface învelişul nuclear",
      "Se dezasamblează învelişul nuclear. Se formează fusul de diviziune",
      "Cromozomii se despiralizează şi se dispersează pentru a forma mase de cromatină. Reapar nucleolii",
      "Se dezasamblează fusul de diviziune. Dispar nucleolii",
      "Se reface învelişul celular. Se formează cromozomii cu câte două centromere surori"
    ],
    "corect": [0, 2]
  },
  {
    "id": "cap1_157",
    "text": "Selectați evenimentele care nu se petrec în mitoză:",
    "raspunsuri": [
      "Începe condensarea cromatinei în metafază",
      "În profază, centriolii migrează spre polii opuşi ai celulei",
      "Centromerii se ataşează de filamentele fusului de diviziune prin cromatide (proteine motorii)",
      "În metafază,toate perechile de nucleotide se aliniază la polii celulei",
      "In anafază, spre fiecare pol al celulei se deplasează câte 46 de cromozomi"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_158",
    "text": "Selectați afirmațiile adevărate referitoare la citokineză:",
    "raspunsuri": [
      "Are loc în interfază, înaintea profazei",
      "Este procesul prin care citoplasma se divide şi se formează două celule separate (celulele fiice)",
      "Este procesul de unire a celor două celule fiice, dând naştere unei noi celule unice",
      "Este procesul prin care citoplasma celulei care se divide se distribuie între cele două celule fiice",
      "Începe prin apariția unui şanţ de clivare la nivelul plăcii ecuatoriale"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_159",
    "text": "Selectați asocierile corecte dintre cele de mai jos:",
    "raspunsuri": [
      "Şanţ de clivare - şanţ apărut la nivelul kinetocorului",
      "Citokineza - separarea celor două celule fiice",
      "Mitoza şi citokineza - permit creşterea organismului prin reproducere sexuată",
      "Clivaj celular - strangularea citoplasmei de către membrana celulară, prin contracția microfilamentelor, finalizată cu formarea celulelor fiice",
      "Mitoza şi citokineza – înlocuirea celulelor îmbătrânite şi deteriorate, prin formare de noi celule"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_160",
    "text": "Selectați afirmațiile false referitoare la clivajul celular:",
    "raspunsuri": [
      "Este posibil datorită contracției microfilamentelor",
      "Este posibil datorită relaxării microfilamentelor",
      "Reprezintă unirea celor două celule fiice",
      "Reprezintă separarea celor două celule fiice",
      "Are loc între metafază şi telofază"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_161",
    "text": "Selectați afirmațiile adevărate referitoare la mitoză:",
    "raspunsuri": [
      "Permite organismului să crească prin formarca de noi celule",
      "Presupune formarea de celule îmbătrânite",
      "Permite înlocuirea celulelor îmbătrânite sau deteriorate, cu celule noi",
      "Cuprinde mai multe etape succesive şi alături de interfaza participă la alcătuirea ciclului celular",
      "Mai poartă numele de diviziune meiotică"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_162",
    "text": "Selectați afirmațiile adevărate cu privire la mitoză:",
    "raspunsuri": [
      "In profază, membrana nucleară şi nucleolii dispar iar cromatina se condensează",
      "În metafază, centriolii se aliniază în planul ecuatorial, formând placa ecuatorială",
      "În anafază, cromozomii cu o singură cromatidă se deplasează către cei doi poli",
      "În telofază, cromozomii se condensează, devenind vizibili şi se reasamblează nucleolii formaţi din ADN",
      "Pierderea controlului asupra mitozei poate avea drept cauză o mutație a ADN-ului (acidului dezoxiribonucleic)"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_163",
    "text": "Selectați afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Cromozomii se despiralizează în telofază",
      "Profaza timpurie urmează profazei târzii",
      "Segmentele funcționale ale cromozomilor sunt denumite gene",
      "Există circa 30.000 de gene în nucleii celulelor umane",
      "Glicolipidele membranare sunt depozitarii informației genetice în celula procariotă"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_164",
    "text": "Selectați afirmaţiile adevărate referitoare la boala canceroasă (cancer):",
    "raspunsuri": [
      "Presupune creşterea ritmului de derulare a mitozelor",
      "Presupune scăderea ritmului de derulare a mitozelor",
      "Este o afecţiune în care celulele canceroase, care nu funcționează normal, se pot răspândi în organism",
      "Poate să apară în urma unei mutații suferite de ADN (acidul dezoxiribonucleic)",
      "Nu presupune pierderea controlului mitozei, ci doar o răspândire accelerată a unor celule care funcţionează normal în organism"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_165",
    "text": "Alegeți afirmațiile adevärate referitoare la cromozomi:",
    "raspunsuri": [
      "Baza azotată uracil şi monozaharidul riboză sunt substanțe organice prezente în structura cromozomilor",
      "În alcătuirea cromozomilor se regăsesc proteinele denumite histone şi acidul dezoxiribonucleic",
      "Vitamina C este absentă din structura cromozomilor",
      "Prin supraspiralizare, cromozomii vor forma cromatină condensată",
      "Compactarea suplimentară a ADN-ului şi formarea cromozomilor condensați se realizează prin supraspiralizarea nucleozomilor"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_166",
    "text": "Selectați afirmațiile adevărate cu privire la gene:",
    "raspunsuri": [
      "Sunt segmente funcționale ale cromozomilor",
      "Sunt în număr de circa 3x10 în nucleii celulelor umane",
      "Pe una dintre moleculele ADN ale dublului helix, la locul unde gena va fi exprimată, se leagă enzima ARN-polimerază, declanşând transcripția",
      "Genele sunt ţinute sub control în timpul mitozei, cromozomul fiind compactat",
      "Conțin secvențe nucleotidice cu uracil şi riboză"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_167",
    "text": "Selectați afirmațiile adevărate despre acizii nucleici:",
    "raspunsuri": [
      "ADN (acid dezoxiribonucleic) este format din baze azotate, riboză şi acid fosforic",
      "ARN (acid ribonucleic) este format din baze azotate, dezoxiriboză, riboză şi acid fosforic",
      "Când o catenă din dublul helix al ADN-ului (acidul dezoxiribonucleic) funcționează în transcripție, cealaltă catenă rămâne dormantă",
      "Pentru a forma molecule de ARNm, celula îndepărtează secvențele intercalate necodante ale ARN, denumite exoni",
      "Pentru a forma moleculele de ARNm final, celula îndepărtează secvențe intercalate necodante de ARN, denumite introni"
    ],
    "corect": [2, 4]
  },
  {
    "id": "cap1_168",
    "text": "Despre acizii nucleici este adevărat că:",
    "raspunsuri": [
      "Succesiunea nucleotidelor (cu bazele azotate) din ADN reprezintă codul genetic şi determină secvența în care sunt legați aminoacizii în proteine",
      "ARN-ul transportă instrucțiuni de la ADN-ul nuclear în citoplasmă, unde la nivelul ribozomilor, are loc sinteza proteică",
      "Una dintre diferențele structurale între ARN şi ADN constă în prezența ribozei în ARN şi a dezoxiribozei în ADN",
      "Una dintre diferențele structurale între ARN şi ADN implică baza azotată uracil, prezentă în núcleotidele ADN-ului şi absentă în nucleotidele ARN-ului",
      "Sunt implicați în procesele de transcripție şi translație"
    ],
    "corect": [0, 1, 2, 4]
  },
  {
    "id": "cap1_169",
    "text": "Despre cromozomi se poate afirma că:",
    "raspunsuri": [
      "Reprezintă unitățile liniare în care este organizat ADN-ul în nucleul celulei",
      "Conţin segmente funcţionale denumite gene",
      "Fiecare cromozom este alcătuit din milioane de unități numite nucleozomi",
      "Se formează prin condensarea ARN-ului, înfăşurarea porțiunilor de ARN în jurul complexelor de histone, formând nucleozomii, urmată de supraspiralizarea nucleozomilor",
      "Cromozomii condensați rezultă din despiralizarea nucleozomilor"
    ],
    "corect": [0, 1, 2]
  },
  {
    "id": "cap1_170",
    "text": "Despre proteine este adevărat că:",
    "raspunsuri": [
      "Sunt compuşi anorganici, folosiți ca enzime în reacțiile chimice din celule",
      "Sunt compuşi organici, utilizați şi ca materiale de structură în celulele corpului",
      "Apar în structura microtubulilor şi a microfilamentelor",
      "Lipsesc în structura citoscheletului, format din microtubuli, microfilamente şi filamente intermediare",
      "Pot fi molecule specializate, care vor fi exportate de către celule pentru a fi utilizate în diverse activități extracelulare"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_171",
    "text": "Selectați informațiile corecte referitoare la structura și rolul acizilor nucleici în sinteza proteică:",
    "raspunsuri": [
      "Secvența de aminoacizi dintr-o proteină este determinată de succesiunea nucleotidelor din ADN (nucleotide în componența cărora intră bazele azotate)",
      "ADN-ul (acidul dezoxiribonucleic) conține baza azotată timină, în timp ce ARN-ul (acidul ribonucleic) nu conține uracil",
      "Structurile citoplasmatice conținând ARN (acid ribonucleic) şi în care sunt legați între ei aminoacizii pentru a forma proteine, se numesc ribozomi",
      "Acidul nucleic responsabil de transportul informației de la ADN în citoplasmă este ARNt",
      "Moleculele de ARNt (ARN de transfer) se găsesc libere în citoplasmă şi transportă aminoacizii la ribozomi"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_172",
    "text": "Selectați afirmațiile adevărate referitoare la etapa de translație din cursul sintezei proteice:",
    "raspunsuri": [
      "Este procesul prin care se formează o catenă proteică prin ataşarea în lanț a bazelor azotate complementare până la apariția codonului stop",
      "Reprezintă etapa în care se foloseşte secvența de codoni a ARNm pentru a ghida secvența de aminoacizi a proteinelor",
      "Este etapa în care molecula de acid dezoxiribonucleic părăseşte nucleul celulei şi ajunge în citoplasmă la ribozomi",
      "Este etapa în care molecula de ARNm, ajunsă la ribozomi, îşi expune codonii (triplete, adică seturi de câte 3 nucleotide, care conțin bazele azotate)",
      "Este etapa în care codul genetic este „decodificat” într-o secvență de aminoacizi din proteină"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_173",
    "text": "Selectați afirmațiile adevărate referitoare la evenimentele din cadrul sintezei proteice:",
    "raspunsuri": [
      "ARN-ul de transfer (ARNt) aduce informația conform căreia se realizează legăturile dintre aminoacizi pentru a forma lanțul proteic",
      "Prin unirea mai multor sute de mii de aminoacizi în lizozomi rezultă o moleculă organică numită proteină",
      "Odată utilizată, molecula de ARNm este degradată şi nucleotidele sale se întorc în nucleu",
      "Odată sintetizată, proteina este îndepărtată din ribozomi pentru a putea fi procesată în continuare (ea poate fi modificată în aparatul Golgi)",
      "Sinteza moleculelor de ARNm are loc în nucleu, fiind declanşată de ARN-polimerază (care se leagă la una dintre catenele dublului helix al ADN, la locul unde gena va fi exprimată)"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_174",
    "text": "Sintetic, transcripția în procesul sintezei proteice este descrisă astfel:",
    "raspunsuri": [
      "O catenă de ARNm se formează conform secvenței de baze complementare dintr-o catenă de ADN",
      "Prin sinteza ARNm se transcrie informația ADN-ului pe o moleculă ARN",
      "Molecula de ARNm transportă mesajul genetic la nucleu pentru sinteza proteică",
      "Molecula ARNr este responsabilă de secvenţa de aminoacizi din structura proteinei, ea deținând anticodonul",
      "Odată sintetizată, molecula de ARNm transportă mesajul în citoplasmă (la ribozomi) pentru sinteza proteică"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_175",
    "text": "Sintetic, translația în procesul sintezei proteice este descrisă astfel:",
    "raspunsuri": [
      "O catenă de ARNt conținând codonul soseşte la ribozom, unde întâlneşte molecule de ARNr, care transportă acizii aminați",
      "Molecula de ARNm conţine codonul şi soseşte la ribozom, unde întâlneşte molecula de ARNt, care conține anticodonul şi transportă aminoacidul corespunzător",
      "La întâlnirea codonului de pe ARNm cu anticodonul de pe ARNt, bazele complementare se împerechează şi are loc cedarea aminoacidului transportat de ARNt",
      "Complementaritatea codon - anticodon plasează aminoacizii într-o anumită poziție, apoi aceştia sunt detaşați de lanțul proteic care creşte",
      "Complementaritatea codon - anticodon plasează aminoacizii într-o anumită poziție, apoi aceştia sunt ataşați lanțului proteic care creşte"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_176",
    "text": "Alegeți afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "ARN-polimeraza se leagă de una dintre catenele dublului helix al ADN, la locul unde gena va fi exprimată, declanşând transcripția",
      "Procesul de translație constă în „decodificarea” secvenței de nucleotide a ARNm, într-o secvenţa de aminoacizi din proteină",
      "Transcripția are loc în citoplasma celulei",
      "Translația se desfășoară în interiorul lizozomilor",
      "ADN-ul (acidul dezoxiribonucleic) se găseşte majoritar în nucleu, dar este prezent și în mitocondrie"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_177",
    "text": "Alegeți afirmațiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Translația este procesul prin care secvența de aminoacizi din proteină este codificată, rezultând o secvență de nucleotide în ADN (acid dezoxiribonucleic)",
      "Reticulul endoplasmatic neted nu prezintă pe suprafața sa ribozomi",
      "În citoplasma celulei nu se întâlnesc ribozomi liberi",
      "Mitocondria este sediul respirației celulare şi furnizează ATP-ul necesar diferitelor activități celulare",
      "În etapa de translație din cadrul sintezei proteice, când codonul moleculei de ARNm îşi întâlneşte anticodonul de pe molecula de ARNt, bazele lor se împerechează în mod complementar, poziționând astfel aminoacidul transportat de ARNt"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_178",
    "text": "Alegeți afirmațiile false dintre cele de mai jos:",
    "raspunsuri": [
      "Reticulul endoplasmatic neted reprezintă sediul exclusiv al sintezei proteice",
      "La finalul translației, moleculele de ADN (acid dezoxiribonucleic) se spiralează la loc pentru a forma din nou helixul triplu caracteristic",
      "Translația începe prin ataşarea la ribozom a moleculei de ARNm, care îşi expune bazele în cadrul seturilor de câte trei nucleotide (îşi expune codonii)",
      "Translația începe cu ataşarea la centrozom a moleculei de ARNm, care îşi expune bazele în seturi de câte trei (îşi expune anticodonii complementari)",
      "Molecula de ARNt prezintă anticodonul, care se împerechează cu codonul complementar de pe ARNm"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_179",
    "text": "Alegeți afirmațiile false dintre cele de mai jos:",
    "raspunsuri": [
      "În translație, nucleotidele ARNm se citesc în grupuri de câte două, denumite codoni",
      "În procesul de transcripție, molecula de ARNm este copiată de pe o singură catenă din dublul helix al ADN-ului (acidului dezoxiribonucleic)",
      "În procesul de transcripție, enzima ADN-polimerază se leagă de una dintre moleculele de ADN ale dublului helix, cealaltă catenă rămânând dormantă",
      "ARNt transportă aminoacizii la lizozom, unde va avea loc translaţia informației pentru formarea lanțului peptidic",
      "Odată sintetizată, proteina se desprinde de ribozom, urmând a fi procesată în continuare"
    ],
    "corect": [0, 2, 3]
  },

  {
    "id": "cap1_180",
    "text": "Care dintre informațiile de mai jos despre sinteza proteică sunt adevărate:",
    "raspunsuri": [
      "Translația („decodificarea” codului genetic într-o secvență de aminoacizi) precede transcripţia",
      "O catenă de ARNm este sintetizată prin transcripție de pe ADN (acidul dezoxiribonucleic), conform principiului complementarității bazelor azotate",
      "ARNm prezintă un anticodon care întâlneşte codonul de pe ARNt, permițând împerecherea bazelor azotate complementare",
      "Transcripția are loc în nucleul celulei, fiind urmată de deplasarea ARNm în citoplasmă şi de ataşarea lui la ribozomi",
      "Transcripţia începe odată cu legarea ARN-polimerazei de una dintre catenele dublului helix al ADN-ului (acidul dezoxiribonucleic), cealaltă catenă rămânând dormantă"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_181",
    "text": "Alegeți asocierile corecte referitoare la sinteza proteică:",
    "raspunsuri": [
      "Secvență în ADN (citozina-timină-adenină) - transcripție - secvență în ARNm (guanină-adenină-uracil)",
      "ARN de reglare - copierea codului genetic al ARNm prin transcripţie - transferul informației pe ARNt",
      "Codon „stop” - codon care codifică un aminoacid - codon care continuă alungirea lanțului proteic",
      "ARNt - molecule libere în citoplasma celulelor și care conțin anticodonul - ataşare de aminoacizi specifici şi transportul lor la ribozomi",
      "Introni - secvențe intercalate necodante ale ARNm - îndepărtare când se finalizează structura moleculei de ARNm"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_182",
    "text": "Alegeți afirmaţiile adevărate despre sinteza proteinelor:",
    "raspunsuri": [
      "Transcripţia este procesul prin care codul genetic este copiat de pe ARNm într-o secvență de aminoacizi",
      "În transcripţie, catena ARNm este sintetizată pe principiul complementarității bazelor neazotate ale ADN",
      "Transcripţia (o primă etapă în sinteza proteică) este urmată de translație",
      "Enzima ARN-polimerază participă la transcripţie, legându-se de catena de ADN (matriță) la locul unde gena va fi exprimată",
      "Enzima ARN-polimerază se deplasează de-a lungul catenei de ADN (matriță) citind nucleotidele una câte una"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_183",
    "text": "Pentru ca sinteza proteică să aibă loc sunt necesare următoarele:",
    "raspunsuri": [
      "Enzime (colinesteraza), ADN monocatenar, ARNm",
      "Aminoacizi din rezerva care intră în componența majorității proteinelor",
      "Rezerva de 200 de aminoacizi, care compun majoritatea proteinelor",
      "Enzime, ADN (acid dezoxiribonucleic), ARNm (mesager), ARNt (de transfer)",
      "ARNr (ribozomal), ca parte componentă a ribozomilor şi ARNm (mesager), care primeşte codul genetic al ADN-ului şi îl transportă în citoplasmă"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_184",
    "text": "Selectați afirmaţiile adevărate cu privire la codul genetic și sinteza de proteine:",
    "raspunsuri": [
      "Codonul este o secvență de trei nucleotide (în componența cărora intră bazele azotate) care aparține moleculei de ARNm și care se va împerechea cu anticodonul (complementar) de pe molecula de ARNt",
      "Există trei codoni „stop” care codifică aminoacizi şi anunță ribozomul să continue alungirea lanțului proteic",
      "După ce transcripția a avut loc, molecula de ARNm se modifică pentru a regla activitatea genică, prin îndepărtarea unor secvențe intercalate necodante, numite introni",
      "Codul genetic constă în succesiunea bazelor azotate din structura proteinelor",
      "Odată utilizate în sinteza proteică, moleculele de ARNm sunt degradate şi nucleotidele care au intrat în componența lor se întorc în nucleu"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_185",
    "text": "Molecula de ARN mesager final conține:",
    "raspunsuri": [
      "Introni, dar nu exoni (secvențe intercalate care par a nu deține informație genetică legată de sinteza proteică)",
      "Exoni (secvențe codante), dar nu introni (secvențe necodante)",
      "Regiuni funcționale din structura genelor folosite efectiv pentru codificarea proteinelor unei celule",
      "Exoni, care deşi formează doar aproximativ 5% din totalul materialului genetic al unei celule umane, reprezintă partea exprimată a genomului uman",
      "Regiuni nefuncționale din structura genelor, denumite exoni"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_186",
    "text": "Selectați informațiile adevărate cu privire la controlul genetic:",
    "raspunsuri": [
      "Celula reglează şi controlează expresia genică (ea nu produce în permanență toate tipurile de proteine, ceea ce ar însemna o funcționare neeconomică)",
      "După îndepărtarea intronilor (segmente care nu par a deține nici o informație genetică legată de sinteza proteică), se formează molecula finală de ARNm prin unirea exonilor (regiunile funcționale din structura genelor)",
      "Controlul expresiei genice a fiecărei celule apare la un singur nivel celular (doar în transcripţie)",
      "În timpul mitozei, supraspiralizarea şi compactarea cromozomului nu influențează accesul la gene.",
      "Expresia genică este controlată și de către ARN-urile de reglare, ale căror mecanisme de acțiune sunt încă în stadiu de cercetare"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_187",
    "text": "Alegeți afirmaţiile adevărate despre materialul nuclear al celulei umane:",
    "raspunsuri": [
      "Este reprezentat de o moleculă de ADN circular care formează cromozomii în diviziune",
      "Conține ADN (acid dezoxiribonucleic) şi proteine",
      "În nucleii celulelor umane există circa 30000 de gene (segmente funcționale ale cromozomilor)",
      "O genă reprezintă întreaga informație genetică conținută într-un cromozom",
      "ADN-ul şi histonele se organizează în nucleozomi, iar aceştia, prin supraspiralizare, formează cromozomul condensat"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_188",
    "text": "Alegeți, dintre enunțurile de mai jos, pe cele care conțin prima afirmaţie adevărată și a doua afirmație falsă:",
    "raspunsuri": [
      "Reproducerea celulară nu depinde de structura și nici de conținutul nucleului celulei. Hematiile adulte (globulele roșii) nu se divid",
      "În tractul gastrointestinal celulele se divid frecvent, spre deosebire de alte țesuturi ale corpului. Fiecare nucleozom este alcătuit din milioane de cromozomi",
      "Reproducerea asexuată constă în diviziunea unei celule în cele două celule fiice identice. Reproducerea sexuată nu este caracteristică speciei umane",
      "Formarea de noi celule pentru creştere, reparare sau înlocuire se realizează prin reproducere asexuată. Înainte de a fi transportate spre destinațiile finale, proteinele sunt procesate în exteriorul celulei",
      "După finalizarea translației, proteina poate fi trimisă lizozomilor pentru a servi ca enzimă în digestia celulară. Controlul expresiei genice apare la mai multe niveluri în celulă"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_189",
    "text": "Alegeți asocierile corecte dintre cele de mai jos:",
    "raspunsuri": [
      "ATP - adenozin-trifosfat - sursă de energie imediată pentru toate celulele organismului",
      "Centrozomi - unități formate din dublu helix de ADN înfăşurat în jurul complexului de histone - se grupează de ordinul miilor în cromozom",
      "Cromoproteină - masă dispersată de ADN şi proteine asociate se formează prin spiralizarea cromozomilor",
      "Introni - secvențe necodante - nu dețin informație genetică legată de sinteza proteică - sunt prezenți în toate celulele umane nucleate",
      "Exoni - regiunile funcționale din structura genelor - partea exprimată a genomului uman"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_190",
    "text": "Alegeți asocierile corecte dintre cele de mai jos:",
    "raspunsuri": [
      "Cili - expansiuni scurte și numeroase - celule ale tractului respirator",
      "Celulă matură anucleată - leucocit - element figurat al sângelui",
      "Celula nervoasă - oligodedrocitul - mai multe prelungiri - generarea impulsului nervos",
      "Celulă cu con și celulă cu bastonaş - neuroni receptori - retină (stratul intern)",
      "Mugure gustativ - celule specializate cu microvilozități - fibre nervoase senzoriale ale nervilor VII şi IX"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_191",
    "text": "Despre celulele sexuale (gameţi) se poate afirma că:",
    "raspunsuri": [
      "Ovulele se formează în ovar prin procesul de oogeneză, care începe încă din viața intrauterină",
      "Gametul feminin (oocitul primar) este eliberat lunar din foliculul ovarian aflat în curs de dezvoltare",
      "Gametul masculin (spermatozoidul) haploid (n) cu 23 de cromozomi ia naştere prin procesul de spermatogeneză",
      "Spermatozoidul prezintă mai multe regiuni: cap, gât, piesă intermediară și coada",
      "Cei doi gameți (masculin şi feminin) se pot uni în procesul fecundației, dând naştere zigotului haploid (n) cu 46 de cromozomi în nucleu"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_192",
    "text": "Despre membrana celulară (plasmatică) se poate afirma că:",
    "raspunsuri": [
      "Nu este permeabilă pentru molecule mici (apă, oxigen)",
      "La celula (fibra) musculară poartă denumirea de sarcolemă",
      "Permite trecerea prin difuziune a unor molecule mici de solvit",
      "Sarcolema poate prezenta un sistem de invaginări (sistemul tubilor transversali sau al tubilor T)",
      "În timpul endocitozei, o mică porțiune a membranei celulare se pliază şi înglobează particule din interiorul celulei, pe care le va elimina în exterior"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_193",
    "text": "Despre relația celule - energie sunt adevărate următoarele:",
    "raspunsuri": [
      "Fiecare reacție chimică a organismului implică schimb de energie",
      "Orice reacție chimică în care se eliberează energie se numeşte endergonică",
      "Energia produsă în timpul reacțiilor exergonice ale catabolismului este stocată în molecule de ATP (adenozin-trifosfat)",
      "O cale metabolică este o secvență de transformări fizice desfășurată exclusiv în exteriorul celulei",
      "Pentru a se declanşa o reacţie chimică, este nevoie de un aport energetic denumit energie de activare"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_194",
    "text": "Referitor la osmoză, este adevărat că:",
    "raspunsuri": [
      "Dacă celulele umane sunt introduse într-o soluție hipertonă, concentrația mai mare de solvit se află în interiorul celulelor",
      "Apa se deplasează din citoplasma celulei introdusă în soluție hipertonă înspre exteriorul celulei, celula micşorându-se",
      "Dacă celulele umane sunt introduse în soluție izotonă, nu are loc osmoza",
      "În cazul unei celule umane introduse într-o soluție hipotonă, concentrația mai mică de sare se află în exteriorul celulei",
      "Osmoza reprezintă difuziunea moleculelor de apă printr-o membrană impermeabilă, dinspre soluția hipotonă spre soluția hipertonă"
    ],
    "corect": [1, 2, 3]
  },
  {
    "id": "cap1_195",
    "text": "Alegeți asocierile corecte referitoare la sistemele de organe, componentele lor majore și funcțiile lor:",
    "raspunsuri": [
      "Scheletul - protejează corpul - oferă suport pentru locomoţie - conține oasele corpului",
      "Sistemul respirator - inimă, vase sanguine, sânge, structuri limfatice - asigură aportul de oxigen",
      "Sistemul digestiv - include digestia şi absorbția nutrienților insolubili din hrană - stomacul, pancreasul şi splina",
      "Sistemul endocrin - coordonare și integrare chimică a activităților organismului - hipofiza, tiroida, alte glande endocrine",
      "Sistemul nervos - include encefalul, măduva spinării, nervii - coordonează funcțiile organismului"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_196",
    "text": "Alegeți răspunsurile greşite dintre cele de mai jos:",
    "raspunsuri": [
      "Tegumentul, ca sistem de organe, include pielea, fără să includă părul, unghiile şi glandele sudoripare",
      "Glandele salivare, glandele sudoripare, hipofiza, glandele suprarenale și tiroida aparțin sistemului endocrin",
      "Sistemul reproducător produce celulele sexuale necesare procreării",
      "Sistemul imun este în strânsă legătură cu sistemul limfatic și funcționează prin intermediul celulelor acestuia (limfocite T, limfocite B)",
      "Sistemul nervos interacționează cu agenți străini şi asigură imunitatea corpului"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_197",
    "text": "Alegeți afirmaţiile adevărate despre diferitele funcții ale organismului uman și ale componentelor sale:",
    "raspunsuri": [
      "Organismul uman are aceleași funcții cu ale celorlalte viețuitoare și cu ale structurilor anorganice (lipsite de viață)",
      "Funcțiile care diferențiază organismul de tot ceea ce nu prezintă viață permit celulelor sale să îşi desfăşoare activitățile necesare creşterii şi supraviețuirii",
      "Metabolismului - funcție importantă a viețuitoarelor - îi este furnizată materia primă de către procese vitale precum digestia, respirația, circulația",
      "Digestia, respirația, circulația și excreția sunt adaptate şi pentru furnizarea de materie primă metabolismului, cât şi pentru îndepărtarea produşilor săi de degradare",
      "Mişcarea şi excreția reprezintă funcții ale unor structuri specializate ale organismului"
    ],
    "corect": [1, 2, 3, 4]
  },
  {
    "id": "cap1_198",
    "text": "Sunt funcții ale diferitelor structuri ale organismului sau ale organismului ca întreg:",
    "raspunsuri": [
      "Mişcarea - rezultat al contracției celulelor musculare",
      "Mişcarea la realizarea căreia participă doar oasele şi cartilajele sistemului scheletic",
      "Creşterea în dimensiuni a corpului (mărirea masei sale)",
      "Reproducerea sexuată și asexuată",
      "Conductibilitatea - răspunsul organismului la un stimul extern sau intern"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_199",
    "text": "Despre diviziunile suplimentare ale cavității abdomino-pelviene, este adevărat că:",
    "raspunsuri": [
      "Se descriu două regiuni ombilicale și două regiuni epigastrice (drepte şi stângi)",
      "Se descriu nouă regiuni diferite, care includ regiunea ombilicală, situată central",
      "Regiunea hipogastrică este situată imediat superior de regiunea ombilicală",
      "Lateral de regiunea epigastrică se află hipocondrul drept și hipocondrul stâng",
      "Lateral de regiunea hipogastrică se află regiunile inghinale (iliace) dreaptă și stângă"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_200",
    "text": "Alegeți afirmaţiile adevărate dintre cele de mai jos, referitoare la organitele celulei şi la funcţiile lor:",
    "raspunsuri": [
      "În mitocondrie, energia rezultată din degradarea moleculelor glucidice, lipidice sau de natură proteică, este folosită pentru a forma molecule de adenozin-trifosfat, care servesc nevoilor energetice ale celulei",
      "Dacă un număr mare de celule mor din cauza absenței oxigenului și a ATP-ului, organismul va continua să funcționeze normal până la refacerea rezervelor",
      "Citoscheletul este format din nucleozomi şi cromatină",
      "Centrozomul este poziționat în vecinătatea nucleului, fiind format din doi centrioli în formă de tijă și intervine în procesul de diviziune celulară (mitoză)",
      "Lizozomii sunt saci membranoşi care conțin enzime pentru digestia intracelulară"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_201",
    "text": "Următoarele afirmaţii referitoare la diverse structuri de natură proteică sunt adevărate:",
    "raspunsuri": [
      "Intră în alcătuirea citoscheletului, o rețea intracelulară de atomi, protoni şi ioni",
      "Intră în alcătuirea citoscheletului, o rețea intracelulară de fibre, filamente și molecule îmbinate",
      "Sinteza lor are loc în citoplasma celulei şi necesită prezenţa acizilor graşi şi a ATP-ului",
      "Pentru a putea fi utilizată în catabolismul energetic, proteinele sunt mai întâi scindate în aminoacizi",
      "Excesul de căldură poate provoca modificarea structurii proteinelor (denaturarea)"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_202",
    "text": "Care dintre următoarele afirmaţii referitoare la citoschelet sunt adevărate?",
    "raspunsuri": [
      "Este o rețea interconectată de fibre, filamente și molecule prezente în nucleul celulelor",
      "Microtubulii, macrofilamentele și filamentele intermediare sunt componente ale citoscheletului",
      "Datorită alcătuirii sale, serveşte drept structură de suport pentru celulă",
      "Toate componentele citoscheletului sunt alcătuite din subunități lipidice",
      "Toate elementele componente ale citoscheletului sunt de natură proteică"
    ],
    "corect": [2, 4]
  },
  {
    "id": "cap1_203",
    "text": "Selectați afirmaţiile false referitoare la mitocondrii:",
    "raspunsuri": [
      "Sunt organite intracitoplasmatice în care are loc degradarea sărurilor minerale",
      "La nivelul lor are loc sinteza moleculelor de ATP (adenozin-trifosfat), care reprezintă o sursă de energie pentru toate celulele organismului",
      "La nivelul lor are loc digestia celulară, din acest motiv fiind denumite şi „generatoarele celulei”",
      "Pentru producerea de ATP (adenozin-trifosfat), mitocondriile nu au nevoie de prezența oxigenului",
      "Sunt sediul glicolizei anaerobe, furnizând astfel o mare cantitate de energie"
    ],
    "corect": [0, 2, 3, 4]
  },
  {
    "id": "cap1_204",
    "text": "Care dintre următoarele afirmaţii referitoare la organitele citoplasmatice sunt false?",
    "raspunsuri": [
      "La nivelul organitelor citoplasmatice se desfășoară diverse funcții celulare",
      "Ribozomii sunt organite alcătuite din lipide şi ARN",
      "Reticulul endoplasmatic neted este alcătuit dintr-un ansamblu de membrane care prezintă ribozomi atașați pe suprafața lor",
      "Reticulul endoplasmatic neted specializat din citoplasma unei fibre musculare se numeşte sarcoplasmic (sarcoplasmatic)",
      "Aparatul Golgi este alcătuit dintr-o structură non-membranoasă compusă din doi centrioli în formă de tijă"
    ],
    "corect": [1, 2, 4]
  },
  {
    "id": "cap1_205",
    "text": "Care dintre afirmaţiile următoare sunt false?",
    "raspunsuri": [
      "Sinteza ARN-ului mesager (ARNm) se numeşte transcripţie şi se desfăşoară în citoplasmă",
      "ARN-ul de transfer (ARNt) primește codul genetic al ADN-ului și îl transportă în citoplasmă",
      "În procesul de transcripție informația genetică este transferată din molecula de ADN pe cea de ARN mesager (ARNm)",
      "După ce a fost sintetizat prin procesul de translație, ARN-ul mesager (ARNm) trece din citoplasmă în nucleu printr-un por nuclear",
      "Translația începe cu atașarea moleculei de ARNm la ribozom"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_206",
    "text": "Selectați afirmaţiile adevărate referitoare la structura ARN şi diferitele tipuri de ARN:",
    "raspunsuri": [
      "ARN-ul ribozomal (ARNr) intră în structura ribozomilor, organite la nivelul cărora are loc legarea acizilor graşi între ei pentru formarea proteinelor",
      "ARN-ul ribozomal (ARNr) este parte din structura ribozomilor, organite la nivelul cărora are loc legarea aminoacizilor între ei pentru formarea proteinelor",
      "ARN-ul este similar ADN-ului, cu excepția localizării lui în celulă",
      "Una dintre diferențele structurale între ARN şi ADN este prezenţa pentozei riboză în ARN (şi absența ei în ADN, unde se regăseşte dezoxiriboza)",
      "Moleculele de ARN de transfer (ARNt) transportă aminoacizii la ribozomi în timpul sintezei proteice"
    ],
    "corect": [1, 3, 4]
  },
  {
    "id": "cap1_207",
    "text": "Selectați afirmaţiile adevărate referitoare la procesul de transcripție:",
    "raspunsuri": [
      "Reprezintă o primă etapă a sintezei proteice, etapă în care o catenă de ARNm este sintetizată conform secvenței de baze complementare dintr-o catenă de ADN",
      "Se desfășoară în citoplasmă și se finalizează cu sinteza ARN-ului mesager (ARNm)",
      "Are loc la nivelul ribozomilor şi reprezintă etapa finală a sintezei proteice",
      "Implică prezența enzimei ARN-polimerază, care se deplasează de-a lungul catenei de ADN, citind nucleotidele una câte una",
      "Alte enzime selectează nucleotidele disponibile cu baze complementare, pe care le dispun astfel încât să formeze o moleculă de ARNm, conform principiul complementarității bazelor azotate"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_208",
    "text": "Selectați afirmaţiile false cu privire la procesul de transcripție:",
    "raspunsuri": [
      "Rezultatul acestui proces este sinteza enzimei ARN-polimerază, care va părăsi nucleul pentru a-şi exercita activitatea în citoplasmă",
      "Prin acest proces, secvența AACGTC de pe catena de ADN este copiată (conform complementarității bazelor) rezultând secvența UUGCAG pe catena de ARN nou sintetizat",
      "Procesul se încheie când enzima ARN-polimerază se leagă de una dintre catenele dublului helix de ADN (catenă inactivă)",
      "În timpul derulării procesului, enzima ARN-polimerază se deplasează de-a lungul catenei de ADN (catena matriță) care va fi transcrisă în ARNm",
      "Atunci când se primește un semnal de încheiere a transcripţiei, catena de ADN transcrisă trece în citoplasmă, transportând mesajul genetic"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_209",
    "text": "Selectați afirmaţiile adevărate referitoare la procesul de transcripţie:",
    "raspunsuri": [
      "Molecula de ARN mesager (ARNm) rezultată conține secvențe necodante numite exoni și regiuni funcționale numite introni",
      "Moleculele de acid nucleic rezultate conţin o succesiune de aminoacizi",
      "Molecula de ARN mesager (ARNm) rezultată conține secvențe necodante, secvențe numite introni (care nu par a deține informație genetică) și regiuni funcționale numite exoni",
      "În acest proces, molecula de ARN mesager (ARNm) este sintetizată conform principiului complementarității bazelor azotate conținute în ADN",
      "În cursul acestui proces, molecula de ADN este sintetizată conform secvenței complementare de baze azotate din ARN mesager (ARNm)"
    ],
    "corect": [2, 3]
  },
  {
    "id": "cap1_210",
    "text": "Despre transcripţie şi translație sunt adevărate următoarele asocieri:",
    "raspunsuri": [
      "Nucleu - ADN - transcripție - ARNm - ieşire prin porul membranei nucleare",
      "Catenă matriță de ADN - secvență de baze azotate TACGT - transcripţie - moleculă de ARNm - secvență de baze azotate AUGCA",
      "Catenă dormantă de ADN - translație - ARNr - introni, exoni",
      "Catenă matriță de ADN - copiere conform noncomplementarității bazelor - ARNm, ARNt - transcripţie",
      "Citoplasmă - ribozomi - expunerea codonilor de pe ARNm - cuplarea codon-anticodon complementar de pe ARNt - poziționarea aminoacizilor - translație"
    ],
    "corect": [0, 1, 4]
  },
  {
    "id": "cap1_211",
    "text": "Selectați enunțurile cu două afirmaţii adevărate:",
    "raspunsuri": [
      "ARN-ul mesager (ARNm) este sintetizat în nucleul celulei prin transcripţie. ARNm primeşte codul genetic de la ADN",
      "ARNt transportă aminoacizii la ribozomi şi deține anticodonulii complementari codonilor de pe ARNm. Molecula de ARNm se sintetizează în cursul procesului de translație",
      "ARN-ul de reglare controlează expresia genică şi sinteza proteică. Secvența de codoni a ARNm determină secvența de aminoacizi a proteinelor",
      "Nucleotidele catenei de ARNm sintetizate se citesc în grupe de câte trei și se numesc codoni. Odată sintetizată, proteina este îndepărtată din ribozomi, urmând să fie procesată în continuare",
      "Expresia genică şi sinteza proteică nu pot fi reglate şi controlate de către celulă. ARNr de la nivelul lizozomilor conține codonii și transportă aminoacizii"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_212",
    "text": "Selectați informațiile corecte cu privire la acizii nucleici:",
    "raspunsuri": [
      "Compoziția chimică a unui acid nucleic (ADN sau ARN) include nucleotide, care conțin baze azotate (A,T,C,G în ADN și A,U,C,G în ARN)",
      "Baza azotată uracil este componentă a moleculei de ARN mesager (ARNm) şi nu se regăseşte în ADN",
      "Dezoxiriboza (o structură de natură glucidică) intră în alcătuirea moleculei de ARN mesager (ARNm)",
      "ARN-ul, alături de proteine, se regăseşte în nucleol",
      "ADN-ul nuclear se replică în faza $G_{2}$ a ciclului celular"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_213",
    "text": "Alegeți afirmaţiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Bazele azotate adenină şi timină sunt complementare şi intră în compoziția acidului dezoxiribonucleic",
      "În molecula de ADN se regăsesc bazele complementare citozină şi adenozină",
      "ARNt conține anticodonul ale cărui baze se împerechează cu cele din codonul complementar al moleculei de ARNm",
      "Odată sintetizată, proteina este îndepărtată din ribozom pentru a fi procesată în continuare (spre exemplu, modificată în aparatul Golgi)",
      "Uracilul, adenina şi citozina se regăsesc doar în structura moleculei de ADN"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_214",
    "text": "Selectați afirmaţiile adevărate dintre cele de mai jos:",
    "raspunsuri": [
      "Structura şi compoziţia nucleului sunt direct implicate în reproducerea celulară",
      "ADN-ul este format dintr-o succesiune de nucleotide, legate unele de altele prin legături ionice",
      "Milioane de nucleozomi alcătuiesc un cromozom",
      "Complexele de histone se înfăşoară în jurul segmentelor de ADN, formând cromozomii",
      "Codul genetic constă în ordinea bazelor azotate din ADN şi determină secvența în care sunt legați aminoacizii în proteină"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_215",
    "text": "Despre proteine și sinteza lor este adevărat că:",
    "raspunsuri": [
      "Odată sintetizată şi îndepărtată din ribozomi, proteina poate fi utilizată de către celulă ca şi component structural celular",
      "Sinteza proteică începe cu transcripția, în urma căreia rezultă cromozomii şi translația, în urma căreia codul genetic al ARN este decodificat în secvența de nucleotide a ADN",
      "În timpul translației, molecula de ARN mesager (ARNm) se sintetizează în nucleu, utilizând secvența de baze azotate din ADN-ul nuclear",
      "O proteină poate fi modificată în aparatul Golgi şi depozitată în vezicule secretoare înainte de a fi eliberată de către celulă",
      "Sinteza unor proteine structurale și a unor enzime are loc în interfaza ciclului celular ($G_{1}-S-G_{2}$)"
    ],
    "corect": [0, 3, 4]
  },
  {
    "id": "cap1_216",
    "text": "Alegeți dintre afirmaţiile de mai jos pe cele adevărate referitoare la structura și rolul tipurilor de ARN în sinteza proteică:",
    "raspunsuri": [
      "O succesiune de trei nucleotide cu dezoxiriboză din componența moleculei de ARN de transfer (ARNt) poartă numele de codon",
      "O succesiune de trei nucleotide (de exemplu, ATC adenină-timină-citozină) din componența moleculei de ARN mesager (ARNm) poartă numele de codon",
      "Anticodonul din ARN-ul de transfer (ARNt) conține baze azotate care se împerechează cu bazele azotate complementare ale codonului din ARN-ul mesager (ARNm)",
      "În procesul de translație, moleculele de ARNt se atașează de aminoacizii specifici pe care îi transportă la ribozomi, pentru a întâlni ARNm",
      "Procesul de translație, derulat în citoplasmă, se finalizează atunci când în molecula de ARNm este întâlnit un codon stop"
    ],
    "corect": [2, 3, 4]
  },
  {
    "id": "cap1_217",
    "text": "În translaţie evenimentele decurg astfel:",
    "raspunsuri": [
      "Când codonul moleculei de ARNm îşi întâlneşte anticodonul de pe molecula de ARNt, bazele lor se împerechează",
      "Aminoacidul transportat de a doua moleculă de ARNm este poziționat lângă primul aminoacid, iar între ei se stabilește o legătură peptidică cu ajutorul unei enzime lizozomale",
      "După ce primul aminoacid este legat de al doilea aminoacid printr-o legătură peptidică cu ajutorul unei enzime ribozomale, ribozomul se deplasează pe ARNm cu un codon",
      "Ribozomul deplasează peptidul/peptida alcătuită din primii doi aminoacizi, pentru a putea atașa un al treilea aminoacid, adus de o altă moleculă de ARNt",
      "După fiecare aminoacid adus la ribozom, acesta se deplasează pe ARNm cu câte doi codoni"
    ],
    "corect": [0, 2, 3]
  },
  {
    "id": "cap1_218",
    "text": "Care dintre următoarele afirmaţii sunt adevărate?",
    "raspunsuri": [
      "În molecula de ARN mesager (ARNm) rezultată imediat după transcripție se găsesc secvențe intercalate de introni şi exoni",
      "Intronii se găsesc în toate celulele umane şi reprezintă regiunile funcționale din structura genelor, alcătuind circa 5% din genomul uman",
      "Exonii reprezintă structurile funcționale din structura genelor, fiind folosite efectiv pentru codificarea proteinelor unei celule",
      "Molecula de ARN mesager (ARNm) final, care se va atașa la ribozom, nu conține exoni",
      "Posttranscripțional (după ce procesul de transcripţie a avut loc), molecula de ARN mesager (ARNm) se modifică pentru a regla activitatea genică, fiind îndepărtate secvențele necodante"
    ],
    "corect": [0, 2, 4]
  },
  {
    "id": "cap1_219",
    "text": "Care dintre următoarele afirmaţii referitoare la proteine și sinteza proteică sunt adevărate?",
    "raspunsuri": [
      "Cea mai importantă caracteristică structurală a unei proteine este succesiunea aminoacizilor în lanțul proteic (secvența în care sunt legați aminoacizii)",
      "Unele dintre proteinele sintetizate pot fi utilizate de către celule ca şi component structural celular",
      "Proteinele din structura microtubulilor şi microfilamentelor citoscheletului sunt exportate după sinteză pentru a fi utilizate extracelular",
      "Sinteza unui lanţ polipeptidic/proteic se oprește atunci când pe ARNm apare un codon stop (codon care nu codifică aminoacizi, ci semnifică faptul că proteina este completă)",
      "Colagenul este o proteină care se regăseşte doar în structura țesutului conjunctiv lax"
    ],
    "corect": [0, 1, 3]
  },
  {
    "id": "cap1_220",
    "text": "Care dintre următoarele afirmaţii sunt adevărate?",
    "raspunsuri": [
      "Funcționând economic, o celulă produce în permanență toate tipurile de proteine",
      "Funcționând economic, o celulă nu produce în permanență toate tipurile de proteine",
      "Anumite tipuri de celule produc în permanență toate tipurile de proteine, acestea acționând ca şi hormoni",
      "Anumite tipuri de celule produc doar anumite tipuri de proteine (hormonul insulină este produs de către celulele beta ale insulelor Langerhans din pancreas şi nu de către celulele nervoase)",
      "Imediat după transcripţie, molecula de ARN mesager (ARNm) suferă modificări care presupun eliminarea intronilor, păstrându-se doar exonii (partea exprimată a genomului uman) care sunt uniți pentru a forma ARNm final"
    ],
    "corect": [1, 3, 4]
  }
]
    },
    {
      id: "mate",
      nume: "Matematică",
      intrebari: [
        { id: "mate1", text: "Cât face 7 × 8?", raspunsuri: ["54", "56", "58", "64"], corect: 1 },
        { id: "mate2", text: "Cât este rădăcina pătrată din 144?", raspunsuri: ["10", "11", "12", "14"], corect: 2 },
        { id: "mate3", text: "Care este suma unghiurilor unui triunghi?", raspunsuri: ["90°", "180°", "270°", "360°"], corect: 1 },
        { id: "mate5", text: "Care dintre aceste numere sunt prime?", raspunsuri: ["2", "9", "11", "15"], corect: [0, 2] },
        { id: "mate4", text: "Cât face 15% din 200?", raspunsuri: ["20", "25", "30", "35"], corect: 2 }
      ]
    },
    {
      id: "ist",
      nume: "Istorie",
      intrebari: [
        { id: "ist1", text: "În ce an a avut loc Marea Unire?", raspunsuri: ["1859", "1877", "1918", "1945"], corect: 2 },
        { id: "ist2", text: "Cine a fost primul domnitor al Principatelor Unite?", raspunsuri: ["Carol I", "Alexandru Ioan Cuza", "Mihai Viteazul", "Ștefan cel Mare"], corect: 1 },
        { id: "ist3", text: "În ce an a început Primul Război Mondial?", raspunsuri: ["1912", "1914", "1916", "1918"], corect: 1 },
        { id: "ist4", text: "Cine a condus Țara Românească în 1600 la unirea celor trei țări?", raspunsuri: ["Vlad Țepeș", "Mircea cel Bătrân", "Mihai Viteazul", "Matei Basarab"], corect: 2 }
      ]
    }
  ]
};
