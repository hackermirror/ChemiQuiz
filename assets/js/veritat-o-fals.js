const questionsVf = window.ChemiQuizI18n.content("veritat_o_fals");
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


let scoreVf = 0;
let totalQuestionsVf = 10;
let questionsAskedVf = 0;
let timerIntervalVf = null;
let questionsPoolVf = [];

// Variables per a la comunicació amb el servidor (si es manté la funcionalitat)
let game_id_vf = 0;
let seed_vf = 0;
let intervalStatusVf = null;

const formulariVf = document.getElementById("formulari-vf");
const jocVf = document.getElementById("joc-vf");
const resultatVf = document.getElementById("resultat-vf");
const cronoVf = document.getElementById("crono-vf");
const scoreDisplayVf = document.getElementById("score-vf");
const progressDisplayVf = document.getElementById("progress-vf");
const questionDisplayVf = document.getElementById("question-vf");
const optionsDivVf = document.getElementById("options-vf");
const feedbackVf = document.getElementById("feedback-vf");
const missatgeFinalVf = document.getElementById("missatgeFinalVf");

const tornarMenuJocVfBtn = document.getElementById("tornarMenuJocVf");
const tornarMenuResultatVfBtn = document.getElementById("tornarMenuResultatVf");

function shuffleArray(array) {
  // Use a simple random shuffle if seed is not critical for local game
  return array
    .map((value) => ({ value, sort: Math.random() })) // Changed from seed to Math.random() for local shuffle
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function startTimerVf(duration) {
  clearInterval(timerIntervalVf);
  let timeLeft = duration;
  cronoVf.textContent = timerText(timeLeft);

  timerIntervalVf = setInterval(() => {
    timeLeft--;
    cronoVf.textContent = timerText(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerIntervalVf);
      feedbackVf.textContent = t("common.time_up");
      feedbackVf.classList.remove('correct-text', 'error-text');
      feedbackVf.classList.add('error-text');
      disableOptionsVf();
      setTimeout(nextQuestionOrEndVf, 1500);
    }
  }, 1000);
}

function disableOptionsVf() {
  const buttons = optionsDivVf.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function enableOptionsVf() {
  const buttons = optionsDivVf.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
}

function getNewQuestionVf() {
  // Neteja les classes de feedback i colors de les opcions anteriors
  feedbackVf.textContent = "";
  feedbackVf.classList.remove('correct-text', 'error-text');

  const optionButtons = optionsDivVf.querySelectorAll(".option-vf");
  optionButtons.forEach(btn => {
      btn.classList.remove('correct', 'incorrect');
      btn.disabled = false; // Re-habilita els botons
  });


  if (questionsAskedVf >= totalQuestionsVf) {
    acabarJocVf();
    return;
  }

  const current = questionsPoolVf[questionsAskedVf];

  questionsAskedVf++;

  progressDisplayVf.textContent = progressText(questionsAskedVf, totalQuestionsVf);
  questionDisplayVf.textContent = current.pregunta;

  // Assegura't que els botons True/False estiguin sempre presents i actius
  // No cal recrear l'HTML si ja està en el DOM, només actualitzar-lo
  const trueBtn = optionsDivVf.querySelector(".true-button");
  const falseBtn = optionsDivVf.querySelector(".false-button");

  trueBtn.onclick = () => checkAnswerVf(true, current.respostaCorrecta, trueBtn);
  falseBtn.onclick = () => checkAnswerVf(false, current.respostaCorrecta, falseBtn);

  startTimerVf(15);
}

function checkAnswerVf(selected, correct, clickedButton) {
  clearInterval(timerIntervalVf);
  disableOptionsVf();

  const trueBtn = optionsDivVf.querySelector(".true-button");
  const falseBtn = optionsDivVf.querySelector(".false-button");

  // Marca la resposta correcta en verd
  if (correct === true) {
      trueBtn.classList.add('correct');
      falseBtn.classList.add('incorrect'); // Si la correcta es VERITAT, FALS es incorrecta
  } else { // correct === false
      falseBtn.classList.add('correct');
      trueBtn.classList.add('incorrect'); // Si la correcta es FALS, VERITAT es incorrecta
  }

  // Si l'usuari ha seleccionat la incorrecta, la marca explícitament
  if (selected !== correct) {
      clickedButton.classList.add('incorrect');
      clickedButton.classList.remove('correct'); // Assegura que no tingui la classe 'correct'
  }


  if (selected === correct) {
    feedbackVf.textContent = t("common.correct");
    feedbackVf.classList.remove('error-text');
    feedbackVf.classList.add('correct-text');
    scoreVf++;
  } else {
    feedbackVf.textContent = t("common.incorrect"); // Simplificat
    feedbackVf.classList.remove('correct-text');
    feedbackVf.classList.add('error-text');
  }

  scoreDisplayVf.textContent = scoreText(scoreVf);

  setTimeout(() => {
    getNewQuestionVf();
  }, 1500);
}

function nextQuestionOrEndVf() {
  if (questionsAskedVf < totalQuestionsVf) {
    getNewQuestionVf();
  } else {
    acabarJocVf();
  }
}

function acabarJocVf() {
  clearInterval(timerIntervalVf);
  stopSaveStatusVf();
  jocVf.style.display = "none";
  resultatVf.style.display = "block";
  missatgeFinalVf.textContent = t("vf.final_message", { score: scoreVf, total: totalQuestionsVf });

  // Aquí pots afegir la lògica per enviar la puntuació al servidor si la vols mantenir

}

function reiniciarJocVf() {
  clearInterval(timerIntervalVf);
  scoreVf = 0;
  questionsAskedVf = 0;
  scoreDisplayVf.textContent = scoreText(0);
  progressDisplayVf.textContent = progressText(0, 0);
  resultatVf.style.display = "none";
  formulariVf.style.display = "block";
  feedbackVf.textContent = "";
  feedbackVf.classList.remove('correct-text', 'error-text');
  cronoVf.textContent = "";
  stopSaveStatusVf(); // Assegura't de parar el guardat d'estat
}

function tornarAlMenuVf() {
  clearInterval(timerIntervalVf);
  stopSaveStatusVf();
  scoreVf = 0;
  questionsAskedVf = 0;
  scoreDisplayVf.textContent = scoreText(0);
  progressDisplayVf.textContent = progressText(0, 0);
  feedbackVf.textContent = "";
  feedbackVf.classList.remove('correct-text', 'error-text');
  cronoVf.textContent = "";

  jocVf.style.display = "none";
  resultatVf.style.display = "none";
  formulariVf.style.display = "block"; // Tornem al formulari d'inici del joc V/F
}

// Listener per al formulari de configuració del joc
document.getElementById("configuracioJocVf").addEventListener("submit", (e) => {
  e.preventDefault();

  const dificultat = document.getElementById("dificultatVf").value;
  if (dificultat === "facil") totalQuestionsVf = 10;
  else if (dificultat === "mitja") totalQuestionsVf = 15;
  else if (dificultat === "dificil") totalQuestionsVf = 20;

  if (totalQuestionsVf > questionsVf.length) {
    totalQuestionsVf = questionsVf.length;
    alert(
      t("vf.available_questions", { count: questionsVf.length })
    );
  }

  questionsPoolVf = shuffleArray(questionsVf).slice(0, totalQuestionsVf);

  formulariVf.style.display = "none";
  resultatVf.style.display = "none";
  jocVf.style.display = "block";

  scoreVf = 0;
  questionsAskedVf = 0;
  scoreDisplayVf.textContent = scoreText(0);
  progressDisplayVf.textContent = progressText(0, 0);
  feedbackVf.textContent = "";
  feedbackVf.classList.remove('correct-text', 'error-text');
  getNewQuestionVf();
});

// Listeners per als botons de tornar al menú
tornarMenuJocVfBtn.addEventListener("click", tornarAlMenuVf);
tornarMenuResultatVfBtn.addEventListener("click", tornarAlMenuVf);

// Funcions per a la comunicació amb el servidor (adapta-les si cal)
function newGameRequestVf() {
  return null;
}

function startSaveStatusVf() {
  return null;
}

function stopSaveStatusVf() {
  return null;
}