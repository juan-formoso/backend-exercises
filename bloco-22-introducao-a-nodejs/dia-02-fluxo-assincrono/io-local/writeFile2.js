const fs = require("fs").promises;

fs.writeFile("./my-new-file.txt", "I will be back", { flag: "wx" })
  .then(() => {
    console.log("Arquivo salvo");
  })
  .catch((err) => {
    console.error("err");
  });
