// Cumprindo o Princípio OCP (Open Closed Principle)

class Employee {
  name: string = "Rafael";
  salary: number = 1000;
  hours: number = 40;
}

class Trainee extends Employee {
  name: string = "Thiago";
  salary: number = 2000;
  hours: number = 20;
}

class Payment {
  pay(employee: Employee | Trainee) {
    const salary: number = employee.salary * employee.hours;
    return `Paying ${employee.salary} to ${employee.name}`;
  }
}

const payment = new Payment();
payment.pay(new Employee());

export default {
  Employee,
  Payment,
};
