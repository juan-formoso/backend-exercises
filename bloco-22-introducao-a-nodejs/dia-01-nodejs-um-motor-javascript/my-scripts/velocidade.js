const readline = require("readline-sync");
const distancia = readline.questionInt("Distância (m): ");
const tempo = readline.questionInt("Tempo gasto na viagem (s): ");

const velocidadeMedia = () => {
  const velocidade = (distancia / tempo).toFixed(2);
  console.log(`Velocidade média: ${velocidade} m/s`);
};

velocidadeMedia();
