// ... (el teu codi JS existent)

const formulari = document.getElementById("configuracioJoc");
const seccioFormulari = document.getElementById("formulari");
const seccioJoc = document.getElementById("joc");
const seccioResultat = document.getElementById("resultat");
const zonaDrop = document.getElementById("zonaDrop");
const zonaElements = document.getElementById("zonaElements");
const crono = document.getElementById("crono");
const missatgeFinal = document.getElementById("missatgeFinal");

let puntuacio = 0;
let intents = 0;
let puntuacioMini = 0;
let intentsMini = 0;
let preguntesFetes = 0;
let preguntesTotals = 10;
let importancia = 1;

let game_id = 0;
let seed = 0;

//variables de temps
let seconds = 0;
let interval = null;

let intervalStatus = null;

const totsElsElements = [
  { nom: "Hidrogen", simbol: "H", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Heli", simbol: "He", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Helium_atom_diagram.png" },
  { nom: "Liti", simbol: "Li", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Lithium_atom_model.png" },
  { nom: "Carboni", simbol: "C", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/3/30/Carbon_atom_diagram.png" },
  { nom: "Nitrogen", simbol: "N", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Nitrogen_atom_diagram.png" },
  { nom: "Oxigen", simbol: "O", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Oxygen_atom_diagram.png" },
  { nom: "Fluor", simbol: "F", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Fluorine_atom_diagram.png" },
  { nom: "Neó", simbol: "Ne", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Neon_atom_diagram.png" },
  { nom: "Sodi", simbol: "Na", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Sodium_atom_diagram.png" },
  { nom: "Magnesi", simbol: "Mg", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Magnesium_atom_diagram.png" },
  { nom: "Alumini", simbol: "Al", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Aluminium_atom_diagram.png" },
  { nom: "Silici", simbol: "Si", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/0/07/Silicon_atom_diagram.png" },
  { nom: "Fòsfor", simbol: "P", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Phosphorus_atom_diagram.png" },
  { nom: "Sofre", simbol: "S", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/2/25/Sulfur_atom_diagram.png" },
  { nom: "Clor", simbol: "Cl", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Chlorine_atom_diagram.png" },
  { nom: "Argó", simbol: "Ar", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/9/91/Argon_atom_diagram.png" },
  { nom: "Potassi", simbol: "K", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Potassium_atom_diagram.png" },
  { nom: "Calci", simbol: "Ca", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/3/30/Calcium_atom_diagram.png" },
  { nom: "Ferro", simbol: "Fe", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Iron_atom_diagram.png" },
  { nom: "Coure", simbol: "Cu", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Copper_atom_diagram.png" },
  { nom: "Zinc", simbol: "Zn", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Zinc_atom_diagram.png" },
  { nom: "Plom", simbol: "Pb", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/6/68/Lead_atom_diagram.png" },
  { nom: "Iode", simbol: "I", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Iodine_atom_diagram.png" },
  { nom: "Estany", simbol: "Sn", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/da/Tin_atom_diagram.png" },
  { nom: "Mercuri", simbol: "Hg", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mercury_atom_diagram.png" },
  { nom: "Urani", simbol: "U", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/0/00/Uranium_atom_diagram.png" },
  { nom: "Or", simbol: "Au", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Gold_atom_diagram.png" },
  { nom: "Argent", simbol: "Ag", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Silver_atom_diagram.png" },
  { nom: "Crom", simbol: "Cr", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Chromium_atom_diagram.png" },
  { nom: "Níquel", simbol: "Ni", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/75/Nickel_atom_diagram.png" },
  { nom: "Cobalto", simbol: "Co", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/77/Cobalt_atom_diagram.png" },
  { nom: "Manganès", simbol: "Mn", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Manganese_atom_diagram.png" },
  { nom: "Vanadi", simbol: "V", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Vanadium_atom_diagram.png" },
  { nom: "Titani", simbol: "Ti", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/77/Titanium_atom_diagram.png" },
  { nom: "Escandi", simbol: "Sc", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Scandium_atom_diagram.png" },
  { nom: "Zirconi", simbol: "Zr", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Zirconium_atom_diagram.png" },
  { nom: "Niobi", simbol: "Nb", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/1/11/Niobium_atom_diagram.png" },
  { nom: "Molibdè", simbol: "Mo", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/0/08/Molybdenum_atom_diagram.png" },
  { nom: "Tecneci", simbol: "Tc", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Technetium_atom_diagram.png" },
  { nom: "Ruten", simbol: "Ru", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Ruthenium_atom_diagram.png" },
  { nom: "Rodi", simbol: "Rh", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/6/69/Rhodium_atom_diagram.png" },
  { nom: "Pal·ladi", simbol: "Pd", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/0/05/Palladium_atom_diagram.png" },
  { nom: "Cadmi", simbol: "Cd", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cadmium_atom_diagram.png" },
  { nom: "Indi", simbol: "In", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/1/10/Indium_atom_diagram.png" },
  { nom: "Estany", simbol: "Sn", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/da/Tin_atom_diagram.png" },
  { nom: "Antimoni", simbol: "Sb", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Antimony_atom_diagram.png" },
  { nom: "Tel·luri", simbol: "Te", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tellurium_atom_diagram.png" },
  { nom: "Brom", simbol: "Br", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Bromine_atom_diagram.png" },
  { nom: "Kriptó", simbol: "Kr", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Krypton_atom_diagram.png" },
  { nom: "Rubidi", simbol: "Rb", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Rubidium_atom_diagram.png" },
  { nom: "Estronci", simbol: "Sr", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/75/Strontium_atom_diagram.png" },
  { nom: "Itrio", simbol: "Y", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/72/Yttrium_atom_diagram.png" },
  { nom: "Zirconi", simbol: "Zr", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Zirconium_atom_diagram.png" },
  { nom: "Niobi", simbol: "Nb", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/1/11/Niobium_atom_diagram.png" },
  { nom: "Molibdè", simbol: "Mo", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/0/08/Molybdenum_atom_diagram.png" },
  { nom: "Tecneci", simbol: "Tc", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Technetium_atom_diagram.png" },
  { nom: "Ruten", simbol: "Ru", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Ruthenium_atom_diagram.png" },
  { nom: "Rodi", simbol: "Rh", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/6/69/Rhodium_atom_diagram.png" },
  { nom: "Pal·ladi", simbol: "Pd", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/0/05/Palladium_atom_diagram.png" },
  { nom: "Cadmi", simbol: "Cd", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cadmium_atom_diagram.png" },
  { nom: "Indi", simbol: "In", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/1/10/Indium_atom_diagram.png" },
  { nom: "Antimoni", simbol: "Sb", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Antimony_atom_diagram.png" },
  { nom: "Tel·luri", simbol: "Te", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Tellurium_atom_diagram.png" },
  { nom: "Xenó", simbol: "Xe", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Xenon_atom_diagram.png" },
  { nom: "Cesi", simbol: "Cs", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/6/62/Caesium_atom_diagram.png" },
  { nom: "Bari", simbol: "Ba", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Barium_atom_diagram.png" },
  { nom: "Lantani", simbol: "La", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Lanthanum_atom_diagram.png" },
  { nom: "Cer", simbol: "Ce", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/0/07/Cerium_atom_diagram.png" },
  { nom: "Praseodimi", simbol: "Pr", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/1/19/Praseodymium_atom_diagram.png" },
  { nom: "Neodimi", simbol: "Nd", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/3/36/Neodymium_atom_diagram.png" },
  { nom: "Promeci", simbol: "Pm", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/8/82/Promethium_atom_diagram.png" },
  { nom: "Samari", simbol: "Sm", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Samarium_atom_diagram.png" },
  { nom: "Europi", simbol: "Eu", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Europium_atom_diagram.png" },
  { nom: "Gadolini", simbol: "Gd", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Gadolinium_atom_diagram.png" },
  { nom: "Terbi", simbol: "Tb", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Terbium_atom_diagram.png" },
  { nom: "Disprosi", simbol: "Dy", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dysprosium_atom_diagram.png" },
  { nom: "Holmi", simbol: "Ho", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Holmium_atom_diagram.png" },
  { nom: "Erbi", simbol: "Er", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Erbium_atom_diagram.png" },
  { nom: "Tul·li", simbol: "Tm", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Thulium_atom_diagram.png" },
  { nom: "Iterbi", simbol: "Yb", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Ytterbium_atom_diagram.png" },
  { nom: "Luteci", simbol: "Lu", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Lutetium_atom_diagram.png" },
  { nom: "Actini", simbol: "Ac", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Actinium_atom_diagram.png" },
  { nom: "Tori", simbol: "Th", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/3/30/Thorium_atom_diagram.png" },
  { nom: "Protactini", simbol: "Pa", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/6/67/Protactinium_atom_diagram.png" },
  { nom: "Neptuni", simbol: "Np", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Neptunium_atom_diagram.png" },
  { nom: "Plutoni", simbol: "Pu", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Plutonium_atom_diagram.png" },
  { nom: "Americi", simbol: "Am", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/2/24/Americium_atom_diagram.png" },
  { nom: "Curi", simbol: "Cm", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/2/23/Curium_atom_diagram.png" },
  { nom: "Berkeli", simbol: "Bk", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Berkelium_atom_diagram.png" },
  { nom: "Californi", simbol: "Cf", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/9/91/Californium_atom_diagram.png" },
  { nom: "Einsteini", simbol: "Es", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Einsteinium_atom_diagram.png" },
  { nom: "Fermi", simbol: "Fm", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/6/63/Fermium_atom_diagram.png" },
  { nom: "Mendelevi", simbol: "Md", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mendelevium_atom_diagram.png" },
  { nom: "Nobeli", simbol: "No", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Nobelium_atom_diagram.png" },
  { nom: "Laurenci", simbol: "Lr", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Lawrencium_atom_diagram.png" },
  { nom: "Rutherfordi", simbol: "Rf", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Rutherfordium_atom_diagram.png" },
  { nom: "Dubni", simbol: "Db", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Dubnium_atom_diagram.png" },
  { nom: "Seaborgi", simbol: "Sg", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Seaborgium_atom_diagram.png" },
  { nom: "Bohri", simbol: "Bh", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Bohrium_atom_diagram.png" },
  { nom: "Hassi", simbol: "Hs", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hassium_atom_diagram.png" },
  { nom: "Meitneri", simbol: "Mt", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Meitnerium_atom_diagram.png" },
  { nom: "Darmstadi", simbol: "Ds", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Darmstadtium_atom_diagram.png" },
  { nom: "Roentgeni", simbol: "Rg", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/3/30/Roentgenium_atom_diagram.png" },
  { nom: "Copernici", simbol: "Cn", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Copernicium_atom_diagram.png" },
  { nom: "Nihoni", simbol: "Nh", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Nihonium_atom_diagram.png" },
  { nom: "Moscovi", simbol: "Mc", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Moscovium_atom_diagram.png" },
  { nom: "Tennes", simbol: "Ts", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Tennessine_atom_diagram.png" },
  { nom: "Oganessó", simbol: "Og", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/71/Oganesson_atom_diagram.png" },
];

formulari.addEventListener("submit", (e) => {
  e.preventDefault();

  const dificultat = document.getElementById("dificultat").value;
  importancia = document.getElementById("importancia").value;

  iniciarJoc(dificultat, importancia);
});

function iniciarJoc(dificultat) {
  newGameRequest();
  startSaveStatus();

  puntuacio = 0;
  intents = 0;
  puntuacioMini = 0;
  intentsMini = 0;
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
// Barreja i selecciona el nombre necessari d’elements
function crearTaulell() {
  preguntesFetes++;
  puntuacioMini = 0;
  intentsMini = 0;
  zonaDrop.innerHTML = "";
  zonaElements.innerHTML = "";
  const seleccionats = totsElsElements.filter((element) => {
    return parseInt(importancia) === 0 || element.importancia === 1;
  });
  const seleccionatsFinal = [...seleccionats]
    .sort(() => Math.random(seed) - 0.5)
    .slice(0, 5);

  const preguntaActual = document.createElement("p");
  preguntaActual.textContent = preguntesFetes + " de " + preguntesTotals;
  crono.replaceChildren(preguntaActual);
  carregarElements(seleccionatsFinal);
}

function carregarElements(elements) {
  // Barreja els elements
  const barrejatsDrop = [...elements].sort(() => Math.random(seed) - 0.5);
  let barrejatsElements = [...elements].sort(() => Math.random(seed) - 0.5);

  // Ens assegurem que no siguin iguals (ordenacions exactes)
  while (
    barrejatsElements.every((el, i) => el.simbol === barrejatsDrop[i].simbol)
  ) {
    barrejatsElements = [...elements].sort(() => Math.random(seed) - 0.5);
  }

  barrejatsDrop.forEach((el) => {
    const drop = document.createElement("div");
    drop.className = "zona-drop";
    drop.dataset.element = el.simbol;
    drop.textContent = el.simbol;
    zonaDrop.appendChild(drop);
  });

  barrejatsElements.forEach((el) => {
    const bot = document.createElement("div");
    bot.className = "element";
    bot.id = "btn-zone-" + el.simbol;
    bot.textContent = el.nom;
    bot.setAttribute("draggable", true);
    bot.dataset.element = el.simbol;
    zonaElements.appendChild(bot);
  });

  activarDragAndDrop();
}

function activarDragAndDrop() {
  const elements = document.querySelectorAll(".element");
  const zones = document.querySelectorAll(".zona-drop");

  elements.forEach((el) => {
    el.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", el.dataset.element);
      e.dataTransfer.setData("text/name", el.textContent);
    });
  });

  zones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => e.preventDefault());

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      const elementId = e.dataTransfer.getData("text/plain");
      const nom = e.dataTransfer.getData("text/name");

      console.log(elementId);

      intents++;
      intentsMini++;

      if (
        elementId === zone.dataset.element &&
        zone.textContent === zone.dataset.element
      ) {
        zone.classList.add("encert");
        zone.textContent = nom;
        puntuacio++;
        puntuacioMini++;

        // Desactivar drag and drop per aquesta zona
        zone.style.pointerEvents = "none";

        // Desactivar botó relacionat amb aquesta zona (canvia selector si cal)
        const btn = document.getElementById(`btn-zone-${elementId}`);
        console.log(btn);
        if (btn) {
          btn.setAttribute("draggable", false);
          btn.className = "desactived";
        }

        if (puntuacioMini === zones.length) {
          if (preguntesFetes < preguntesTotals) {
            crearTaulell();
          } else {
            finalitzarJoc();
          }
        }
      } else {
        zone.classList.add("error");
        const original = zone.dataset.element;
        zone.textContent = "❌";
        setTimeout(() => {
          zone.textContent = original;
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
    N'has encertat <strong>${puntuacio}</strong> en <strong>${intents}</strong> intents. </br> En ${minutes}:${seconds2} segons.</br> <h1>${puntuacioFinal}</h1>
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

function reiniciarJoc() {
  seccioFormulari.style.display = "block";
  seccioJoc.style.display = "none";
  seccioResultat.style.display = "none";
  zonaDrop.innerHTML = "";
  zonaElements.innerHTML = "";
}

// Funció per tornar a la pàgina anterior (independentment d'on estiguis)
function goBack() {
  reiniciarJoc();
}

// NOVA FUNCIÓ: Per tornar a la pàgina anterior específicament durant el joc
function tornarEnrereEnJoc() {
    stopTimer();       // Atura el cronòmetre
    stopSaveStatus();  // Atura l'enviament de progrés al servidor
    reiniciarJoc();    // Reinicia l'estat del joc per si es torna a començar
    goBack();          // Torna a la pàgina anterior
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

function calculaPuntuacio(totalPreguntes, totalIntents) {
  if (totalIntents === 0) {
    return "0.00%";
  }


  let puntuacioPercentatge = (totalPreguntes / totalIntents) * 100;
  puntuacioPercentatge = Math.min(Math.max(puntuacioPercentatge, 0), 100);
  const resultatFormatat = puntuacioPercentatge.toFixed(2);

  return resultatFormatat + "%";
}

//requests to the server
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

window.reiniciarJoc = reiniciarJoc;
window.goBack = goBack;
window.tornarEnrereEnJoc = tornarEnrereEnJoc;
