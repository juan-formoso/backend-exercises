const readline = require("readline-sync");
const pesoBase = readline.questionFloat("Digite seu peso: ");
const alturaBase = readline.questionInt("Digite sua altura: ");

function calculaImc() {
  const peso = pesoBase;
  const altura = alturaBase;

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);

  if (imc < 18.5) {
    console.log("Abaixo do peso");
  }
  if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
  }
  if (imc >= 25 && imc <= 29.9) {
    console.log("Obesidade grau I");
  }
  if (imc >= 30 && imc <= 39.9) {
    console.log("Obesidade grau II");
  }
  if (imc >= 40) {
    console.log("Obesidade grau III e IV");
  }
}

calculaImc();
