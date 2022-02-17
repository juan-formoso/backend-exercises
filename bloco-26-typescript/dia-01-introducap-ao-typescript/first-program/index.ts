import * as Exercise from "./exercises";

console.log(Exercise.greeter("Jukes"));
console.log(Exercise.personAge("Jukes", 30));
console.log(`A soma do array é igual a: ${Exercise.sumArray([1, 2, 3, 4, 5])}`);

console.log(
  `Triângulo de base 10cm e altura 5cm: ${Exercise.triangleArea(10, 5)}cm²`
);
console.log(
  `Triângulo de base 8cm e altura 30cm: ${Exercise.triangleArea(8, 30)}cm²`
);
console.log(
  `Triângulo de base 5cm e altura 5cm: ${Exercise.triangleArea(5, 5)}cm²`
);

console.log(`Quadrado de lado 10cm: ${Exercise.squareArea(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.squareArea(5)}cm²`);
console.log(`Quadrado de lado 3cm: ${Exercise.squareArea(3)}cm²`);

console.log(
  `Retângulo de base 10cm e altura 5cm: ${Exercise.rectangleArea(10, 5)}cm²`
);
console.log(
  `Retângulo de base 8cm e altura 30cm: ${Exercise.rectangleArea(8, 30)}cm²`
);
console.log(
  `Retângulo de base 5cm e altura 5cm: ${Exercise.rectangleArea(5, 5)}cm²`
);
