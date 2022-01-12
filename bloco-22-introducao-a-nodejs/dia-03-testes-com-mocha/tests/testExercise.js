const { expect } = require("chai");

const file = require("../exercise");

describe("Executa a função validateNumbers", () => {
  describe("se o número passado for maior que 0", () => {
    describe("a resposta será", () => {
      it("uma string", () => {
        const parameters = validateNumbers(2);
        expect(parameters).to.be.a("string");
      });
      it("um número positivo", () => {
        const parameters = validateNumbers(2);
        expect(parameters).to.be.equals("positivo");
      });
    });
  });
  describe("se o número passado for menor que 0", () => {
    describe("a resposta será", () => {
      it("uma string", () => {
        const parameters = validateNumbers(-2);
        expect(parameters).to.be.a("string");
      });
      it("um número negativo", () => {
        const parameters = validateNumbers(-2);
        expect(parameters).to.be.equals("negativo");
      });
    });
  });
  describe("se o número passado for igual a 0", () => {
    describe("a resposta será", () => {
      it("uma string", () => {
        const parameters = validateNumbers(0);
        expect(parameters).to.be.a("string");
      });
      it("um número neutro", () => {
        const parameters = validateNumbers(0);
        expect(parameters).to.be.equals("neutro");
      });
    });
  });
});
