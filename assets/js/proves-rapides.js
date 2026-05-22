// Get DOM elements for game sections and controls
const formulari = document.getElementById("configuracioJoc");
const seccioFormulari = document.getElementById("formulari");
const seccioJoc = document.getElementById("joc");
const seccioResultat = document.getElementById("resultat");
const zonaDrop = document.getElementById("zonaDrop");
const zonaElements = document.getElementById("zonaElements");
const crono = document.getElementById("crono"); // Global game timer/progress display
const cronoPregunta = document.getElementById("cronoPregunta"); // Per-question timer display
const missatgeFinal = document.getElementById("missatgeFinal");

// Elements for the multiple-choice and fill-in-the-blank question section
const seccioPregunta = document.getElementById("seccioPregunta");
const textPregunta = document.getElementById("textPregunta");
const opcionsRespostes = document.getElementById("opcionsRespostes");
const botoSeguentPregunta = document.getElementById("botoSeguentPregunta");

// Game state variables
let puntuacio = 0; // Puntuació total de tots els desafiaments
let intents = 0; // Intents totals de tots els desafiaments
let puntuacioMini = 0; // Puntuació de la ronda actual d'arrossegar i deixar anar
let intentsMini = 0; // Intents de la ronda actual d'arrossegar i deixar anar
let preguntesFetes = 0; // Rodes totals completades (una roda pot ser arrossegar i deixar anar, opció múltiple o omplir buits)
let preguntesTotals = 10; // Nombre total de preguntes per al joc actual
let importancia = 1; // Filtre per importància dels elements (1: important, 0: tot)
let gameMode = "mix"; // Mode de joc per defecte

let game_id = 0; // ID del joc del servidor
let seed = 0; // Seed del servidor per barrejar (nota: Math.random() ignora el seed directament)

// Global game timer variables
let seconds = 0;
let globalTimerInterval = null;

// Per-question timer variables
let questionTimeRemaining = 0;
let questionTimerLimit = 0; // S'estableix segons el mode de joc
let questionTimerInterval = null;

let intervalStatus = null; // Interval per guardar l'estat del joc al servidor

// Current challenge object (for multiple-choice and fill-in-the-blank)
let currentChallengeQuestion = null;

// Combined array of all questions (element-related, history, properties, and fill-in-the-blank)
const allQuestions = window.ChemiQuizI18n.content("proves_rapides");
const t = window.ChemiQuizI18n.t;

function quickProgressText(current, total) {
  return t("common.question_of_total", { current: current, total: total });
}

function quickSummaryHtml(correct, attempts, time, score) {
  return t("quick.final_message_html", {
    correct: correct,
    attempts: attempts,
    time: time,
    score: score
  });
}


// All available elements for drag-and-drop challenges
const totsElsElements = [
  { nom: "Hidrogen", simbol: "H", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Heli", simbol: "He", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Liti", simbol: "Li", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Beril·li", simbol: "Be", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Bor", simbol: "B", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Carboni", simbol: "C", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Nitrogen", simbol: "N", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Oxigen", simbol: "O", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Fluor", simbol: "F", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Neó", simbol: "Ne", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Sodi", simbol: "Na", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Magnesi", simbol: "Mg", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Alumini", simbol: "Al", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Silici", simbol: "Si", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Fòsfor", simbol: "P", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Sofre", simbol: "S", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Clor", simbol: "Cl", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Argó", simbol: "Ar", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Potassi", simbol: "K", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Calci", simbol: "Ca", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Ferro", simbol: "Fe", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Coure", simbol: "Cu", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Zinc", simbol: "Zn", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Plata", simbol: "Ag", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Or", simbol: "Au", importancia: 1, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Mercuri", simbol: "Hg", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Plom", simbol: "Pb", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Urani", simbol: "U", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hydrogen_atom_model_with_electron_cloud.png" },
  { nom: "Oganessó", simbol: "Og", importancia: 0, urlImatge: "https://upload.wikimedia.org/wikipedia/commons/7/71/Oganesson_atom_diagram.png" },
];


// Array to hold questions/challenges for the current game session
let gameRounds = [];
let currentChallengeIndex = 0; // To keep track of the current challenge in gameRounds

// Event listener for the form submission to start the game
formulari.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  const dificultat = document.getElementById("dificultat").value;
  importancia = document.getElementById("importancia").value;
  gameMode = document.getElementById("modalitat").value; // Get the selected game mode

  iniciarJoc(dificultat, importancia, gameMode);
});

/**
 * Initializes a new game session.
 * @param {string} dificultat - The chosen difficulty (facil, mitja, dificil).
 * @param {string} importancia - Filter for elements (1: important, 0: all).
 * @param {string} modalitat - The chosen game mode (flash, mix, extension).
 */
function iniciarJoc(dificultat, importancia, modalitat) {

  // Reset game state
  puntuacio = 0;
  intents = 0;
  preguntesFetes = 0;
  currentChallengeIndex = 0;

  // Clear previous game content
  zonaDrop.innerHTML = "";
  zonaElements.innerHTML = "";
  opcionsRespostes.innerHTML = ""; // Clear question options
  textPregunta.textContent = "";

  // Hide all sections except the game setup section initially
  seccioFormulari.style.display = "none";
  seccioResultat.style.display = "none";
  seccioJoc.style.display = "none";
  seccioPregunta.style.display = "none";

  // Determine total number of questions based on difficulty
  const nombrePreguntesTotal = {
    facil: 10,
    mitja: 15,
    dificil: 20,
  }[dificultat];

  preguntesTotals = nombrePreguntesTotal;

  // Set per-question time limit based on game mode
  if (modalitat === "flash") {
    questionTimerLimit = 7; // Short time for flash mode
  } else if (modalitat === "mix") {
    questionTimerLimit = 20; // Moderate time for mix mode
  } else if (modalitat === "extension") {
    questionTimerLimit = 60; // Long time for extension mode
  }

  // Prepare the mixed set of challenges for the game
  prepareGameChallenges(nombrePreguntesTotal);

  // Start with the first challenge and overall game timer
  displayNextChallenge();
  startGlobalTimer();
}

/**
 * Prepares a mixed set of game challenges (drag-and-drop, multiple-choice, fill-in-the-blank).
 * @param {number} totalRounds - The total number of rounds/challenges for the game.
 */
function prepareGameChallenges(totalRounds) {
  // Distribute rounds approximately evenly among the three types
  const roundsPerType = Math.floor(totalRounds / 3);
  let dragDropRounds = roundsPerType;
  let multipleChoiceRounds = roundsPerType;
  let fillInBlankRounds = roundsPerType;

  // Distribute any remaining rounds
  let remainingRounds = totalRounds - (dragDropRounds + multipleChoiceRounds + fillInBlankRounds);
  for (let i = 0; i < remainingRounds; i++) {
    if (i % 3 === 0) dragDropRounds++;
    else if (i % 3 === 1) multipleChoiceRounds++;
    else fillInBlankRounds++;
  }

  // Filter available elements based on importance for drag-and-drop
  const availableElements = totsElsElements.filter((element) => {
    return parseInt(importancia) === 0 || element.importancia === 1;
  });

  // Make copies of question arrays to avoid modifying originals and for shuffling
  const availableMultipleChoiceQuestions = allQuestions.filter(q => q.tipus === 'multiple-choice');
  const availableFillInBlankQuestions = allQuestions.filter(q => q.tipus === 'omplir-buits');

  gameRounds = [];

  // Add drag-and-drop challenges
  for (let i = 0; i < dragDropRounds; i++) {
    const selectedElements = [...availableElements]
      .sort(() => Math.random() - 0.5) // Using Math.random() as seed is not directly applicable here
      .slice(0, 5); // Always 5 elements for drag-and-drop per round
    if (selectedElements.length > 0) {
      gameRounds.push({ type: 'drag-and-drop', elements: selectedElements });
    }
  }

  // Add multiple-choice challenges
  for (let i = 0; i < multipleChoiceRounds; i++) {
    if (availableMultipleChoiceQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMultipleChoiceQuestions.length);
      const question = availableMultipleChoiceQuestions.splice(randomIndex, 1)[0]; // Pick and remove
      gameRounds.push({ type: 'multiple-choice', question: question });
    }
  }

  // Add fill-in-the-blank challenges
  for (let i = 0; i < fillInBlankRounds; i++) {
    if (availableFillInBlankQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableFillInBlankQuestions.length);
      const question = availableFillInBlankQuestions.splice(randomIndex, 1)[0]; // Pick and remove
      gameRounds.push({ type: 'omplir-buits', question: question });
    }
  }

  // Shuffle the final gameRounds array to mix the challenge types
  gameRounds = gameRounds.sort(() => Math.random() - 0.5);

  // If after distribution we still don't have enough rounds, add more from available pools
  while (gameRounds.length < totalRounds) {
    if (gameRounds.filter(c => c.type === 'drag-and-drop').length < dragDropRounds && availableElements.length >=5) {
      const selectedElements = [...availableElements]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      gameRounds.push({ type: 'drag-and-drop', elements: selectedElements });
    } else if (gameRounds.filter(c => c.type === 'multiple-choice').length < multipleChoiceRounds && availableMultipleChoiceQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMultipleChoiceQuestions.length);
      const question = availableMultipleChoiceQuestions.splice(randomIndex, 1)[0];
      gameRounds.push({ type: 'multiple-choice', question: question });
    } else if (gameRounds.filter(c => c.type === 'omplir-buits').length < fillInBlankRounds && availableFillInBlankQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableFillInBlankQuestions.length);
      const question = availableFillInBlankQuestions.splice(randomIndex, 1)[0];
      gameRounds.push({ type: 'omplir-buits', question: question });
    } else {
        // Fallback: If all specific pools are exhausted, add from any remaining available questions (if any)
        const allRemaining = [...availableMultipleChoiceQuestions, ...availableFillInBlankQuestions];
        if (allRemaining.length > 0) {
            const randomIndex = Math.floor(Math.random() * allRemaining.length);
            const question = allRemaining.splice(randomIndex, 1)[0];
            gameRounds.push({ type: question.tipus, question: question });
        } else {
            // If truly no more questions, break to prevent infinite loop
            break;
        }
    }
  }
}


/**
 * Displays the next challenge in the game sequence.
 * Transitions between drag-and-drop, multiple-choice, and fill-in-the-blank sections.
 */
function displayNextChallenge() {
  stopQuestionTimer(); // Stop any active question timer before showing the next challenge

  // Check if all challenges are completed
  if (currentChallengeIndex >= preguntesTotals || currentChallengeIndex >= gameRounds.length) {
    finalitzarJoc();
    return;
  }

  preguntesFetes++;

  // Create or get the info bar container
  let infoBar = document.getElementById('topInfoBar');
  if (!infoBar) {
    infoBar = document.createElement('div');
    infoBar.id = 'topInfoBar';
  }
  infoBar.innerHTML = ''; // Clear previous content

  // Update crono (blue box for question count)
  crono.textContent = quickProgressText(preguntesFetes, preguntesTotals);
  infoBar.appendChild(crono);

  // Update cronoPregunta (red box for timer)
  cronoPregunta.textContent = ''; // Will be updated by startQuestionTimer
  infoBar.appendChild(cronoPregunta);
  
  const currentChallenge = gameRounds[currentChallengeIndex];

  // Set the current question for global access
  currentChallengeQuestion = currentChallenge.question;

  // Append the infoBar to the active section
  if (currentChallenge.type === 'drag-and-drop') {
    seccioPregunta.style.display = "none";
    seccioJoc.style.display = "block";
    seccioJoc.prepend(infoBar); // Prepend the combined info bar
    crearTaulell(currentChallenge.elements);
  } else if (currentChallenge.type === 'multiple-choice' || currentChallenge.type === 'omplir-buits') {
    seccioJoc.style.display = "none";
    seccioPregunta.style.display = "block";
    seccioPregunta.prepend(infoBar); // Prepend the combined info bar

    if (currentChallenge.type === 'multiple-choice') {
      mostrarPregunta(currentChallenge.question);
    } else { // omplir-buits
      mostrarPreguntaOmplirBuits(currentChallenge.question);
    }
  }

  questionTimeRemaining = questionTimerLimit;
  startQuestionTimer();
}

/**
 * Creates the drag-and-drop board with elements and drop zones.
 * @param {Array<Object>} elementsToUse - Array of element objects to be used in this round.
 */
function crearTaulell(elementsToUse) {
  puntuacioMini = 0;
  intentsMini = 0;
  zonaDrop.innerHTML = "";
  zonaElements.innerHTML = "";

  const barrejatsDrop = [...elementsToUse].sort(() => Math.random() - 0.5);
  let barrejatsElements = [...elementsToUse].sort(() => Math.random() - 0.5);

  // Ensure elements to drag are not in the same order as drop zones
  while (
    barrejatsElements.every((el, i) => el.simbol === barrejatsDrop[i].simbol)
  ) {
    barrejatsElements = [...elementsToUse].sort(() => Math.random() - 0.5);
  }

  barrejatsDrop.forEach((el) => {
    const drop = document.createElement("div");
    drop.className = "zona-drop";
    drop.dataset.element = el.simbol;
    drop.textContent = el.simbol; // Display symbol in drop zone
    zonaDrop.appendChild(drop);
  });

  barrejatsElements.forEach((el) => {
    const bot = document.createElement("div");
    bot.className = "element";
    bot.id = `btn-zone-${el.simbol}`; // Use template literals for ID
    bot.textContent = el.nom; // Display element name on draggable element
    bot.setAttribute("draggable", true);
    bot.dataset.element = el.simbol;
    zonaElements.appendChild(bot);
  });

  activarDragAndDrop();
}

/**
 * Activates drag-and-drop functionality for elements and zones.
 */
function activarDragAndDrop() {
  const elements = document.querySelectorAll(".element");
  const zones = document.querySelectorAll(".zona-drop");

  elements.forEach((el) => {
    el.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", el.dataset.element); // Element symbol
      e.dataTransfer.setData("text/name", el.textContent); // Element name
    });
  });

  zones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => e.preventDefault()); // Allow drop
    zone.addEventListener("dragenter", (e) => zone.classList.add("dragover")); // Visual feedback
    zone.addEventListener("dragleave", (e) => zone.classList.remove("dragover")); // Visual feedback

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("dragover"); // Remove dragover class

      const elementSymbol = e.dataTransfer.getData("text/plain");
      const elementName = e.dataTransfer.getData("text/name");

      intents++; // Increment total game attempts
      intentsMini++; // Current drag-and-drop round attempts

      // Check if the dropped element matches the zone and the zone is empty
      if (
        elementSymbol === zone.dataset.element &&
        zone.textContent === zone.dataset.element // Check if the zone still contains its symbol (i.e., is empty)
      ) {
        zone.classList.add("encert");
        zone.textContent = elementName; // Display element name in the drop zone after correct drop
        puntuacio++; // Increment total game score
        puntuacioMini++; // Current drag-and-drop round score

        zone.style.pointerEvents = "none"; // Make drop zone non-interactable

        const btn = document.getElementById(`btn-zone-${elementSymbol}`);
        if (btn) {
          btn.setAttribute("draggable", false); // Make draggable element non-draggable
          btn.classList.add("desactived"); // Add deactivated style
        }

        // Check if all elements in this drag-and-drop round are correctly placed
        if (puntuacioMini === zones.length) {
          stopQuestionTimer(); // Stop timer as round is completed
          currentChallengeIndex++;
          setTimeout(displayNextChallenge, 500); // Small delay before next challenge
        }
      } else {
        zone.classList.add("error");
        const originalSymbol = zone.dataset.element;
        zone.textContent = "❌"; // Show error icon
        setTimeout(() => {
          zone.textContent = originalSymbol; // Revert text
          zone.classList.remove("error"); // Remove error style
        }, 1000);
      }
    });
  });
}

/**
 * Displays a multiple-choice question.
 * @param {Object} question - The question object to display.
 */
function mostrarPregunta(question) {
  textPregunta.textContent = question.pregunta;
  opcionsRespostes.innerHTML = ""; // Clear previous options

  // Shuffle options to prevent correct answer from always being in the same spot
  const barrejadesOpcions = [...question.opcions].sort(() => Math.random() - 0.5);

  barrejadesOpcions.forEach((opcio) => {
    const button = document.createElement("button");
    button.textContent = opcio;
    button.classList.add("opcio-resposta");
    button.addEventListener("click", () => verificarResposta(opcio));
    opcionsRespostes.appendChild(button);
  });

  botoSeguentPregunta.style.display = "none"; // Hide "Next" button until answered
}

/**
 * Verifies the selected answer for a multiple-choice question.
 * @param {string} respostaSeleccionada - The answer chosen by the user.
 */
function verificarResposta(respostaSeleccionada) {
  stopQuestionTimer(); // Stop the interval
  cronoPregunta.textContent = `${questionTimeRemaining}s`; // Show remaining time
  intents++; // Increment total game attempts

  const buttons = opcionsRespostes.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true; // Disable all buttons after an answer is selected
    if (button.textContent === currentChallengeQuestion.respostaCorrecta) {
      button.classList.add("correcta");
    } else if (button.textContent === respostaSeleccionada) {
      button.classList.add("incorrecta");
    }
  });

  if (respostaSeleccionada === currentChallengeQuestion.respostaCorrecta) {
    puntuacio++; // Increment total game score
  }

  botoSeguentPregunta.style.display = "block"; // Show "Next" button
  botoSeguentPregunta.onclick = () => {
    currentChallengeIndex++;
    displayNextChallenge();
  };
}

/**
 * Displays a fill-in-the-blank question.
 * @param {Object} question - The question object to display.
 */
function mostrarPreguntaOmplirBuits(question) {
  // Replace [BLANC] placeholder with an input field
  const questionTextHtml = question.pregunta.replace("[BLANC]", `<input type="text" id="fillInBlankInput" placeholder="" autocomplete="off">`);
  textPregunta.innerHTML = questionTextHtml; // Use innerHTML to render the input

  opcionsRespostes.innerHTML = ""; // Clear any previous options

  const checkAnswerButton = document.createElement("button");
  checkAnswerButton.textContent = t("common.check_answer");
  checkAnswerButton.id = "checkAnswerBtn";
  opcionsRespostes.appendChild(checkAnswerButton);

  botoSeguentPregunta.style.display = "none"; // Hide "Next" button initially

  // Add event listener to the check answer button
  const fillInBlankInput = document.getElementById("fillInBlankInput");
  if (fillInBlankInput) {
      fillInBlankInput.addEventListener("keydown", (e) => {
          // Allow submitting with Enter key
          if (e.key === "Enter") {
              e.preventDefault(); // Prevent default Enter behavior (e.g., new line)
              const userInput = fillInBlankInput.value.trim();
              verificarRespostaOmplirBuits(userInput);
          }
      });
  }

  checkAnswerButton.onclick = () => {
    const userInput = document.getElementById("fillInBlankInput").value.trim();
    verificarRespostaOmplirBuits(userInput);
  };
}

/**
 * Verifies the user's answer for a fill-in-the-blank question.
 * @param {string} respostaUsuari - The user's typed answer.
 */
function verificarRespostaOmplirBuits(respostaUsuari) {
  stopQuestionTimer(); // Stop the question timer once an answer is submitted
  intents++; // Increment total game attempts

  const inputField = document.getElementById("fillInBlankInput");
  const checkAnswerButton = document.getElementById("checkAnswerBtn");

  inputField.disabled = true; // Disable input after answer
  checkAnswerButton.disabled = true; // Disable button after answer

  // Normalize answers for comparison (case-insensitive, remove extra spaces)
  const normalizedUserAnswer = respostaUsuari.toLowerCase().replace(/\s+/g, ' ').trim();
  const normalizedCorrectAnswer = currentChallengeQuestion.respostaCorrecta.toLowerCase().replace(/\s+/g, ' ').trim();

  if (normalizedUserAnswer === normalizedCorrectAnswer) {
    puntuacio++; // Increment total game score
    inputField.classList.add("correcta-input"); // Add a class for visual feedback (you might need to define this in CSS)
    inputField.style.backgroundColor = '#d4edda'; // Light green
    inputField.style.borderColor = '#28a745'; // Green border
  } else {
    inputField.classList.add("incorrecta-input"); // Add a class for visual feedback
    inputField.style.backgroundColor = '#f8d7da'; // Light red
    inputField.style.borderColor = '#dc3545'; // Red border
    // Optionally, display the correct answer
    const correctAnswerDisplay = document.createElement('p');
    correctAnswerDisplay.textContent = t("common.correct_answer_was", { answer: currentChallengeQuestion.respostaCorrecta });
    correctAnswerDisplay.style.color = '#28a745';
    correctAnswerDisplay.style.fontWeight = 'bold';
    opcionsRespostes.appendChild(correctAnswerDisplay);
  }

  botoSeguentPregunta.style.display = "block"; // Show "Next" button
  botoSeguentPregunta.onclick = () => {
    currentChallengeIndex++;
    displayNextChallenge();
  };
}

/**
 * Starts the global game timer.
 */
function startGlobalTimer() {
  if (globalTimerInterval) return; // Prevent multiple timers
  seconds = 0; // Reset global timer
  globalTimerInterval = setInterval(() => {
    seconds++;
    // Optional: Update global crono display with overall game time
    // crono.textContent = `Temps: ${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  }, 1000);
}

/**
 * Stops the global game timer.
 */
function stopGlobalTimer() {
  clearInterval(globalTimerInterval);
  globalTimerInterval = null;
}

/**
 * Starts the per-question timer.
 */
function startQuestionTimer() {
  stopQuestionTimer(); // Ensure any previous timer is cleared
  
  // Update cronoPregunta text directly with only the timer info
  cronoPregunta.textContent = `${questionTimeRemaining}s`;

  questionTimerInterval = setInterval(() => {
    questionTimeRemaining--;
    cronoPregunta.textContent = `${questionTimeRemaining}s`;

    if (questionTimeRemaining <= 0) {
      handleQuestionTimeout();
    }
  }, 1000);
}

/**
 * Stops the per-question timer.
 */
function stopQuestionTimer() {
  clearInterval(questionTimerInterval);
  questionTimerInterval = null;
  // When stopped, ensure it shows the remaining time if not 0, or 0s if it expired.
  // This is handled by the calls to stopQuestionTimer() followed by setting textContent.
  // If it stops because of answering, textContent will be set by verificarResposta.
  // If it stops because of timeout, textContent will be set by handleQuestionTimeout which then clears it.
  // For a clear stop, ensure it always reflects the final state.
  // For `verificarResposta`, it sets `cronoPregunta.textContent = `${questionTimeRemaining}s`` before calling stop,
  // so this part here would just ensure it's cleared if no specific value is needed.
  // Based on the user request: "when s'ha parat el temps es mostrin els segons que queden (ex: 6S)"
  // The `verificarResposta` handles this by setting the text before stopping.
  // For timeout, "when s'acabi el temps es mostrin 0S" which `handleQuestionTimeout` also manages.
  // So, this `stopQuestionTimer` can just clear the interval and implicitly the content will be set elsewhere or left as is.
}

/**
 * Handles the event when the per-question timer runs out.
 * Marks the current question as incorrect and moves to the next challenge.
 */
function handleQuestionTimeout() {
  stopQuestionTimer(); // Stop the timer
  cronoPregunta.textContent = "0s"; // Explicitly show 0s when time runs out

  // Handle current challenge type based on what's active
  const currentChallenge = gameRounds[currentChallengeIndex];

  if (currentChallenge.type === 'multiple-choice') {
    // Disable all options and visually mark correct/incorrect if needed
    const buttons = opcionsRespostes.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
      if (button.textContent === currentChallengeQuestion.respostaCorrecta) {
        button.classList.add("correcta"); // Show correct answer
      }
    });
    // Add a message about timeout
    const timeoutMsg = document.createElement('p');
    timeoutMsg.textContent = t("quick.timeout_incorrect");
    timeoutMsg.style.color = '#dc3545'; // Red color
    timeoutMsg.style.fontWeight = 'bold';
    opcionsRespostes.appendChild(timeoutMsg);

  } else if (currentChallenge.type === 'omplir-buits') {
    const inputField = document.getElementById("fillInBlankInput");
    const checkAnswerButton = document.getElementById("checkAnswerBtn");
    if (inputField) inputField.disabled = true;
    if (checkAnswerButton) checkAnswerButton.disabled = true;

    // Add a message about timeout and reveal correct answer
    const timeoutMsg = document.createElement('p');
    timeoutMsg.textContent = t("quick.timeout_correct_answer", { answer: currentChallengeQuestion.respostaCorrecta });
    timeoutMsg.style.color = '#dc3545'; // Red color
    timeoutMsg.style.fontWeight = 'bold';
    if (opcionsRespostes) opcionsRespostes.appendChild(timeoutMsg);

  } else if (currentChallenge.type === 'drag-and-drop') {
    const zones = document.querySelectorAll(".zona-drop");
    const elements = document.querySelectorAll(".element");

    // Mark all un-dropped elements as disabled
    elements.forEach(el => {
        if (!el.classList.contains("desactived")) { // Only if not already dropped
            el.setAttribute("draggable", false);
            el.classList.add("desactived");
        }
    });

    // Mark all empty drop zones as errors
    zones.forEach(zone => {
        if (zone.textContent === zone.dataset.element) { // If zone still contains its symbol, it's empty
            zone.classList.add("error");
            zone.textContent = "❌";
        }
        zone.style.pointerEvents = "none"; // Disable further interaction
    });
  }

  // Increment total attempts for this timed question/round
  intents++;

  // Automatically move to the next challenge after a short delay
  currentChallengeIndex++;
  setTimeout(displayNextChallenge, 500);
}

/**
 * Finalizes the game, displays results, and sends data to the server.
 */
function finalitzarJoc() {
  stopGlobalTimer(); // Stop the overall game timer
  stopQuestionTimer(); // Stop any active question timer
  stopSaveStatus(); // Stop saving progress to the server

  const puntuacioFinal = calculaPuntuacio(puntuacio, intents);

  // Hide game sections and show result section
  seccioJoc.style.display = "none";
  seccioPregunta.style.display = "none";
  seccioResultat.style.display = "block";

  const minutes = Math.floor(seconds / 60);
  const seconds2 = seconds % 60;

  missatgeFinal.innerHTML = `
    N'has encertat <strong>${puntuacio}</strong> en <strong>${intents}</strong> intents. </br>
    En ${minutes}:${seconds2 < 10 ? '0' : ''}${seconds2} segons.</br>
    <h1>${puntuacioFinal}</h1>
  `;

  // Send game finalization data to the server

}

/**
 * Resets the game to its initial state, showing the form.
 */
function reiniciarJoc() {
  seccioFormulari.style.display = "block";
  seccioJoc.style.display = "none";
  seccioPregunta.style.display = "none";
  seccioResultat.style.display = "none";
  zonaDrop.innerHTML = "";
  zonaElements.innerHTML = "";
  opcionsRespostes.innerHTML = "";
  textPregunta.textContent = "";
  crono.innerHTML = '';
  cronoPregunta.innerHTML = ''; // Clear cronoPregunta content as well
  // Remove the topInfoBar if it exists
  const infoBar = document.getElementById('topInfoBar');
  if (infoBar) {
      infoBar.remove();
  }
  stopGlobalTimer();
  stopQuestionTimer();
  stopSaveStatus();
}

/**
 * Calculates the final score percentage.
 * @param {number} totalCorrect - Total number of correct answers.
 * @param {number} totalAttempts - Total number of attempts.
 * @returns {string} The formatted score percentage.
 */
function calculaPuntuacio(totalCorrect, totalAttempts) {
  if (totalAttempts === 0) {
    return "0.00%";
  }

  let puntuacioPercentatge = (totalCorrect / totalAttempts) * 100;
  puntuacioPercentatge = Math.min(Math.max(puntuacioPercentatge, 0), 100); // Clamp between 0 and 100
  const resultatFormatat = puntuacioPercentatge.toFixed(2);

  return resultatFormatat + "%";
}

/**
 * Makes a request to the server to start a new game and get a game ID and seed.
 */
function newGameRequest() {
  return null;
}

/**
 * Starts periodically saving game progress to the server.
 */
function startSaveStatus() {
  return null;
}

/**
 * Stops periodically saving game progress to the server.
 */
function stopSaveStatus() {
  return null;
}

/**
 * Function to handle returning from within the game to the initial form.
 */
function tornarEnrereEnJoc() {
  stopGlobalTimer();    // Stop the overall game timer
  stopQuestionTimer();  // Stop any active per-question timer
  stopSaveStatus();     // Stop sending progress to the server
  reiniciarJoc();       // Reset game state and show the form
}

window.reiniciarJoc = reiniciarJoc;
window.tornarEnrereEnJoc = tornarEnrereEnJoc;
