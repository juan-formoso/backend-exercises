const fs = require("fs").promises;
const fileName = "meu-arquivo.txt";

fs.readFile(fileName, "utf-8")
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo: ${fileName}\n Erro: ${err}`);
    process.exit(1);
  });
