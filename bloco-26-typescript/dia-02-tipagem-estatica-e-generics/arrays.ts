// Arrays são conjuntos de valores do mesmo tipo. Para declará-los, pode adicionar o tipo esperado do array com a sintaxe:
// let arrayName: type[] = [...];

let names: string[] = ["Mary Joe", "Alan Joe"];

// TUPLAS
// Permitem declarar um conjunto de valores cuja ordem e tipo dos valores são fixas. Em JS, elas são representadas como arrays, mas são estruturas diferentes.
// Ex: representar um valor como um par de uma string e um número
// Para declarar a tupla, use a sintaxe: variableName: [type, type, ...];

let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];

