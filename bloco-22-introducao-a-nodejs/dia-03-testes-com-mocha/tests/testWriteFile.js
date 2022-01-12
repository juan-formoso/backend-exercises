const fs = require("fs");
const { expect } = require("chai");
const writeFile = require("../src/writeFile");

describe("Executa writeFile", () => {
  describe("se a resposta for", () => {
    it("uma string", () => {
      const parameters = writeFile("file.txt", "Aatrox");
      expect(parameters).to.be.a("string");
    });
    it("for igual a 'ok'", () => {
      const parameters = writeFile("file.txt", "Aatrox");
      expect(parameters).to.be.equals("ok");
    });
  });
});
