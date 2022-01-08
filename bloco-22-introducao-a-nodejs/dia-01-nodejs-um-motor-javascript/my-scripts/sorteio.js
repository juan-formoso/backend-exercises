const readline = require("readline-sync");

function result(number, answer) {
  if (number !== answer) {
    return console.log(`Opa, não foi dessa vez. O número era ${number}`);
  }
  return console.log("Parabéns, número correto!");
}

function game() {
  const number = parseInt(Math.random() * 10);
  const answer = readline.questionInt(
    "Digite um número entre 0 e 10 para saber se é o número que estou pensando: "
  );

  result(number, answer);

  const tryAgain = readline.question(
    "Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) "
  );

  if (tryAgain !== "s") return console.log("OK, até a próxima!");

  game();
}

game();
