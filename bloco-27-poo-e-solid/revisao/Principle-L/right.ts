// Cumprindo o Princípio da Substituição de Liskov.

interface Person {
  name: string;
  salary: number;
  hours: number;
}

class Intern implements Person {
  name: string = "Rafael";
  salary: number = 1000;
  hours: number = 40;
}

class Junior implements Person {
  name: string = "Thiago";
  salary: number = 2000;
  hours: number = 20;
}

class Payment {
  pay(person: Person) {
    const salary: number = person.salary * person.hours;
    return `Paying ${person.salary} to ${person.name}`;
  }
}

export default Payment;
