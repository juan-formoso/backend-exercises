const readline = require("readline-sync");

function factorial(x) {
  return [0, 1].includes(x) ? 1 : x * factorial(x - 1);
}

function calculator() {
  const x = readline.questionInt("Informe o valor de x: ");

  if (x <= 0) {
    console.log("Digite um número maior que 0!");
    return;
  }

  console.log(`x: ${x}`);

  const result = factorial(x);

  console.log(`Resultado: ${result}`);
}

calculator();
