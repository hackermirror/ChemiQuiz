const formulari = document.getElementById("configuracioJoc");
const seccioFormulari = document.getElementById("formulari");
const seccioJoc = document.getElementById("joc");
const seccioResultat = document.getElementById("resultat");
const preguntaBuitDiv = document.getElementById("preguntaBuit");
const zonaElements = document.getElementById("zonaElements");
const crono = document.getElementById("crono");
const missatgeFinal = document.getElementById("missatgeFinal");
const tempsRestantDisplay = document.getElementById("tempsRestant");
const segonsRestantsSpan = document.getElementById("segonsRestants");
const btnNoHoSe = document.getElementById("btnNoHoSe");

let puntuacio = 0;
let intents = 0;
let preguntesFetes = 0;
let preguntesTotals = 5;
let tipusPregunta = "both";
let tempsLimitPerPregunta = 0;

let game_id = 0;
let seed = 0;

let seconds = 0;
let interval = null;
let intervalStatus = null;

let tempsActualPregunta = 0;
let intervalTempsPregunta = null;

const preguntesOmplirBuits = window.ChemiQuizI18n.content("omplir_buits");
const t = window.ChemiQuizI18n.t;

function fillSummaryHtml(correct, attempts, minutes, seconds, finalScore) {
  return t("fill.final_message_html", {
    correct: correct,
    attempts: attempts,
    time: minutes + ':' + seconds,
    score: finalScore
  });
}

function fillProgressText(current, total) {
  return t("common.question_of_total", { current: current, total: total });
}


formulari.addEventListener("submit", (e) => {
  e.preventDefault();

  const dificultat = document.getElementById("dificultat").value;
  tipusPregunta = document.getElementById("tipusPregunta").value;
  tempsLimitPerPregunta = parseInt(document.getElementById("tempsLimit").value);

  iniciarJoc(dificultat);
});

let preguntesActuals = [];
let buitsActuals = [];

btnNoHoSe.addEventListener("click", saltarPregunta);

function iniciarJoc(dificultat) {

  puntuacio = 0;
  intents = 0;
  preguntesFetes = 0;
  preguntaBuitDiv.innerHTML = "";
  zonaElements.innerHTML = "";
  seccioFormulari.style.display = "none";
  seccioJoc.style.display = "block";
  seccioResultat.style.display = "none";

  seconds = 0;
  startTimer();

  const nombrePreguntes = {
    facil: 5,
    mitja: 7,
    dificil: 10,
  }[dificultat];

  preguntesTotals = nombrePreguntes;

  const preguntesFiltrades = preguntesOmplirBuits.filter((q) => {
    if (tipusPregunta === "both") return true;
    return q.tipus === tipusPregunta;
  });

  const preguntesBarrejades = [...preguntesFiltrades].sort(
    () => Math.random(seed) - 0.5
  );
  preguntesActuals = preguntesBarrejades.slice(0, preguntesTotals);

  carregarPregunta();
}

function carregarPregunta() {
  if (preguntesFetes >= preguntesTotals) {
    finalitzarJoc();
    return;
  }

  stopTempsPregunta();

  preguntaBuitDiv.innerHTML = "";
  zonaElements.innerHTML = "";
  buitsActuals = [];

  const pregunta = preguntesActuals[preguntesFetes];
  preguntesFetes++;

  const numeroPregunta = document.createElement("p");
  numeroPregunta.textContent = fillProgressText(preguntesFetes, preguntesTotals);
  crono.replaceChildren(numeroPregunta);

  const partsFrase = pregunta.text.split(/_([^_]+)_/g);

  partsFrase.forEach((part, index) => {
    if (index % 2 === 1) {
      const buit = document.createElement("span");
      buit.className = "buit";
      buit.dataset.respostaCorrecta = part.toLowerCase();
      buit.dataset.estat = "pendent";
      buit.dataset.originalContent = part;

      if (pregunta.tipus === "type" || pregunta.tipus === "both") {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = t("fill.blank_placeholder");
        input.addEventListener("change", (e) =>
          comprovarRespostaEscrita(e, buit)
        );
        buit.appendChild(input);
      }
      if (pregunta.tipus === "drag" || pregunta.tipus === "both") {
        buit.textContent = "";
        buit.addEventListener("dragover", (e) => {
          e.preventDefault();
          if (buit.dataset.estat === "pendent") {
            buit.classList.add("dragover");
          }
        });
        buit.addEventListener("dragleave", () => {
          buit.classList.remove("dragover");
        });
        buit.addEventListener("drop", (e) => comprovarRespostaArrossegar(e, buit));
      }
      preguntaBuitDiv.appendChild(buit);
      buitsActuals.push(buit);
    } else {
      const span = document.createElement("span");
      span.className = "buit-text";
      span.textContent = part;
      preguntaBuitDiv.appendChild(span);
    }
  });

  if (pregunta.tipus === "drag" || pregunta.tipus === "both") {
    let elementsDisponibles = [...pregunta.respostes];
    if (pregunta.extraElements && pregunta.extraElements.length > 0) {
      elementsDisponibles = elementsDisponibles.concat(pregunta.extraElements);
    }

    const barrejatsPerArrossegar = [...elementsDisponibles].sort(
      () => Math.random(seed) - 0.5
    );

    barrejatsPerArrossegar.forEach((res) => {
      const element = document.createElement("div");
      element.className = "element draggable";
      element.textContent = res;
      element.setAttribute("draggable", true);
      element.dataset.valor = res.toLowerCase();
      zonaElements.appendChild(element);
    });

    activarDrag();
  }

  btnNoHoSe.style.display = "block";

  if (tempsLimitPerPregunta > 0) {
    tempsActualPregunta = tempsLimitPerPregunta;
    segonsRestantsSpan.textContent = tempsActualPregunta;
    tempsRestantDisplay.style.display = "block";
    intervalTempsPregunta = setInterval(() => {
      tempsActualPregunta--;
      segonsRestantsSpan.textContent = tempsActualPregunta;
      if (tempsActualPregunta <= 0) {
        clearInterval(intervalTempsPregunta);
        saltarPregunta();
      }
    }, 1000);
  } else {
    tempsRestantDisplay.style.display = "none";
  }
}

function stopTempsPregunta() {
  clearInterval(intervalTempsPregunta);
  intervalTempsPregunta = null;
}

function activarDrag() {
  const elements = document.querySelectorAll(".element.draggable");
  elements.forEach((el) => {
    el.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", el.dataset.valor);
      e.dataTransfer.setData("text/name", el.textContent);
    });
  });
}

function comprovarRespostaEscrita(event, buit) {
  if (buit.dataset.estat === "correcte") return;

  const valorInput = event.target.value.toLowerCase().trim();
  const respostaCorrecta = buit.dataset.respostaCorrecta.toLowerCase();

  intents++;

  if (valorInput === respostaCorrecta) {
    buit.classList.add("encert");
    buit.dataset.estat = "correcte";
    event.target.readOnly = true;
    event.target.value = buit.dataset.originalContent;
    puntuacio++;
  } else {
    buit.classList.add("error");
    setTimeout(() => {
      buit.classList.remove("error");
      event.target.value = "";
    }, 1000);
  }
  comprovarPreguntaCompleta();
}

function comprovarRespostaArrossegar(e, buit) {
  e.preventDefault();
  buit.classList.remove("dragover");

  if (buit.dataset.estat === "correcte") return;

  const valorArrossegat = e.dataTransfer.getData("text/plain").toLowerCase();
  const nomArrossegat = e.dataTransfer.getData("text/name");
  const respostaCorrecta = buit.dataset.respostaCorrecta.toLowerCase();
  const elementDraggable = document.querySelector(
    `.element.draggable[data-valor="${valorArrossegat}"]`
  );

  intents++;

  if (valorArrossegat === respostaCorrecta) {
    buit.classList.add("encert");
    buit.dataset.estat = "correcte";
    buit.textContent = nomArrossegat;

    puntuacio++;

    if (elementDraggable) {
      elementDraggable.classList.add("desactived");
      elementDraggable.setAttribute("draggable", false);
    }
  } else {
    buit.classList.add("error");
    setTimeout(() => {
      buit.classList.remove("error");
      buit.textContent = "";
    }, 1000);
  }
  comprovarPreguntaCompleta();
}

function comprovarPreguntaCompleta() {
  let totsCorrectes = true;
  buitsActuals.forEach((buit) => {
    if (buit.dataset.estat !== "correcte") {
      totsCorrectes = false;
    }
  });

  if (totsCorrectes) {
    stopTempsPregunta();
    setTimeout(() => {
      carregarPregunta();
    }, 500);
  }
}

function saltarPregunta() {
    stopTempsPregunta();

    buitsActuals.forEach(buit => {
        if (buit.dataset.estat === "pendent") {
            buit.classList.remove("encert");
            buit.classList.add("error");
            
            if (buit.querySelector('input')) {
                const input = buit.querySelector('input');
                input.value = buit.dataset.originalContent;
                input.readOnly = true;
            } else {
                buit.textContent = buit.dataset.originalContent;
                const elementDraggable = document.querySelector(`.element.draggable[data-valor="${buit.dataset.respostaCorrecta.toLowerCase()}"]`);
                if (elementDraggable && !elementDraggable.classList.contains("desactived")) {
                  elementDraggable.classList.add("desactived");
                  elementDraggable.setAttribute("draggable", false);
                }
            }
            buit.dataset.estat = "saltada";
        }
    });

    const currentInputs = preguntaBuitDiv.querySelectorAll('input');
    currentInputs.forEach(input => input.readOnly = true);
    const currentDraggables = zonaElements.querySelectorAll('.element.draggable');
    currentDraggables.forEach(el => {
      el.classList.add("desactived");
      el.setAttribute("draggable", false);
    });

    setTimeout(() => {
        carregarPregunta();
    }, 1000);
}

function finalitzarJoc() {
  stopTimer();
  stopSaveStatus();
  stopTempsPregunta();

  const puntuacioFinal = calculaPuntuacio(puntuacio, intents);

  seccioJoc.style.display = "none";
  seccioResultat.style.display = "block";

  const minutes = Math.floor(seconds / 60);
  const secondsDisplay = seconds % 60;
  const formattedSeconds =
    secondsDisplay < 10 ? "0" + secondsDisplay : secondsDisplay;

  missatgeFinal.innerHTML = fillSummaryHtml(puntuacio, intents, minutes, formattedSeconds, puntuacioFinal);

}

function reiniciarJoc() {
  seccioFormulari.style.display = "block";
  seccioJoc.style.display = "none";
  seccioResultat.style.display = "none";
  preguntaBuitDiv.innerHTML = "";
  zonaElements.innerHTML = "";
  buitsActuals = [];
  stopTimer();
  stopTempsPregunta();
}

function tornarEnrereEnJoc() {
  stopTimer();
  stopSaveStatus();
  stopTempsPregunta();
  reiniciarJoc();
}

function startTimer() {
  if (interval) return;
  seconds = 0;
  interval = setInterval(() => {
    seconds++;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function calculaPuntuacio(totalCorrectes, totalIntents) {
  if (totalIntents === 0) {
    return "0.00%";
  }

  let puntuacioPercentatge = (totalCorrectes / totalIntents) * 100;
  puntuacioPercentatge = Math.min(Math.max(puntuacioPercentatge, 0), 100);
  const resultatFormatat = puntuacioPercentatge.toFixed(2);

  return resultatFormatat + "%";
}

function newGameRequest() {
  return null;
}

function startSaveStatus() {
  return null;
}

function stopSaveStatus() {
  return null;
}

window.reiniciarJoc = reiniciarJoc;
window.tornarEnrereEnJoc = tornarEnrereEnJoc;
