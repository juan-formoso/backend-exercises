export const greeter = (name: string) => {
  return `Hello ${name}!`;
};

export const personAge = (name: string, age: number) => {
  return `${name} is ${age} years old!`;
};

export const add = (a: number, b: number) => {
  return a + b;
};

export const sumArray = (numbers: number[]) => {
  return numbers.reduce(add, 0);
};
