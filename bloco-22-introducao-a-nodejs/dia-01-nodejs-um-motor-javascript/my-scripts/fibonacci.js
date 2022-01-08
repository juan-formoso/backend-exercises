const readline = require("readline-sync");

function elmCalculator(n) {
  let a = 1;
  let b = 1;
  for (; n >= 0; n -= 1) {
    if (b) console.log(b);
    const temp = a;
    a = a + b;
    b = temp;
  }
  console.log(b);
  return b;
}

function calculator() {
  const n = readline.questionInt("Digite o valor de n: ");
  if (n <= 0) {
    console.log("Digite um número maior que 0!");
    return;
  }
  console.log(`n: ${n}`);
  elmCalculator(n - 2);
}

calculator();
