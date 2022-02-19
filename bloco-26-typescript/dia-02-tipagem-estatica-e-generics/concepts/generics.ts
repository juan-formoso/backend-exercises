// Generics são modelos de código que podem definir e reutilizar em toda base de código, fornecem uma forma de informar a funções, classes ou interfaces que tipo você deseja usar ao chamá-las, além de nos ajudar a reduzir o uso do tipo any, que não é uma boa prática em TypeScript.

// Ex: função getArray que gera um array de itens do tipo any.

/* const getArray = (items: any[]): any[] => {
  return new Array().concat(items);
}; */

// Declaramos uma variável de nome numberArray chamando a função getArray e passando a ela um array de numbers, enquanto uma variável stringArray é declarada com um array de strings. Como o tipo any foi usado, não há nada que impeça o código de enviar uma string para o numberArray ou um number para o stringArray.

/* let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25);
stringArray.push("Turtles");
numberArray.push("Pigs");
stringArray.push(30);
console.log(numberArray); */

// Saída: [ 5, 10, 15, 20, 25, "Pigs" ]

/* console.log(stringArray); */

// Saída: [ "Cats", "Dogs", "Birds", "Turtles", 30 ]

// E caso quisermos garantir que o TS verifique e garanta que os valores sejam de um determinado tipo, usamos Generics.

const getArray = <T>(items: T[]): T[] => {
  return new Array<T>().concat(items);
};

// Agora é possível criar declarações de variável para numberArray e stringArray atualizadas para chamar a função com o tipo desejado, o TS impede que os itens inválidos sejam adicionados ao array.

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
stringArray.push(30); // Isto vai gerar um erro de compilação

// Podem ser passadas quantas variáveis necessárias para os componentes genéricos:
const identity = <T, U>(value: T, message: U): T => {
  console.log(message);
  return value;
};

let returnNumber = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

// Outra forma de uso comum para gernerics é com interfaces e classes:

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

const processIdentity = <T, U>(value: T, message: U): T => {
  console.log(message);
  return value;
};

let processor: ProcessIdentity<number, string> = processIdentity;
let number = processor(100, "Olá");
let string = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".

class ProcessIdentity<T, U> {
  _value: T;
  _message: U;
  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}

let processorIdentity = new ProcessIdentity<number, string>(100, "Olá");
processor.getIdentity(); // imprime "Olá" e retorna 100
