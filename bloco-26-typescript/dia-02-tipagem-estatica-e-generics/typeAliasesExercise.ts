// Crie um type para um objeto que represente um pássaro
type Bird = {
  name: string;
  age: number;
  color: string;
};

// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.
type Sum = (a: number, b: number) => number;

// Crie um type para um objeto que represente um endereço.
type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
};

// Crie um type union que represente os estados físicos da matéria: líquido, sólido e gasoso.
type PhysicalState = "liquid" | "solid" | "gas";

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: "123.456.789-10" ou 12345678910.
type ID = number | string;

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type OS = "linux" | "mac os" | "windows";

// Crie um type union que represente as vogais do alfabeto.
type Vowel = "a" | "e" | "i" | "o" | "u";
