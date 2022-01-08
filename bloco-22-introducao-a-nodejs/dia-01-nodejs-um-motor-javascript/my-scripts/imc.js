const readline = require("readline-sync");
const pesoBase = readline.questionFloat("Digite seu peso: ");
const alturaBase = readline.questionInt("Digite sua altura: ");

function calculaImc() {
  const peso = pesoBase;
  const altura = alturaBase;

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calculaImc();
