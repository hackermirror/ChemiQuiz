const questions = [
  // Història
  {
    pregunta: "Qui va ser el creador de la taula periòdica?",
    opcions: [
      "Dmitri Mendeléiev",
      "Marie Curie",
      "Isaac Newton",
      "Albert Einstein",
    ],
    respostaCorrecta: "Dmitri Mendeléiev",
    tipus: "Història",
  },
  {
    pregunta: "Quin any va publicar Dmitri Mendeléiev la seva taula periòdica?",
    opcions: ["1869", "1905", "1776", "1890"],
    respostaCorrecta: "1869",
    tipus: "Història",
  },
  {
    pregunta: "Quin científic va descobrir l'oxigen?",
    opcions: [
      "Joseph Priestley",
      "Antoine Lavoisier",
      "Robert Boyle",
      "Henry Cavendish",
    ],
    respostaCorrecta: "Joseph Priestley",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el radi?",
    opcions: ["1898", "1905", "1911", "1920"],
    respostaCorrecta: "1898",
    tipus: "Història",
  },
  {
    pregunta: "Qui va proposar la teoria atòmica moderna?",
    opcions: [
      "John Dalton",
      "Niels Bohr",
      "Erwin Schrödinger",
      "Albert Einstein",
    ],
    respostaCorrecta: "John Dalton",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el poloni?",
    opcions: ["1898", "1900", "1910", "1920"],
    respostaCorrecta: "1898",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir la radioactivitat?",
    opcions: [
      "Marie Curie",
      "Henri Becquerel",
      "Ernest Rutherford",
      "James Chadwick",
    ],
    respostaCorrecta: "Henri Becquerel",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir l'electró?",
    opcions: ["1897", "1905", "1911", "1920"],
    respostaCorrecta: "1897",
    tipus: "Història",
  },
  {
    pregunta: "Qui va desenvolupar la teoria de la relativitat?",
    opcions: [
      "Isaac Newton",
      "Albert Einstein",
      "Niels Bohr",
      "Galileo Galilei",
    ],
    respostaCorrecta: "Albert Einstein",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el neutró?",
    opcions: ["1932", "1935", "1940", "1945"],
    respostaCorrecta: "1932",
    tipus: "Història",
  },
  {
    pregunta: "Qui va ser el primer a proposar la idea de l'atomisme?",
    opcions: ["Demòcrit", "Aristòtil", "Epicur", "Plató"],
    respostaCorrecta: "Demòcrit",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el liti?",
    opcions: ["1817", "1820", "1830", "1840"],
    respostaCorrecta: "1817",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir el fòsfor?",
    opcions: [
      "Hennig Brand",
      "Robert Boyle",
      "Antoine Lavoisier",
      "Joseph Priestley",
    ],
    respostaCorrecta: "Hennig Brand",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el clor?",
    opcions: ["1774", "1800", "1820", "1850"],
    respostaCorrecta: "1774",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir el nitrogen?",
    opcions: [
      "Daniel Rutherford",
      "Joseph Priestley",
      "Henry Cavendish",
      "Antoine Lavoisier",
    ],
    respostaCorrecta: "Daniel Rutherford",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el carboni?",
    opcions: ["Ancient", "1772", "1800", "1850"],
    respostaCorrecta: "Ancient",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir el sofre?",
    opcions: [
      "Antoine Lavoisier",
      "Robert Boyle",
      "Joseph Priestley",
      "Demòcrit",
    ],
    respostaCorrecta: "Antoine Lavoisier",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el mercuri?",
    opcions: ["Ancient", "1500", "1600", "1700"],
    respostaCorrecta: "Ancient",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir el plom?",
    opcions: ["Ancient", "Isaac Newton", "Antoine Lavoisier", "Robert Boyle"],
    respostaCorrecta: "Ancient",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el coure?",
    opcions: ["Ancient", "3000 aC", "2000 aC", "1000 aC"],
    respostaCorrecta: "Ancient",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir l'arsènic?",
    opcions: [
      "Albertus Magnus",
      "Antoine Lavoisier",
      "Robert Boyle",
      "Hennig Brand",
    ],
    respostaCorrecta: "Albertus Magnus",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el zinc?",
    opcions: ["1600", "1700", "1800", "1900"],
    respostaCorrecta: "1600",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir el titani?",
    opcions: [
      "William Gregor",
      "Antoine Lavoisier",
      "Robert Boyle",
      "Joseph Priestley",
    ],
    respostaCorrecta: "William Gregor",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el vanadi?",
    opcions: ["1801", "1820", "1840", "1860"],
    respostaCorrecta: "1801",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir el crom?",
    opcions: [
      "Louis Nicolas Vauquelin",
      "Antoine Lavoisier",
      "Robert Boyle",
      "Joseph Priestley",
    ],
    respostaCorrecta: "Louis Nicolas Vauquelin",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el manganès?",
    opcions: ["1774", "1800", "1820", "1850"],
    respostaCorrecta: "1774",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir el cobalt?",
    opcions: [
      "Georg Brandt",
      "Antoine Lavoisier",
      "Robert Boyle",
      "Joseph Priestley",
    ],
    respostaCorrecta: "Georg Brandt",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el níquel?",
    opcions: ["1751", "1800", "1820", "1850"],
    respostaCorrecta: "1751",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir el platí?",
    opcions: [
      "Antonio de Ulloa",
      "Antoine Lavoisier",
      "Robert Boyle",
      "Joseph Priestley",
    ],
    respostaCorrecta: "Antonio de Ulloa",
    tipus: "Història",
  },
  {
    pregunta: "Quin any es va descobrir el mercuri?",
    opcions: ["Ancient", "1500", "1600", "1700"],
    respostaCorrecta: "Ancient",
    tipus: "Història",
  },
  {
    pregunta: "Qui va descobrir el bismut?",
    opcions: [
      "Claude François Geoffroy",
      "Antoine Lavoisier",
      "Robert Boyle",
      "Joseph Priestley",
    ],
    respostaCorrecta: "Claude François Geoffroy",
    tipus: "Història",
  },

  // Elements
  {
    pregunta: "Quants elements té la taula periòdica actualment?",
    opcions: ["118", "120", "112", "102"],
    respostaCorrecta: "118",
    tipus: "Elements",
  },
  {
    pregunta: "Quin és l’element més lleuger de la taula periòdica?",
    opcions: ["Hidrogen", "Hel·li", "Liti", "Carboni"],
    respostaCorrecta: "Hidrogen",
    tipus: "Elements",
  },
  {
    pregunta: "Quin és l'element químic més abundant a l'univers?",
    opcions: ["Hidrogen", "Oxigen", "Carboni", "Hel·li"],
    respostaCorrecta: "Hidrogen",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és el més pesat?",
    opcions: ["Osmí", "Plom", "Uraní", "Tòric"],
    respostaCorrecta: "Osmí",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall alcalí?",
    opcions: ["Liti", "Calci", "Magnesi", "Alumini"],
    respostaCorrecta: "Liti",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un gas a temperatura ambient?",
    opcions: ["Oxigen", "Ferro", "Silici", "Coure"],
    respostaCorrecta: "Oxigen",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall de transició?",
    opcions: ["Ferro", "Hidrogen", "Hel·li", "Carboni"],
    respostaCorrecta: "Ferro",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un gas noble?",
    opcions: ["Neó", "Oxigen", "Nitrogen", "Argó"],
    respostaCorrecta: "Neó",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall alcalí-terrós?",
    opcions: ["Calci", "Carboni", "Neó", "Clor"],
    respostaCorrecta: "Calci",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall pesat?",
    opcions: ["Plom", "Alumini", "Ferro", "Coure"],
    respostaCorrecta: "Plom",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és essencial per a la vida?",
    opcions: ["Carboni", "Argó", "Neó", "Hel·li"],
    respostaCorrecta: "Carboni",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall de transició?",
    opcions: ["Coure", "Hidrogen", "Hel·li", "Carboni"],
    respostaCorrecta: "Coure",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un gas a temperatura ambient?",
    opcions: ["Nitrogen", "Ferro", "Silici", "Coure"],
    respostaCorrecta: "Nitrogen",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall de transició?",
    opcions: ["Ferro", "Hidrogen", "Hel·li", "Carboni"],
    respostaCorrecta: "Ferro",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un gas noble?",
    opcions: ["Neó", "Oxigen", "Nitrogen", "Argó"],
    respostaCorrecta: "Neó",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall alcalí-terrós?",
    opcions: ["Calci", "Carboni", "Neó", "Clor"],
    respostaCorrecta: "Calci",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall pesat?",
    opcions: ["Plom", "Alumini", "Ferro", "Coure"],
    respostaCorrecta: "Plom",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és essencial per a la vida?",
    opcions: ["Carboni", "Argó", "Neó", "Hel·li"],
    respostaCorrecta: "Carboni",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall de transició?",
    opcions: ["Coure", "Hidrogen", "Hel·li", "Carboni"],
    respostaCorrecta: "Coure",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un gas a temperatura ambient?",
    opcions: ["Nitrogen", "Ferro", "Silici", "Coure"],
    respostaCorrecta: "Nitrogen",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall de transició?",
    opcions: ["Ferro", "Hidrogen", "Hel·li", "Carboni"],
    respostaCorrecta: "Ferro",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un gas noble?",
    opcions: ["Neó", "Oxigen", "Nitrogen", "Argó"],
    respostaCorrecta: "Neó",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall alcalí-terrós?",
    opcions: ["Calci", "Carboni", "Neó", "Clor"],
    respostaCorrecta: "Calci",
    tipus: "Elements",
  },
  {
    pregunta: "Quin element és un metall pesat?",
    opcions: ["Plom", "Alumini", "Ferro", "Coure"],
    respostaCorrecta: "Plom",
    tipus: "Elements",
  },

  // Família
  {
    pregunta: "Quina família d'elements són coneguts com a gasos nobles?",
    opcions: [
      "He, Ne, Ar, Kr, Xe, Rn",
      "H, Li, Na, K",
      "O, S, Se, Te",
      "Fe, Co, Ni",
    ],
    respostaCorrecta: "He, Ne, Ar, Kr, Xe, Rn",
    tipus: "Família",
  },
  {
    pregunta: "Quin element és un metall alcalí-terrós?",
    opcions: ["Calci", "Carboni", "Neó", "Clor"],
    respostaCorrecta: "Calci",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements formen la família dels alcalins?",
    opcions: [
      "H, Li, Na, K, Rb, Cs, Fr",
      "He, Ne, Ar",
      "Fe, Co, Ni",
      "O, S, Se",
    ],
    respostaCorrecta: "H, Li, Na, K, Rb, Cs, Fr",
    tipus: "Família",
  },
  {
    pregunta: "Quina família d'elements són coneguts com a halògens?",
    opcions: ["F, Cl, Br, I, At", "He, Ne, Ar", "Li, Na, K", "Fe, Co, Ni"],
    respostaCorrecta: "F, Cl, Br, I, At",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements són metalls alcalins?",
    opcions: ["Li, Na, K, Rb, Cs", "Be, Mg, Ca", "Al, Ga, In", "Cu, Ag, Au"],
    respostaCorrecta: "Li, Na, K, Rb, Cs",
    tipus: "Família",
  },
  {
    pregunta: "Quina família d'elements inclou el carboni?",
    opcions: [
      "Carboni, Silici, Germani",
      "Nitrogen, Fòsfor, Arsènic",
      "O, S, Se",
      "Fe, Co, Ni",
    ],
    respostaCorrecta: "Carboni, Silici, Germani",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements són metalls de transició?",
    opcions: ["Fe, Cu, Ni, Zn", "Li, Na, K", "He, Ne, Ar", "O, S, Se"],
    respostaCorrecta: "Fe, Cu, Ni, Zn",
    tipus: "Família",
  },
  {
    pregunta: "Quina família d'elements inclou el sofre?",
    opcions: ["O, S, Se, Te", "Li, Na, K", "Fe, Co, Ni", "H, He, Li"],
    respostaCorrecta: "O, S, Se, Te",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements són coneguts com a metalls pesats?",
    opcions: ["Pb, Hg, Cd", "Li, Na, K", "He, Ne, Ar", "O, S, Se"],
    respostaCorrecta: "Pb, Hg, Cd",
    tipus: "Família",
  },
  {
    pregunta: "Quina família d'elements inclou el nitrogen?",
    opcions: ["N, P, As", "Li, Na, K", "He, Ne, Ar", "O, S, Se"],
    respostaCorrecta: "N, P, As",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements són coneguts com a metalls alcalins?",
    opcions: ["Li, Na, K", "Be, Mg, Ca", "Fe, Co, Ni", "Cu, Ag, Au"],
    respostaCorrecta: "Li, Na, K",
    tipus: "Família",
  },
  {
    pregunta: "Quina família d'elements inclou el fòsfor?",
    opcions: ["N, P, As", "Li, Na, K", "He, Ne, Ar", "O, S, Se"],
    respostaCorrecta: "N, P, As",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements són coneguts com a gasos nobles?",
    opcions: ["He, Ne, Ar, Kr, Xe, Rn", "H, Li, Na", "O, S, Se", "Fe, Co, Ni"],
    respostaCorrecta: "He, Ne, Ar, Kr, Xe, Rn",
    tipus: "Família",
  },
  {
    pregunta: "Quina família d'elements inclou el calci?",
    opcions: ["Be, Mg, Ca", "Li, Na, K", "Fe, Co, Ni", "O, S, Se"],
    respostaCorrecta: "Be, Mg, Ca",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements són metalls de transició?",
    opcions: ["Fe, Cu, Ni", "Li, Na, K", "He, Ne, Ar", "O, S, Se"],
    respostaCorrecta: "Fe, Cu, Ni",
    tipus: "Família",
  },
  {
    pregunta: "Quina família d'elements inclou el silici?",
    opcions: ["C, Si, Ge", "Li, Na, K", "He, Ne, Ar", "O, S, Se"],
    respostaCorrecta: "C, Si, Ge",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements són coneguts com a halògens?",
    opcions: ["F, Cl, Br, I, At", "Li, Na, K", "He, Ne, Ar", "O, S, Se"],
    respostaCorrecta: "F, Cl, Br, I, At",
    tipus: "Família",
  },
  {
    pregunta: "Quina família d'elements inclou el magnesi?",
    opcions: ["Be, Mg, Ca", "Li, Na, K", "Fe, Co, Ni", "O, S, Se"],
    respostaCorrecta: "Be, Mg, Ca",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements són metalls pesats?",
    opcions: ["Pb, Hg, Cd", "Li, Na, K", "He, Ne, Ar", "O, S, Se"],
    respostaCorrecta: "Pb, Hg, Cd",
    tipus: "Família",
  },
  {
    pregunta: "Quina família d'elements inclou el sofre?",
    opcions: ["O, S, Se, Te", "Li, Na, K", "Fe, Co, Ni", "H, He, Li"],
    respostaCorrecta: "O, S, Se, Te",
    tipus: "Família",
  },
  {
    pregunta: "Quins elements són coneguts com a metalls alcalins?",
    opcions: ["Li, Na, K", "Be, Mg, Ca", "Fe, Co, Ni", "Cu, Ag, Au"],
    respostaCorrecta: "Li, Na, K",
    tipus: "Família",
  },

  // Bioquímica
  {
    pregunta: "Quin element químic és essencial en la formació dels ossos?",
    opcions: ["Calci", "Fòsfor", "Magnesi", "Potassi"],
    respostaCorrecta: "Calci",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element és imprescindible en la formació d’hemoglobina?",
    opcions: ["Ferro", "Sodi", "Calci", "Potassi"],
    respostaCorrecta: "Ferro",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element químic és essencial en les dents?",
    opcions: ["Fluor", "Calci", "Magnesi", "Fòsfor"],
    respostaCorrecta: "Fluor",
    tipus: "Bioquímica",
  },
  {
    pregunta:
      "Quin element és fonamental per a la vida i es troba en totes les biomolècules?",
    opcions: ["Carboni", "Oxigen", "Nitrogen", "Calci"],
    respostaCorrecta: "Carboni",
    tipus: "Bioquímica",
  },
  {
    pregunta:
      "Quin element és essencial en la transmissió de senyals nerviosos?",
    opcions: ["Sodi", "Calci", "Magnesi", "Potassi"],
    respostaCorrecta: "Sodi",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element és fonamental en la síntesi de proteïnes?",
    opcions: ["Nitrogen", "Oxigen", "Sofre", "Fòsfor"],
    respostaCorrecta: "Nitrogen",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element es troba en la sang i transporta oxigen?",
    opcions: ["Ferro", "Calci", "Sodi", "Potassi"],
    respostaCorrecta: "Ferro",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element és essencial per a la fotosíntesi?",
    opcions: ["Magnesi", "Oxigen", "Fòsfor", "Carboni"],
    respostaCorrecta: "Magnesi",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element és fonamental en la formació de l'ADN?",
    opcions: ["Carboni", "Nitrogen", "Oxigen", "Fòsfor"],
    respostaCorrecta: "Fòsfor",
    tipus: "Bioquímica",
  },
  {
    pregunta:
      "Quin element és essencial per a la producció d'energia en les cèl·lules?",
    opcions: ["Fòsfor", "Sodi", "Potassi", "Calci"],
    respostaCorrecta: "Fòsfor",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element és important per a la contracció muscular?",
    opcions: ["Calci", "Ferro", "Magnesi", "Sodi"],
    respostaCorrecta: "Calci",
    tipus: "Bioquímica",
  },
  {
    pregunta:
      "Quin element és essencial per a la formació de neurotransmissors?",
    opcions: ["Nitrogen", "Oxigen", "Fòsfor", "Sodi"],
    respostaCorrecta: "Nitrogen",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element és important per a la regulació del pH en el cos?",
    opcions: ["Sodi", "Potassi", "Calci", "Magnesi"],
    respostaCorrecta: "Sodi",
    tipus: "Bioquímica",
  },
  {
    pregunta:
      "Quin element és fonamental per a la formació de membranes cel·lulars?",
    opcions: ["Fòsfor", "Nitrogen", "Oxigen", "Carboni"],
    respostaCorrecta: "Fòsfor",
    tipus: "Bioquímica",
  },
  {
    pregunta:
      "Quin element és essencial per a la síntesi de neurotransmissors?",
    opcions: ["Nitrogen", "Oxigen", "Fòsfor", "Sodi"],
    respostaCorrecta: "Nitrogen",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element és important per a la formació de l'ADN?",
    opcions: ["Carboni", "Nitrogen", "Oxigen", "Fòsfor"],
    respostaCorrecta: "Fòsfor",
    tipus: "Bioquímica",
  },
  {
    pregunta:
      "Quin element és fonamental per a la producció d'energia en les cèl·lules?",
    opcions: ["Fòsfor", "Sodi", "Potassi", "Calci"],
    respostaCorrecta: "Fòsfor",
    tipus: "Bioquímica",
  },
  {
    pregunta: "Quin element és important per a la contracció muscular?",
    opcions: ["Calci", "Ferro", "Magnesi", "Sodi"],
    respostaCorrecta: "Calci",
    tipus: "Bioquímica",
  },
  {
    pregunta:
      "Quin element és essencial per a la formació de neurotransmissors?",
    opcions: ["Nitrogen", "Oxigen", "Fòsfor", "Sodi"],
    respostaCorrecta: "Nitrogen",
    tipus: "Bioquímica",
  },
  {
    pregunta:
      "Quin element és fonamental per a la formació de membranes cel·lulars?",
    opcions: ["Fòsfor", "Nitrogen", "Oxigen", "Carboni"],
    respostaCorrecta: "Fòsfor",
    tipus: "Bioquímica",
  },

  // Propietat
  {
    pregunta: "Quina és la massa atòmica aproximada del carboni?",
    opcions: ["12 u", "14 u", "16 u", "10 u"],
    respostaCorrecta: "12 u",
    tipus: "Propietat",
  },
  {
    pregunta: "Quina propietat indica el nombre d'electrons en l'última capa?",
    opcions: [
      "Número atòmic",
      "Massa atòmica",
      "Electronegativitat",
      "Nombre d'oxidació",
    ],
    respostaCorrecta: "Número atòmic",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina propietat determina la capacitat d’un element per formar enllaços químics?",
    opcions: [
      "Electronegativitat",
      "Número atòmic",
      "Densitat",
      "Massa atòmica",
    ],
    respostaCorrecta: "Electronegativitat",
    tipus: "Propietat",
  },
  {
    pregunta: "Quina és la densitat de l'aigua?",
    opcions: ["1 g/cm³", "0.5 g/cm³", "2 g/cm³", "0.8 g/cm³"],
    respostaCorrecta: "1 g/cm³",
    tipus: "Propietat",
  },
  {
    pregunta: "Quina és la temperatura de fusió del gel?",
    opcions: ["0 °C", "100 °C", "-10 °C", "32 °F"],
    respostaCorrecta: "0 °C",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina propietat química fa que un element sigui un bon conductor elèctric?",
    opcions: [
      "Baixa resistència",
      "Alta densitat",
      "Gran duresa",
      "Gran massa atòmica",
    ],
    respostaCorrecta: "Baixa resistència",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que determina el volum d’un element químic?",
    opcions: [
      "Densitat",
      "Massa atòmica",
      "Electronegativitat",
      "Número atòmic",
    ],
    respostaCorrecta: "Densitat",
    tipus: "Propietat",
  },
  {
    pregunta: "Quin metall té el major punt de fusió?",
    opcions: ["Tungstè", "Osmí", "Ferro", "Platina"],
    respostaCorrecta: "Tungstè",
    tipus: "Propietat",
  },
  {
    pregunta: "Quin element és gasós a temperatura ambient?",
    opcions: ["Oxigen", "Ferro", "Silici", "Coure"],
    respostaCorrecta: "Oxigen",
    tipus: "Propietat",
  },
  {
    pregunta: "Quina propietat química fa que un metall sigui maleable?",
    opcions: ["Maleabilitat", "Duresa", "Electronegativitat", "Densitat"],
    respostaCorrecta: "Maleabilitat",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que indica la facilitat amb què un element guanya electrons?",
    opcions: ["Electronegativitat", "Número atòmic", "Duresa", "Massa atòmica"],
    respostaCorrecta: "Electronegativitat",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que permet als metalls ser estirats en fils?",
    opcions: [
      "Ductilitat",
      "Densitat",
      "Maleabilitat",
      "Resistència elèctrica",
    ],
    respostaCorrecta: "Ductilitat",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que fa que un element sigui resistent a la fractura?",
    opcions: ["Duresa", "Densitat", "Conductivitat", "Maleabilitat"],
    respostaCorrecta: "Duresa",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que defineix la temperatura en què un element passa de sòlid a líquid?",
    opcions: ["Punt de fusió", "Densitat", "Duresa", "Número atòmic"],
    respostaCorrecta: "Punt de fusió",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina propietat determina la capacitat d’un element per formar enllaços químics?",
    opcions: [
      "Electronegativitat",
      "Número atòmic",
      "Densitat",
      "Massa atòmica",
    ],
    respostaCorrecta: "Electronegativitat",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que indica la facilitat amb què un metall es pot tallar?",
    opcions: ["Duresa", "Ductilitat", "Resistència mecànica", "Elasticitat"],
    respostaCorrecta: "Duresa",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que fa que un element sigui un bon aïllant tèrmic?",
    opcions: [
      "Baixa conductivitat tèrmica",
      "Alta densitat",
      "Alta massa atòmica",
      "Gran resistència elèctrica",
    ],
    respostaCorrecta: "Baixa conductivitat tèrmica",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que determina la capacitat d’un element per conduir calor?",
    opcions: ["Conductivitat tèrmica", "Densitat", "Duresa", "Número atòmic"],
    respostaCorrecta: "Conductivitat tèrmica",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que determina la capacitat d’un element per ser dissolt en aigua?",
    opcions: ["Solubilitat", "Densitat", "Duresa", "Número atòmic"],
    respostaCorrecta: "Solubilitat",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que determina la capacitat d’un element per ser magnetitzat?",
    opcions: ["Magnetisme", "Densitat", "Duresa", "Número atòmic"],
    respostaCorrecta: "Magnetisme",
    tipus: "Propietat",
  },
  {
    pregunta:
      "Quina és la propietat que determina la capacitat d’un element per ser estirat?",
    opcions: [
      "Ductilitat",
      "Densitat",
      "Maleabilitat",
      "Resistència elèctrica",
    ],
    respostaCorrecta: "Ductilitat",
    tipus: "Propietat",
  },

  // Química
  {
    pregunta: "Quina és la fórmula química de l’aigua?",
    opcions: ["H₂O", "CO₂", "O₂", "NaCl"],
    respostaCorrecta: "H₂O",
    tipus: "Química",
  },
  {
    pregunta: "Quina és la fórmula química del diòxid de carboni?",
    opcions: ["CO₂", "H₂O", "O₂", "NaCl"],
    respostaCorrecta: "CO₂",
    tipus: "Química",
  },
  {
    pregunta: "Quina és la fórmula química del clorur de sodi?",
    opcions: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
    respostaCorrecta: "NaCl",
    tipus: "Química",
  },
  {
    pregunta: "Quina és la fórmula química de l'àcid sulfúric?",
    opcions: ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"],
    respostaCorrecta: "H₂SO₄",
    tipus: "Química",
  },
  {
    pregunta: "Quina és la fórmula química de l'amoníac?",
    opcions: ["NH₃", "H₂O", "CO₂", "NaCl"],
    respostaCorrecta: "NH₃",
    tipus: "Química",
  },
  {
    pregunta: "Quina és la fórmula química del metà?",
    opcions: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    respostaCorrecta: "CH₄",
    tipus: "Química",
  },
  {
    pregunta: "Quina és la fórmula química de l'àcid clorhídric?",
    opcions: ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"],
    respostaCorrecta: "HCl",
    tipus: "Química",
  },
  {
    pregunta: "Quina és la fórmula química del bicarbonat de sodi?",
    opcions: ["NaHCO₃", "NaCl", "KCl", "CaCO₃"],
    respostaCorrecta: "NaHCO₃",
    tipus: "Química",
  },
  {
    pregunta: "Quina és la fórmula química del sulfat de coure?",
    opcions: ["CuSO₄", "CuCl₂", "CuO", "Cu₂O"],
    respostaCorrecta: "CuSO₄",
    tipus: "Química",
  },
  {
    pregunta: "Quina és la fórmula química del fosfat de calci?",
    opcions: ["Ca₃(PO₄)₂", "CaCO₃", "CaSO₄", "CaCl₂"],
    respostaCorrecta: "Ca₃(PO₄)₂",
    tipus: "Química",
  },

  // Utilitat
  {
    pregunta: "Quin element s’utilitza com a combustible en centrals nuclears?",
    opcions: ["Urani", "Plutoni", "Tori", "Neptuni"],
    respostaCorrecta: "Urani",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall s’utilitza sovint en circuits electrònics?",
    opcions: ["Coure", "Plata", "Ferro", "Níquel"],
    respostaCorrecta: "Coure",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall s’utilitza habitualment en la fabricació de joies?",
    opcions: ["Or", "Alumini", "Ferro", "Níquel"],
    respostaCorrecta: "Or",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin element s’utilitza per esterilitzar l’aigua?",
    opcions: ["Clor", "Fluor", "Oxigen", "Nitrogen"],
    respostaCorrecta: "Clor",
    tipus: "Utilitat",
  },
  {
    pregunta:
      "Quin element químic s’utilitza en la fabricació de microprocessadors?",
    opcions: ["Silici", "Ferro", "Coure", "Alumini"],
    respostaCorrecta: "Silici",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall s’utilitza principalment en la fabricació d’avions?",
    opcions: ["Alumini", "Ferro", "Níquel", "Coure"],
    respostaCorrecta: "Alumini",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin element químic s’utilitza en la fabricació de paper?",
    opcions: ["Clor", "Carboni", "Sulfur", "Calci"],
    respostaCorrecta: "Clor",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quina és la principal aplicació del neó?",
    opcions: [
      "Llum en rètols publicitaris",
      "Fabricació de bateries",
      "Producció d'acer",
      "Catalitzador químic",
    ],
    respostaCorrecta: "Llum en rètols publicitaris",
    tipus: "Utilitat",
  },
  {
    pregunta:
      "Quin element s’utilitza en la fabricació de bateries recarregables?",
    opcions: ["Liti", "Plom", "Cadmi", "Níquel"],
    respostaCorrecta: "Liti",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall s’utilitza en la fabricació de monedes?",
    opcions: ["Níquel", "Ferro", "Alumini", "Or"],
    respostaCorrecta: "Níquel",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall s’utilitza en la fabricació de cables elèctrics?",
    opcions: ["Coure", "Ferro", "Alumini", "Níquel"],
    respostaCorrecta: "Coure",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin element és fonamental en la producció de vidre?",
    opcions: ["Silici", "Sodi", "Coure", "Plata"],
    respostaCorrecta: "Silici",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall s’utilitza en la fabricació de bateries?",
    opcions: ["Liti", "Plom", "Cadmi", "Níquel"],
    respostaCorrecta: "Liti",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin element s’utilitza com a gas protector en la soldadura?",
    opcions: ["Argó", "Neó", "Xenó", "Radó"],
    respostaCorrecta: "Argó",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall s’utilitza en la fabricació de miralls?",
    opcions: ["Plata", "Alumini", "Níquel", "Ferro"],
    respostaCorrecta: "Plata",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall es troba en els cables de fibra òptica?",
    opcions: ["Germani", "Coure", "Silici", "Or"],
    respostaCorrecta: "Germani",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin element es troba en les piles alcalines?",
    opcions: ["Zinc", "Liti", "Níquel", "Plom"],
    respostaCorrecta: "Zinc",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall s’utilitza en la fabricació de bateries?",
    opcions: ["Liti", "Plom", "Cadmi", "Níquel"],
    respostaCorrecta: "Liti",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall s’utilitza en la fabricació de miralls?",
    opcions: ["Plata", "Alumini", "Níquel", "Ferro"],
    respostaCorrecta: "Plata",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin metall es troba en els cables de fibra òptica?",
    opcions: ["Germani", "Coure", "Silici", "Or"],
    respostaCorrecta: "Germani",
    tipus: "Utilitat",
  },
  {
    pregunta: "Quin element es troba en les piles alcalines?",
    opcions: ["Zinc", "Liti", "Níquel", "Plom"],
    respostaCorrecta: "Zinc",
    tipus: "Utilitat",
  },

    // Composició
  {
    pregunta: "Quin element químic es troba a la sal de taula?",
    opcions: ["Sodi", "Potassi", "Magnesi", "Calci"],
    respostaCorrecta: "Sodi",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en l'aire?",
    opcions: ["Nitrogen", "Oxigen", "Argó", "Diòxid de carboni"],
    respostaCorrecta: "Nitrogen",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en l'aigua?",
    opcions: ["Hidrogen", "Oxigen", "Carboni", "Nitrogen"],
    respostaCorrecta: "Hidrogen",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en el vidre?",
    opcions: ["Silici", "Alumini", "Ferro", "Coure"],
    respostaCorrecta: "Silici",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els fertilitzants?",
    opcions: ["Nitrogen", "Fòsfor", "Potassi", "Calci"],
    respostaCorrecta: "Nitrogen",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en la majoria de les proteïnes?",
    opcions: ["Nitrogen", "Oxigen", "Carboni", "Sofre"],
    respostaCorrecta: "Nitrogen",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els àcids nucleics?",
    opcions: ["Fòsfor", "Nitrogen", "Carboni", "Oxigen"],
    respostaCorrecta: "Fòsfor",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en la majoria de les vitamines?",
    opcions: ["Carboni", "Nitrogen", "Oxigen", "Sofre"],
    respostaCorrecta: "Carboni",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els antioxidants?",
    opcions: ["Seleni", "Zinc", "Magnesi", "Ferro"],
    respostaCorrecta: "Seleni",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els pigments de la sang?",
    opcions: ["Ferro", "Cobalt", "Zinc", "Magnesi"],
    respostaCorrecta: "Ferro",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en la majoria dels medicaments?",
    opcions: ["Carboni", "Oxigen", "Nitrogen", "Sofre"],
    respostaCorrecta: "Carboni",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els plàstics?",
    opcions: ["Carboni", "Nitrogen", "Oxigen", "Sofre"],
    respostaCorrecta: "Carboni",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els antibiòtics?",
    opcions: ["Nitrogen", "Oxigen", "Carboni", "Sofre"],
    respostaCorrecta: "Nitrogen",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els fertilitzants?",
    opcions: ["Nitrogen", "Fòsfor", "Potassi", "Calci"],
    respostaCorrecta: "Nitrogen",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els àcids nucleics?",
    opcions: ["Fòsfor", "Nitrogen", "Carboni", "Oxigen"],
    respostaCorrecta: "Fòsfor",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en la majoria de les vitamines?",
    opcions: ["Carboni", "Nitrogen", "Oxigen", "Sofre"],
    respostaCorrecta: "Carboni",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els antioxidants?",
    opcions: ["Seleni", "Zinc", "Magnesi", "Ferro"],
    respostaCorrecta: "Seleni",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els pigments de la sang?",
    opcions: ["Ferro", "Cobalt", "Zinc", "Magnesi"],
    respostaCorrecta: "Ferro",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en la majoria dels medicaments?",
    opcions: ["Carboni", "Oxigen", "Nitrogen", "Sofre"],
    respostaCorrecta: "Carboni",
    tipus: "Composició",
  },
  {
    pregunta: "Quin element químic es troba en els plàstics?",
    opcions: ["Carboni", "Nitrogen", "Oxigen", "Sofre"],
    respostaCorrecta: "Carboni",
    tipus: "Composició",
  },
];

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
  crono.textContent = `Temps restant: ${timeLeft}s`; // Moved here to display immediately

  timerInterval = setInterval(() => {
    timeLeft--;
    crono.textContent = `Temps restant: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      feedback.textContent = "Temps esgotat!";
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

  progressDisplay.textContent = `Pregunta ${questionsAsked} de ${totalQuestions}`;
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
    feedback.textContent = "Correcte! 🎉";
    feedback.classList.remove('error-text'); // Neteja la classe d'error si existeix
    feedback.classList.add('correct-text'); // Afegeix la classe de text correcte
    score++;
  } else {
    feedback.textContent = `Incorrecte.`; // Simplificat a només "Incorrecte."
    feedback.classList.remove('correct-text'); // Neteja la classe de correcte si existeix
    feedback.classList.add('error-text'); // Afegeix la classe de text d'error
  }

  scoreDisplay.textContent = `Puntuació: ${score}`;

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
  missatgeFinal.textContent = `Has aconseguit ${score} de ${totalQuestions} preguntes correctes.`;

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
      alert("Informació guardada correctament");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Error en finalitzar de la partida: " + textStatus);
    },
  });
}

function reiniciarJoc() {
  clearInterval(timerInterval);
  score = 0;
  questionsAsked = 0;
  scoreDisplay.textContent = `Puntuació: 0`;
  progressDisplay.textContent = `Pregunta 0 de 0`;
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
  scoreDisplay.textContent = `Puntuació: 0`;
  progressDisplay.textContent = `Pregunta 0 de 0`;
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
      `Només hi ha ${questions.length} preguntes disponibles. El joc es configurarà amb aquesta quantitat.`
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
  scoreDisplay.textContent = `Puntuació: 0`;
  progressDisplay.textContent = `Pregunta 0 de 0`;
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
        data: { preguntesRespongudes: questionsAsked },
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

//carregar tipus preguntes
[...new Set(questions.map((q) => q.tipus))].forEach((opcio) => {
  const option = document.createElement("option");

  option.value = opcio;
  option.textContent = opcio;
  document.getElementById("tipus_preguntes").appendChild(option);
});

window.reiniciarJoc = reiniciarJoc;
