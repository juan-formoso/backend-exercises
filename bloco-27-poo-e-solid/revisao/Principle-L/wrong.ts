// Violando o Princípio de Liskov Substitution.

/* Explicação: nao é possível adicionar outro exemplo de funcionário. */

class Intern {
  name: string = "Rafael";
  salary: number = 1000;
  hours: number = 40;
}

class Junior extends Intern {
  name: string = "Thiago";
  salary: number = 2000;
  hours: number = 20;
}

class Payment {
  pay(Intern: Intern | Junior) {
    const salary: number = Intern.salary * Intern.hours;
    return `Paying ${Intern.salary} to ${Intern.name}`;
  }
}

const payment = new Payment();
payment.pay(new Intern());

export default Payment;
