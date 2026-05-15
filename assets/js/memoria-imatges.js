const totsElsElements = [
  {
    nom: "Hidrogen",
    simbol: "H",
    importancia: 1,
    urlImatge: // Aquesta URL no s'utilitzarà directament per carregar la imatge a la zona de drop,
               // sinó que es construirà una URL local. L'he deixat per referència.
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png",
  },
  {
    nom: "Heli",
    simbol: "He",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Helium_atom_diagram.png",
  },
  {
    nom: "Liti",
    simbol: "Li",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Lithium_atom_model.png",
  },
  {
    nom: "Carboni",
    simbol: "C",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Carbon_atom_diagram.png",
  },
  {
    nom: "Nitrogen",
    simbol: "N",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Nitrogen_atom_diagram.png",
  },
  {
    nom: "Oxigen",
    simbol: "O",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Oxygen_atom_diagram.png",
  },
  {
    nom: "Fluor",
    simbol: "F",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Fluorine_atom_diagram.png",
  },
  {
    nom: "Neó",
    simbol: "Ne",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Neon_atom_diagram.png",
  },
  {
    nom: "Sodi",
    simbol: "Na",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Sodium_atom_diagram.png",
  },
  {
    nom: "Magnesi",
    simbol: "Mg",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Magnesium_atom_diagram.png",
  },
  {
    nom: "Alumini",
    simbol: "Al",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Aluminium_atom_diagram.png",
  },
  {
    nom: "Silici",
    simbol: "Si",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Silicon_atom_diagram.png",
  },
  {
    nom: "Fòsfor",
    simbol: "P",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Phosphorus_atom_diagram.png",
  },
  {
    nom: "Sofre",
    simbol: "S",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Sulfur_atom_diagram.png",
  },
  {
    nom: "Clor",
    simbol: "Cl",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Chlorine_atom_diagram.png",
  },
  {
    nom: "Argó",
    simbol: "Ar",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Argon_atom_diagram.png",
  },
  {
    nom: "Potassi",
    simbol: "K",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Potassium_atom_diagram.png",
  },
  {
    nom: "Calci",
    simbol: "Ca",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Calcium_atom_diagram.png",
  },
  {
    nom: "Ferro",
    simbol: "Fe",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Iron_atom_diagram.png",
  },
  {
    nom: "Coure",
    simbol: "Cu",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Copper_atom_diagram.png",
  },
  {
    nom: "Zinc",
    simbol: "Zn",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Zinc_atom_diagram.png",
  },
  {
    nom: "Plom",
    simbol: "Pb",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Lead_atom_diagram.png",
  },
  {
    nom: "Iode",
    simbol: "I",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Iodine_atom_diagram.png",
  },
  {
    nom: "Estany",
    simbol: "Sn",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Tin_atom_diagram.png",
  },
  {
    nom: "Mercuri",
    simbol: "Hg",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mercury_atom_diagram.png",
  },
  {
    nom: "Urani",
    simbol: "U",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Uranium_atom_diagram.png",
  },
  {
    nom: "Or",
    simbol: "Au",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Gold_atom_diagram.png",
  },
  {
    nom: "Argent",
    simbol: "Ag",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Silver_atom_diagram.png",
  },
  {
    nom: "Crom",
    simbol: "Cr",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Chromium_atom_diagram.png",
  },
  {
    nom: "Níquel",
    simbol: "Ni",
    importancia: 1,
    urlImatge:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Nickel_atom_diagram.png",
  },
];

const formulari = document.getElementById("configuracioJoc");
const seccioFormulari = document.getElementById("formulari");
const seccioJoc = document.getElementById("joc");
const seccioResultat = document.getElementById("resultat");
const zonaDrop = document.getElementById("zonaDrop");
const zonaElements = document.getElementById("zonaElements");
const crono = document.getElementById("crono");
const missatgeFinal = document.getElementById("missatgeFinal");

let puntuacio = 0; // Total d'encerts en tot el joc
let intents = 0; // Total d'intents en tot el joc
let preguntesFetes = 0; // Número de "rondes" completades
let preguntesTotals = 10; // Total de rondes a jugar
let importancia = 1; // Filtre per elements importants

let game_id = 0;
let seed = 0;

// Variables de temps
let seconds = 0;
let interval = null;

let intervalStatus = null; // Interval per guardar l'estat del joc

formulari.addEventListener("submit", (e) => {
  e.preventDefault();

  const dificultat = document.getElementById("dificultat").value;
  importancia = document.getElementById("importancia").value;

  iniciarJoc(dificultat, importancia);
});

// La funció reiniciarJoc ha de ser global o accessible, ja que es crida des de l'HTML
window.reiniciarJoc = function () {
  seccioFormulari.style.display = "block";
  seccioJoc.style.display = "none";
  seccioResultat.style.display = "none";
  zonaDrop.innerHTML = "";
  zonaElements.innerHTML = "";
  stopTimer(); // Atura el temporitzador en reiniciar
  stopSaveStatus(); // Atura l'enviament d'estat en reiniciar
};

function iniciarJoc(dificultat) {
  newGameRequest();
  startSaveStatus();

  puntuacio = 0;
  intents = 0;
  preguntesFetes = 0;
  zonaDrop.innerHTML = "";
  zonaElements.innerHTML = "";
  seccioFormulari.style.display = "none";
  seccioJoc.style.display = "block";
  seccioResultat.style.display = "none";

  const nombrePreguntes = {
    facil: 10,
    mitja: 15,
    dificil: 20,
  }[dificultat];

  preguntesTotals = nombrePreguntes;

  crearTaulell();
  startTimer();
}

// Barreja i selecciona el nombre necessari d’elements per a una ronda
function crearTaulell() {
  preguntesFetes++;
  zonaDrop.innerHTML = ""; // Neteja les zones de drop de la ronda anterior
  zonaElements.innerHTML = ""; // Neteja els elements de la ronda anterior

  const seleccionats = totsElsElements.filter((element) => {
    return parseInt(importancia) === 0 || element.importancia === 1;
  });

  // Selecciona 5 elements únics per a la ronda actual
  const seleccionatsPerRonda = [...seleccionats]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  const preguntaActualDisplay = document.createElement("p");
  preguntaActualDisplay.textContent = preguntesFetes + " de " + preguntesTotals;
  crono.replaceChildren(preguntaActualDisplay); // Mostra la pregunta actual

  carregarElements(seleccionatsPerRonda);
}

function carregarElements(elements) {
  // Barreja els elements per a la zona de drop (mostra la imatge)
  const barrejatsDrop = [...elements].sort(() => Math.random() - 0.5);
  // Barreja els elements per a la zona d'elements (mostra el nom)
  let barrejatsElements = [...elements].sort(() => Math.random() - 0.5);

  // Per evitar que la resposta correcta sigui sempre la primera opció si els 2 arrays estan ordenats igual
  while (
    barrejatsElements.every((el, i) => el.simbol === barrejatsDrop[i].simbol)
  ) {
    barrejatsElements = [...elements].sort(() => Math.random() - 0.5);
  }

  // Crea les zones de drop amb la imatge de l'element
  barrejatsDrop.forEach((el) => {
    const drop = document.createElement("div");
    drop.className = "zona-drop";
    drop.dataset.element = el.simbol; // Guardem el símbol per a la comparació

    const img = document.createElement("img");
    img.alt = el.simbol;
    img.style.width = "100px"; // Ajusta la mida de la imatge amb CSS
    img.style.height = "100px";
    img.style.objectFit = "contain";
    
    // *** Lògica de càrrega d'imatges locals restaurada ***
    const extensions = ["png", "webp", "jpg", "jpeg"];
    let currentExtensionIndex = 0;

    function provaExtensioLocal() {
      if (currentExtensionIndex >= extensions.length) {
        console.warn(`No s'ha trobat una imatge vàlida per a ${el.simbol} amb les extensions provades.`);
        img.src = "ruta/a/imatge_placeholder.png"; // Posa una imatge de placeholder si no troba cap
        drop.dataset.urlImatge = img.src; // Guarda la URL del placeholder per si hi ha error
        return;
      }

      const src = `../assets/images/elements/${el.simbol}.${extensions[currentExtensionIndex]}`;
      img.src = src;

      img.onload = () => {
        // La imatge s'ha carregat amb èxit, ara la podem afegir
        console.log("Imatge local carregada amb èxit:", src);
        drop.dataset.urlImatge = src; // Guardem la URL que ha funcionat
        drop.appendChild(img); // Afegim la imatge a la zona de drop
      };

      img.onerror = () => {
        console.warn(`No s'ha pogut carregar la imatge local: ${src}. Provant següent extensió.`);
        currentExtensionIndex++;
        provaExtensioLocal(); // Prova la següent extensió
      };
    }
    
    provaExtensioLocal(); // Inicia el procés de prova

    zonaDrop.appendChild(drop); // Afegim el div drop (amb la imatge o el placeholder)
  });

  // Crea els botons/elements arrossegables amb el nom de l'element
  barrejatsElements.forEach((el) => {
    const bot = document.createElement("div");
    bot.className = "element";
    bot.id = "btn-zone-" + el.simbol;
    bot.textContent = el.nom; // Mostra el nom de l'element
    bot.setAttribute("draggable", true);
    bot.dataset.element = el.simbol; // Guardem el símbol per a la comparació
    zonaElements.appendChild(bot);
  });

  activarDragAndDrop();
}

function activarDragAndDrop() {
  const elements = document.querySelectorAll(".element:not(.desactived)"); // Selecciona només els elements no desactivats
  const zones = document.querySelectorAll(".zona-drop:not(.matched)"); // Selecciona només les zones no encertades

  elements.forEach((el) => {
    el.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", el.dataset.element); // Símbol de l'element
      e.dataTransfer.setData("text/name", el.textContent); // Nom de l'element
    });
  });

  zones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      // Afegeix la classe dragover si no té encert ni error per visualitzar la zona
      if (!zone.classList.contains("encert") && !zone.classList.contains("error")) {
          zone.classList.add("dragover");
      }
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("dragover");
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("dragover"); // Elimina la classe dragover al deixar anar
      const elementSimbol = e.dataTransfer.getData("text/plain"); // Símbol de l'element arrossegat
      const elementNom = e.dataTransfer.getData("text/name"); // Nom de l'element arrossegat
      // Utilitzem la URL de la imatge guardada al dataset de la zona de drop,
      // que serà la local que ha funcionat o el placeholder
      const imageUrlDropZone = zone.dataset.urlImatge; 

      intents++; // Incrementa els intents totals del joc

      if (elementSimbol === zone.dataset.element) {
        // Correcte
        zone.classList.add("encert");
        zone.classList.add("matched"); // Marca la zona com a "matched"
        zone.style.pointerEvents = "none"; // Desactiva interacció amb aquesta zona

        // Desactivar el botó relacionat amb aquesta zona
        const btn = document.getElementById(`btn-zone-${elementSimbol}`);
        if (btn) {
          btn.setAttribute("draggable", false);
          btn.classList.add("desactived"); // Aplica la classe per estils de "desactivat"
          btn.style.opacity = "0.5";
          btn.style.cursor = "default";
        }
        puntuacio++; // Incrementa puntuació total

        // Comprova si tots els elements d'aquesta ronda s'han emparellat
        const zonesMatched = document.querySelectorAll(".zona-drop.matched").length;
        const totalZones = document.querySelectorAll(".zona-drop").length;

        if (zonesMatched === totalZones) {
          // Totes les zones de la ronda actual s'han encertat
          if (preguntesFetes < preguntesTotals) {
            setTimeout(crearTaulell, 1000); // Passa a la següent ronda després d'un segon
          } else {
            finalitzarJoc();
          }
        }
      } else {
        // Incorrecte
        zone.classList.add("error");
        // Mostrem una "X" temporal en cas d'error
        zone.innerHTML = "❌";
        setTimeout(() => {
          // Restaurar la imatge original de la zona de drop
          zone.innerHTML = ""; // Neteja la "X"
          const img = document.createElement("img");
          img.src = imageUrlDropZone; // Usa la URL local guardada
          img.alt = zone.dataset.element;
          img.style.width = "100px";
          img.style.height = "100px";
          img.style.objectFit = "contain";
          zone.appendChild(img);
          zone.classList.remove("error");
        }, 1000);
      }
    });
  });
}

function finalitzarJoc() {
  stopTimer();
  stopSaveStatus();
  const puntuacioFinal = calculaPuntuacio(puntuacio, intents);

  seccioJoc.style.display = "none";
  seccioResultat.style.display = "block";

  const minutes = Math.floor(seconds / 60);
  const seconds2 = seconds % 60; 

  missatgeFinal.innerHTML = `
    N'has encertat <strong>${puntuacio}</strong> en <strong>${intents}</strong> intents. </br> En ${minutes}:${seconds2} segons.</br> <h1>${puntuacioFinal.toFixed(2)} punts</h1>
  `;

  $.ajax({
    url: "https://fun.codelearn.cat/hackathon/game/finalize",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      game_id: game_id,
      data: { temps: seconds },
      score: puntuacioFinal,
    }),
    success: function (data, textStatus, jqXHR) {
      alert("Informació guardada correctament");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error en finalitzar de la partida: " + textStatus);
    },
  });
}

function startTimer() {
  if (interval) return; // si ja està corrent no fem res
  seconds = 0;
  interval = setInterval(() => {
    seconds++;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function calculaPuntuacio(totalPreguntesEncertades, totalIntents) {
  if (totalIntents === 0) return 0; // Evitar divisió per zero

  let baseScore = (totalPreguntesEncertades / preguntesTotals) * 100;

  const extraAttempts = Math.max(0, totalIntents - totalPreguntesEncertades);
  const penaltyPerAttempt = 5;
  let penalizedScore = baseScore - (extraAttempts * penaltyPerAttempt);

  const timePenalty = Math.floor(seconds / 10);
  penalizedScore -= timePenalty;

  return Math.min(Math.max(penalizedScore, 0), 100); // La puntuació ha d'estar entre 0 i 100
}

// requests to the server
function newGameRequest() {
  $.ajax({
    url: "https://fun.codelearn.cat/hackathon/game/new",
    method: "GET",
    success: function (data, textStatus, jqXHR) {
      if (jqXHR.status === 200) {
        game_id = data["game_id"];
        seed = data["seed"];
      } else {
        alert("Error en la creació de la partida: status " + jqXHR.status);
        reiniciarJoc();
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error en la creació de la partida: " + textStatus);
      reiniciarJoc();
    },
  });
}
function startSaveStatus() {
  if (intervalStatus) return; // si ja està corrent no fem res
  intervalStatus = setInterval(() => {
    $.ajax({
      url: "https://fun.codelearn.cat/hackathon/game/store_progress",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        game_id: game_id,
        data: { tempsTransurrit: seconds },
      }),
      success: function (data, textStatus, jqXHR) {
        console.log("Informació guardada correctament");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error en finalitzar de la partida: " + textStatus);
      },
    });
  }, 15000);
}
function stopSaveStatus() {
  clearInterval(intervalStatus);
  intervalStatus = null;
}