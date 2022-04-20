// Violando o Princípio OCP (Open Closed Principle)

/* Explicação: O Código não está extensível. Apesar das responsabilidades estarem separadas, não é possível extender nada. */

class Trainee {
  name: string = "Thiago";
  salary: number = 2000;
  hours: number = 20;
}

class Payment {
  pay(Trainee: Trainee) {
    const salary: number = Trainee.salary * Trainee.hours;
    console.log(`Paying ${Trainee.salary} to ${Trainee.name}`);
  }
}

const payment = new Payment();
payment.pay(new Trainee());

export default {
  Trainee,
  Payment,
};
