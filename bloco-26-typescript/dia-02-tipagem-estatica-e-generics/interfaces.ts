// Interface que define as propriedades e métodos de uma pessoa funcionária:
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  fullName(): string {
    return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  },
};

/* employee.firstName = 10; */ // Error: Type "number" is not assignable to type "string".

// Podemos estender uma interface, usando a palavra reservada extends:

interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

// Variável do tipo Teacher:
let teacher: Teacher = {
  firstName: "Avery",
  lastName: "Agamenon",
  subject: "English",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
    return `Hello, I'm ${this.fullName()} and I teach ${this.subject}`;
  },
};
