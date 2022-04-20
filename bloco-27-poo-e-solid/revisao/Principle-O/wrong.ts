// Violando o Princípio OCP (Open Closed Principle)

/* Explicação: O Código não está extensível. Apesar das responsabilidades estarem separadas, não é possível extender nada. */

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

export default Payment;
