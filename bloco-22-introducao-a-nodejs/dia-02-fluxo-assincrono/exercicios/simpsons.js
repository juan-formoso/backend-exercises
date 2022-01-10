const fs = require("fs").promises;

fs.readFile("./simpsons.json", "utf-8")
  .then((content) => {
    return JSON.parse(content);
  })
  .then((characters) => {
    return characters.map(({ id, name }) => `{id} - {name}`);
  })
  .then((info) => {
    info.forEach((info) => console.log(info));
  });

const charactersId = async (id) => {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((content) => JSON.parse(content));
  const chosenCharacter = characters.find((character) => character.id === id);

  if (!chosenCharacter) {
    throw new Error("character not found");
  }
  return chosenCharacter;
};

const filterCharacter = async () => {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((content) => JSON.parse(content));
  const filteredCharacters = characters.filter(
    (character) => character.id !== "10" && character.id !== "6"
  );
  await fs.writeFile("./simpsons.json", JSON.stringify(filteredCharacters));
};

const createCharactersFamily = async () => {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((content) => JSON.parse(content));
  const newFamily = characters.filter((character) =>
    [1, 2, 3, 4].includes(character.id)
  );
  await fs.writeFile("./newFamily.json", JSON.stringify(newFamily));
};

const addCharacter = async () => {
  const newFamily = await fs
    .readFile("./newFamily.json", "utf-8")
    .then((content) => JSON.parse(content));
  newFamily.push({ id: "8", name: "Nelson Muntz" });
  await fs.writeFile("./newFamily.json", newFamily);
};

const replaceNelson = async () => {
  return fs
    .readFile("./newFamily.json", "utf-8")
    .then((content) => JSON.parse(content))
    .then((characters) =>
      characters.filter((character) => character.id !== "8")
    )
    .then((familyWithoutNelson) =>
      familyWithoutNelson.concat([{ id: "8", name: "Maggie Simpson" }])
    )
    .then((familyWithMaggie) =>
      fs.writeFile("./newFamily.json", JSON.stringify(familyWithMaggie))
    );
};
