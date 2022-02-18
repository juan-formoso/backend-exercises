let x: number;
x = 20;
x = "30"; // Error: Type "string" is not assignable to type "number"

const y: number = 10;
const yes: boolean = true;

const test = yes + y; // Error: Operator "+" cannot be applied to types "boolean" and "number".

