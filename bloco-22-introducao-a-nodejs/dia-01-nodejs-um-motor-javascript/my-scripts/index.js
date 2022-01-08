const readline = require("readline-sync");

const scripts = [
  { name: "Calcular IMC", script: "./imc.js" },
  { name: "Calcular velocidade média", script: "./velocidade.js" },
  { name: "Jogo de adivinhação", script: "./sorteio.js" },
  { name: "Calcular fatorial", script: "./fatorial.js" },
  { name: "Exibir n números de Fibonacci", script: "./fibonacci.js" },
];

let messages = scripts.map((script, index) => `${index + 1} - ${script.name}`);

messages.unshift("Escolha um númeropara executar o script correspondente");
messages = messages.join("\n");

const scriptNumber = readline.questionInt(messages) - 1;
const script = scripts[scriptNumber];

if (!script) console.log("Script inválido");

require(script.script);
