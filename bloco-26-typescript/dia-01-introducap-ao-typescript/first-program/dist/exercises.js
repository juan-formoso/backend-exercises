"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangleArea = exports.squareArea = exports.triangleArea = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
const greeter = (name) => {
    return `Hello ${name}!`;
};
exports.greeter = greeter;
const personAge = (name, age) => {
    return `${name} is ${age} years old!`;
};
exports.personAge = personAge;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
const sumArray = (numbers) => {
    return numbers.reduce(exports.add, 0);
};
exports.sumArray = sumArray;
const triangleArea = (base, height) => {
    return (base * height) / 2;
};
exports.triangleArea = triangleArea;
const squareArea = (side) => {
    return side ** 2;
};
exports.squareArea = squareArea;
const rectangleArea = (base, height) => {
    return base * height;
};
exports.rectangleArea = rectangleArea;
