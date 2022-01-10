const fs = require("fs").promises;

const main = async () => {
  try {
    await fs.writeFile("./meu-arquivo.txt", "Olá mundo!");
    console.log("Arquivo reescrito com sucesso!");
  } catch (err) {
    console.error(`Èrro ao reescrever o arquivo: ${err.message}`);
  }
};

main();
