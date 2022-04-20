// Cumprindo o princípio de responsabilidade única.

class Employee {
  name: string = "Rafael";
  salary: number = 1000;
  hours: number = 40;
}

class Payment {
  pay(employee: Employee) {
    const salary: number = employee.salary * employee.hours;
    console.log(`Paying ${employee.salary} to ${employee.name}`);
  }
}

const payment = new Payment();
payment.pay(new Employee());

export default {
  Employee,
  Payment,
};
