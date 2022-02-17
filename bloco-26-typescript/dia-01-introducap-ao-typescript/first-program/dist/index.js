"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
// Person Exercise
console.log(Exercise.greeter("Jukes"));
console.log(Exercise.personAge("Jukes", 30));
console.log(`A soma do array é igual a: ${Exercise.sumArray([1, 2, 3, 4, 5])}`);
// Triangle Exercise
console.log(`Triângulo de base 10cm e altura 5cm: ${Exercise.triangleArea(10, 5)}cm²`);
console.log(`Triângulo de base 8cm e altura 30cm: ${Exercise.triangleArea(8, 30)}cm²`);
console.log(`Triângulo de base 5cm e altura 5cm: ${Exercise.triangleArea(5, 5)}cm²`);
// Square Exercise
console.log(`Quadrado de lado 10cm: ${Exercise.squareArea(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.squareArea(5)}cm²`);
console.log(`Quadrado de lado 3cm: ${Exercise.squareArea(3)}cm²`);
// Rectangle Exercise
console.log(`Retângulo de base 10cm e altura 5cm: ${Exercise.rectangleArea(10, 5)}cm²`);
console.log(`Retângulo de base 8cm e altura 30cm: ${Exercise.rectangleArea(8, 30)}cm²`);
console.log(`Retângulo de base 5cm e altura 5cm: ${Exercise.rectangleArea(5, 5)}cm²`);
// Losangle Exercise
console.log(`Losângulo de base 32cm e altura 18cm: ${Exercise.losangleArea(32, 18)}cm²`);
console.log(`Losângulo de base 200cm e altura 50cm ${Exercise.losangleArea(200, 50)}cm²`);
console.log(`Losângulo de base 75cm e altura 25cm ${Exercise.losangleArea(75, 25)}cm²`);
// Trapeze Exercise
console.log(`Trapézio de base1 100cm, base2 70cm, altura 50cm: ${Exercise.trapezeArea(100, 70, 50)}cm²`);
console.log(`Trapézio de base1 75cm, base2 50cm, altura 35cm ${Exercise.trapezeArea(75, 50, 35)}cm²`);
console.log(`Trapézio de base1 150cm, base2 120cm, altura 80cm ${Exercise.trapezeArea(150, 120, 80)}cm²`);
// Circle Exercise
console.log(`Circulo de raio 25cm: ${Exercise.circleArea(25)}cm²`);
console.log(`Circulo de raio 100cm: ${Exercise.circleArea(100)}cm²`);
console.log(`Circulo de raio 12.5cm: ${Exercise.circleArea(12.5)}cm²`);
