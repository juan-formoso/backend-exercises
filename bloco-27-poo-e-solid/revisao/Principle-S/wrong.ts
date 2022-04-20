// Violando o Princípio de Responsabilidade Única (SRP)

/* Explicação: É uma classe de Pagamentos, que possui dados de uma pessoa e ela também faz o pagamento. Logo, as responsabilidades não estão separadas. */

class Payment {
  name: string = "Rafael";
  salary: number = 1000;
  hours: number = 40;

  pay() {
    const salary: number = this.salary + this.hours;
    return `Paying ${this.salary} to ${this.name}`;
  }
}

const payment = new Payment();
payment.pay();

export default Payment;
