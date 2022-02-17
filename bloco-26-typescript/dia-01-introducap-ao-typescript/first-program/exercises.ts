export const greeter = (name: string) => {
  return `Hello ${name}!`;
};

export const personAge = (name: string, age: number) => {
  return `${name} is ${age} years old!`;
};

export const add = (a: number, b: number): number => {
  return a + b;
};

export const sumArray = (numbers: number[]): number => {
  return numbers.reduce(add, 0);
};

export const triangleArea = (base: number, height: number): number => {
  return (base * height) / 2;
};

export const squareArea = (side: number): number => {
  return side ** 2;
};

export const rectangleArea = (base: number, height: number): number => {
  return base * height;
};

export const losangleArea = (base: number, height: number): number => {
  return (base * height) / 2;
};

export const trapezeArea = (
  base1: number,
  base2: number,
  height: number
): number => {
  return ((base1 + base2) * height) / 2;
};

export const circleArea = (radius: number): number => {
  return Math.PI * radius ** 2;
};
