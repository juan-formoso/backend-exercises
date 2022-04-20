// Cumprindo o princípio de responsabilidade única.

class Intern {
  name: string = "Rafael";
  salary: number = 1000;
  hours: number = 40;
}

class Payment {
  pay(Intern: Intern) {
    const salary: number = Intern.salary * Intern.hours;
    console.log(`Paying ${Intern.salary} to ${Intern.name}`);
  }
}

const payment = new Payment();
payment.pay(new Intern());

export default {
  Intern,
  Payment,
};
