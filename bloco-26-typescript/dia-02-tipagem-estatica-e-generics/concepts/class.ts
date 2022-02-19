enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Brown = "Castanhos",
  Green = "Verdes",
}

// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  eyeColor: EyeColor; // na cor dos olhos usamos uma Enum com valores pré definidos

  // aprenderemos mais sobre o construtor no próximo bloco
  // considere-o como uma função utilizada para construir um objeto a partir da classe
  // nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
    // usamos o this para acessar as propriedades da instância da classe
    // ele representa a própria instância que estamos criando
    // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }
  eat(): void {
    console.log(`${this.name} está comendo.`);
  }
  walk(): void {
    console.log(`${this.name} está andando.`);
  }
}

// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros para o construtor
const person1 = new Person("João", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Maria", new Date("1990-01-01"), EyeColor.Blue);

console.log(person1);
person1.speak();

// saída:
// Person {
//   "name": "João",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
// "João está falando."

console.log(person2);
person2.walk();

// saída:
// Person {
//   "name": "Maria",
//   "birthDate": "1990-01-01T00:00:00.000Z",
//   "eyeColor": "Azuis"
// }
// "Maria está andando."

/* Também é possível dizer que uma das propriedades da nossa classe Person não é obrigatória para criarmos um objeto pessoa, podemos usar o caractere ? para marcar uma propriedade como opcional, o que faz com seu tipo seja um union type entre o tipo original e undefined . Se quiséssemos dizer que a cor dos olhos não é obrigatória nossa classe ficaria assim:

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Greem = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
      this.name  = name;
      this.birthDate  = birthDate;
      this.eyeColor  = eyeColor;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}

A criação das nossas instâncias de Person poderiam ou não serem criadas com a cor dos olhos.

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z"
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."

E poderíamos adicionar essa informação depois da criação:

const person1 = new Person("Jane Doe", new Date("1986-01-01"));

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z"
// }
// "Jane Doe está falando."

person1.eyeColor = EyeColor.Brown;
console.log(person1);

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
*/
