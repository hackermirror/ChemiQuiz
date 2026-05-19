const questions = window.ChemiQuizI18n.content("questionaris");
const t = window.ChemiQuizI18n.t;

function scoreText(value) {
  return t("common.score_n", { count: value });
}

function progressText(current, total) {
  return t("common.question_of_total", { current: current, total: total });
}

function timerText(seconds) {
  return t("common.time_remaining_seconds", { seconds: seconds });
}


let score = 0;
let totalQuestions = 10;
let questionsAsked = 0;
let timerInterval = null;
let questionsPool = [];

let game_id = 0;
let seed = 0;
let intervalStatus = null;

let tipus_preguntes = "";

const formulari = document.getElementById("formulari");
const joc = document.getElementById("joc");
const resultat = document.getElementById("resultat");
const crono = document.getElementById("crono");
const scoreDisplay = document.getElementById("score");
const progressDisplay = document.getElementById("progress");
const questionDisplay = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const feedback = document.getElementById("feedback");
const missatgeFinal = document.getElementById("missatgeFinal");

// Referències als botons de tornar al menú
const tornarMenuJocBtn = document.getElementById("tornarMenuJoc");
// IMPORTANT: Afegeix un id="tornarMenuResultat" al botó de la secció de resultats si vols que funcioni amb aquesta lògica
const tornarMenuResultatBtn = document.getElementById("tornarMenuResultat");


function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random(seed) }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function startTimer(duration) {
  clearInterval(timerInterval);
  let timeLeft = duration;
  crono.textContent = timerText(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    crono.textContent = timerText(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      feedback.textContent = t("common.time_up");
      feedback.classList.remove('correct-text', 'error-text'); // Neteja classes per defecte
      feedback.classList.add('error-text'); // Aplica color vermell al text
      disableOptions();
      setTimeout(nextQuestionOrEnd, 1500);
    }
  }, 1000);
}

function disableOptions() {
  const buttons = optionsDiv.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function enableOptions() {
  const buttons = optionsDiv.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
}

function getNewQuestion() {
  // Neteja les classes de feedback i colors de les opcions anteriors
  feedback.textContent = "";
  feedback.classList.remove('correct-text', 'error-text'); // Neteja totes les classes de color del feedback

  // Neteja les classes de color de totes les opcions
  const oldOptionButtons = optionsDiv.querySelectorAll(".option");
  oldOptionButtons.forEach(btn => {
      btn.classList.remove('correct', 'incorrect');
      btn.disabled = false; // Assegura que estiguin habilitats per si es re-usen o per quan es generen de nou
  });


  if (questionsAsked >= totalQuestions) {
    acabarJoc();
    return;
  }

  const current = questionsPool[questionsAsked];

  console.log(current);

  questionsAsked++;

  progressDisplay.textContent = progressText(questionsAsked, totalQuestions);
  questionDisplay.textContent = current.pregunta;

  optionsDiv.innerHTML = ""; // Assegura que es netegen completament els botons anteriors

  shuffleArray(current.opcions).forEach((opcio) => {
    const btn = document.createElement("button");
    btn.textContent = opcio;
    btn.className = "option";
    btn.disabled = false; // Habilita el botó per defecte
    btn.onclick = () => checkAnswer(opcio, current.respostaCorrecta);
    optionsDiv.appendChild(btn);
  });

  startTimer(15);
}

function checkAnswer(selected, correct) {
  clearInterval(timerInterval);
  disableOptions(); // Deshabilita totes les opcions immediatament

  const optionButtons = optionsDiv.querySelectorAll(".option");

  // Recorre totes les opcions per aplicar les classes de color
  optionButtons.forEach(btn => {
      if (btn.textContent === correct) {
          btn.classList.add('correct'); // La resposta correcta sempre és verda
      } else if (btn.textContent === selected) {
          btn.classList.add('incorrect'); // La resposta seleccionada és vermella si és incorrecta
      }
  });


  if (selected === correct) {
    feedback.textContent = t("common.correct");
    feedback.classList.remove('error-text'); // Neteja la classe d'error si existeix
    feedback.classList.add('correct-text'); // Afegeix la classe de text correcte
    score++;
  } else {
    feedback.textContent = t("common.incorrect"); // Simplificat a només "Incorrecte."
    feedback.classList.remove('correct-text'); // Neteja la classe de correcte si existeix
    feedback.classList.add('error-text'); // Afegeix la classe de text d'error
  }

  scoreDisplay.textContent = scoreText(score);

  setTimeout(() => {
    // Les classes de color del feedback es netejaran al principi de getNewQuestion()
    getNewQuestion();
  }, 1500);
}

function nextQuestionOrEnd() {
  if (questionsAsked < totalQuestions) {
    getNewQuestion();
  } else {
    acabarJoc();
  }
}

function acabarJoc() {
  clearInterval(timerInterval);
  stopSaveStatus();
  joc.style.display = "none";
  resultat.style.display = "block";
  missatgeFinal.textContent = t("questionaris.final_message", { score: score, total: totalQuestions });

  if (!game_id) return;

  $.ajax({
    url: "https://fun.codelearn.cat/hackathon/game/finalize",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      game_id: game_id,
      data: {},
      score: score,
    }),
    success: function (data, textStatus, jqXHR) {
      console.log(t("common.saved_ok"));
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(t("common.finalize_error", { status: textStatus }));
    },
  });
}

function reiniciarJoc() {
  clearInterval(timerInterval);
  score = 0;
  questionsAsked = 0;
  scoreDisplay.textContent = scoreText(0);
  progressDisplay.textContent = progressText(0, 0);
  resultat.style.display = "none";
  formulari.style.display = "block"; // Tornar al formulari
  feedback.textContent = "";
  feedback.classList.remove('correct-text', 'error-text'); // Neteja classes de feedback
  crono.textContent = "";
  // Assegurem-nos de parar el guardat de l'estat si es reinicia des dels resultats
  stopSaveStatus();
}

// NOU: Funció per tornar al menú (formulari) des de qualsevol punt del joc
function tornarAlMenu() {
  clearInterval(timerInterval); // Aturem el cronòmetre
  stopSaveStatus(); // Aturem el guardat automàtic del progrés
  score = 0; // Reiniciem la puntuació
  questionsAsked = 0; // Reiniciem les preguntes
  scoreDisplay.textContent = scoreText(0);
  progressDisplay.textContent = progressText(0, 0);
  feedback.textContent = "";
  feedback.classList.remove('correct-text', 'error-text'); // Neteja classes de feedback
  crono.textContent = "";

  joc.style.display = "none"; // Ocultem la secció del joc
  resultat.style.display = "none"; // Ocultem la secció de resultats
  formulari.style.display = "block"; // Mostrem la secció del formulari (menú principal)
}

document.getElementById("configuracioJoc").addEventListener("submit", (e) => {
  e.preventDefault();
  newGameRequest();
  startSaveStatus();

  const dificultat = document.getElementById("dificultat").value;
  if (dificultat === "facil") totalQuestions = 10;
  else if (dificultat === "mitja") totalQuestions = 15;
  else if (dificultat === "dificil") totalQuestions = 20;

  tipus_preguntes = document.getElementById("tipus_preguntes").value;

  // Si demanes més preguntes de les que tenim, ajustem
  if (totalQuestions > questions.length) {
    totalQuestions = questions.length;
    alert(
      t("questionaris.available_questions", { count: questions.length })
    );
  }

  questionsPool = shuffleArray(questions)
    .filter(
      (element) =>
        tipus_preguntes === "aleatori" || element.tipus === tipus_preguntes
    )
    .slice(0, totalQuestions);

  console.log(questionsPool);

  formulari.style.display = "none";
  resultat.style.display = "none";
  joc.style.display = "block";

  score = 0;
  questionsAsked = 0;
  scoreDisplay.textContent = scoreText(0);
  progressDisplay.textContent = progressText(0, 0);
  feedback.textContent = "";
  feedback.classList.remove('correct-text', 'error-text'); // Neteja classes de feedback
  getNewQuestion();
});

// NOU: Assignar la funció 'tornarAlMenu' als botons
tornarMenuJocBtn.addEventListener("click", tornarAlMenu);
// Assegura't que l'element amb ID 'tornarMenuResultat' existeix al teu HTML si el vols usar
if (tornarMenuResultatBtn) {
    tornarMenuResultatBtn.addEventListener("click", tornarAlMenu);
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
        startSaveStatus();
      } else {
        game_id = 0;
        console.log(t("common.create_error_status", { status: jqXHR.status }));
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      game_id = 0;
      console.log(t("common.create_error", { status: textStatus }));
    },
  });
}
function startSaveStatus() {
  if (!game_id) return;
  if (intervalStatus) return; // si ja està corrent no fem res
  intervalStatus = setInterval(() => {
    $.ajax({
      url: "https://fun.codelearn.cat/hackathon/game/store_progress",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        game_id: game_id,
        data: { questionsAnswered: questionsAsked },
      }),
      success: function (data, textStatus, jqXHR) {
        console.log("Progress saved");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Progress save failed: " + textStatus);
      },
    });
  }, 15000);
}
function stopSaveStatus() {
  clearInterval(intervalStatus);
  intervalStatus = null;
}

//carregar tipus preguntes
[...new Set(questions.map((q) => q.tipus))].forEach((opcio) => {
  const option = document.createElement("option");

  option.value = opcio;
  option.textContent = opcio;
  document.getElementById("tipus_preguntes").appendChild(option);
});

window.reiniciarJoc = reiniciarJoc;
