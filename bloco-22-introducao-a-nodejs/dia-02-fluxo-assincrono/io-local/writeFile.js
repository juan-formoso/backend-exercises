const fs = require("fs").promises;

fs.writeFile("./meu-arquivo.txt", "Jogar no bronze é impossível")
  .then(() => {
    console.log("Arquivo reescrito com sucesso");
  })
  .catch((err) => {
    console.log(`Erro ao reescrever o arquivo: ${err.message}`);
  });
