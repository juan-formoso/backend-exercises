const readline = require("readline-sync");
const distancia = readline.question("Distância (m): ");
const tempo = readline.question("Tempo gasto na viagem (s): ");

const velocidadeMedia = () => {
  const velocidade = (distancia / tempo).toFixed(2);
  console.log(`Velocidade média: ${velocidade} m/s`);
};

velocidadeMedia();
