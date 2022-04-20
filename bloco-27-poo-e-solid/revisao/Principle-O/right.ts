// Cumprindo o Princípio OCP (Open Closed Principle)

class Intern {
  name: string = "Rafael";
  salary: number = 1000;
  hours: number = 40;
}

class Trainee extends Intern {
  name: string = "Thiago";
  salary: number = 2000;
  hours: number = 20;
}

class Payment {
  pay(Intern: Intern | Trainee) {
    const salary: number = Intern.salary * Intern.hours;
    return `Paying ${Intern.salary} to ${Intern.name}`;
  }
}

const payment = new Payment();
payment.pay(new Intern());

export default {
  Intern,
  Payment,
};
