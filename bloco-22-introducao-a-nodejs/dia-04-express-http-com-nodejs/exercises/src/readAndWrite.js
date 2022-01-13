const fs = require("fs/promises");

const getSimpsons = () => {
  return fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));
};

const setSimpsons = (newSimpsons) => {
  return fs.writeFile("./simpsons.json", JSON.stringify(newSimpsons));
};

module.exports = { getSimpsons, setSimpsons };
