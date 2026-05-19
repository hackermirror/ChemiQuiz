// Aquesta constant ha d'estar DINS d'aquest fitxer JS (o importada)
// per a que la taula periòdica pugui accedir a les URLs de les imatges.
const totsElsElements = [
  {
    nom: "Hidrogen",
    simbol: "H",
    importancia: 1,
    urlImatge:
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


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".element");
  const infoDisplay = document.getElementById("info-display");
  const resumText = document.getElementById("resum");
  const t = window.ChemiQuizI18n.t;

  // Funció per mostrar el missatge inicial
  const showInitialMessage = () => {
    resumText.textContent =
      t("info.initial_message"); // Actualitzem el text del resum
    infoDisplay.innerHTML = ""; // Buidem la informació específica
  };

  // Mostra el missatge inicial en carregar la pàgina
  showInitialMessage();

  elements.forEach((elementHTML) => { // Renombro a elementHTML per evitar conflicte amb la variable 'element' de la llista
    const infoDiv = elementHTML.querySelector(".info");
    const infoContent = infoDiv ? infoDiv.innerHTML.split("<br>") : []; // Dividim per <br>

    // Obtenim el símbol de l'element des del text de l'element HTML (el text en negreta)
    // El símbol està dins del <strong>
    const simbolElementHTML = elementHTML.querySelector('strong').textContent.trim();

    elementHTML.addEventListener("click", () => {
      // Ocultem el missatge inicial quan hi ha informació
      resumText.textContent = t("info.element_information"); // Canviem el títol
      infoDisplay.innerHTML = ""; // Buidem contingut anterior

      // Creem un div per cada línia d'informació
      infoContent.forEach((line) => {
        if (line.trim() !== "") {
          const lineDiv = document.createElement("div");
          lineDiv.textContent = line.trim();
          infoDisplay.appendChild(lineDiv);
        }
      });

      // BUSCAR I AFEGIR LA IMATGE DE L'ÀTOM
      const elementData = totsElsElements.find(
        (el) => el.simbol === simbolElementHTML
      );

      if (elementData) {
        const atomImage = document.createElement("img");
        // Construïm la URL localment
        const imageFileName = `${elementData.simbol}`; // El nom de l'arxiu és el símbol sense extensió

        const extensions = ["png", "webp", "jpg", "jpeg"];
        let currentExtensionIndex = 0;

        function tryLoadImage() {
          if (currentExtensionIndex >= extensions.length) {
            console.warn(`No s'ha trobat una imatge vàlida per a ${elementData.simbol} amb les extensions provades.`);
            atomImage.src = "ruta/a/imatge_placeholder.png"; // Placeholder si no es troba
            atomImage.alt = "Imatge no disponible";
            atomImage.classList.add("atom-image");
            infoDisplay.appendChild(atomImage);
            return;
          }

          const src = `../assets/images/elements/${imageFileName}.${extensions[currentExtensionIndex]}`;
          atomImage.src = src;
          atomImage.alt = `Model d'àtom de ${elementData.nom}`;
          atomImage.classList.add("atom-image"); // Afegim una classe per poder estilitzar-la

          atomImage.onload = () => {
            console.log("Imatge local de l'àtom carregada amb èxit:", src);
            infoDisplay.appendChild(atomImage); // Afegim la imatge un cop carregada
          };

          atomImage.onerror = () => {
            console.warn(`No s'ha pogut carregar la imatge local: ${src}. Provant següent extensió.`);
            currentExtensionIndex++;
            tryLoadImage(); // Intenta amb la següent extensió
          };
        }

        tryLoadImage(); // Comença a intentar carregar la imatge

      } else {
        console.warn(`No s'ha trobat informació de l'element ${simbolElementHTML} a la llista 'totsElsElements'.`);
      }
    });
  });
});