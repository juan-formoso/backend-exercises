const fs = require("fs");
const fileName = "meu-arquivo.txt";

fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${fileName}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});
