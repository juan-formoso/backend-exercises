let x: number;
x = 20;
x = "30"; // Error: Type "string" is not assignable to type "number"

const y: number = 10;
const yes: boolean = true;

const test = yes + y; // Error: Operator "+" cannot be applied to types "boolean" and "number".

/*Inferência de tipo*/

let message = "Hello World!" // infere o tipo de string

message = 100; // Error type "number" is not assignable to type "string"

/*Divisão de tipos e tipos primitivos*/

// boolean: true ou false
let yes: boolean = true;
let no: boolean = false;

// number: int, float, octal, binary, etc... Todos os valores numéricos aceitos no JavaScript
let int: number = 11;
let float = 123.456;
let hex: number = 0xb; // número onze em hexadecimal
let octal = 0o13 // número onze em octal
let binary: = 0b1011 // número onze em binário

// string: "string", "string", `string`
let hello = "Hello"
let world = "World"
let message: string = `${hello}, ${world}!`

// void: sem retorno, utilizado em funções
const sayHelloWorld = (): void => {
  console.log("Hello World!");
};

// null e undefined: respectivamente nulo e indefinido
const valueNull = null
const valueUndefined = undefined
