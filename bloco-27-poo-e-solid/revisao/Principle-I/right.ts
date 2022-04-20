// Cumprindo o Princípio do Interface Segregation Principle

abstract class Person {
  abstract name: string;
  abstract salary: number;
  abstract hours: number;

  abstract salaryCalc(): number;
}

class Intern implements Person {
  name: string = "Rafael";
  salary: number = 1000;
  hours: number = 40;

  salaryCalc(): number {
    return this.salary * this.hours;
  }
}

class Junior implements Person {
  name: string = "Thiago";
  salary: number = 2000;
  hours: number = 20;

  salaryCalc(): number {
    return this.salary * this.hours;
  }
}

class Developer implements Person {
  name: string = "João";
  salary: number = 3000;
  hours: number = 30;

  salaryCalc(): number {
    return this.salary * this.hours;
  }
}

class Payment {
  pay(person: Person) {
    const salary: number = person.salaryCalc();
    return `Paying ${salary} to ${person.name}`;
  }
}

const payment = new Payment();
payment.pay(new Intern());
payment.pay(new Junior());
payment.pay(new Developer());

export default Payment;
