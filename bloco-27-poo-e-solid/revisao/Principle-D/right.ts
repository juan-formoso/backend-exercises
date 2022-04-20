import { setDependency, useDependency } from "../dependency";
import express from "express";

const app = express();

abstract class Person {
  abstract name: string;
  abstract salary: number;
  abstract hours: number;

  abstract salaryCalc(): number;
}

abstract class Developer extends Person {
  abstract name: string;
  abstract salary: number;
  abstract hours: number;

  abstract salaryCalc(): number;
  abstract solveBug(): boolean;
}

class Intern implements Developer {
  name: string = "Rafael";
  salary: number = 1000;
  hours: number = 40;

  salaryCalc(): number {
    return this.salary * this.hours;
  }

  solveBug(): boolean {
    return false;
  }
}

class Junior implements Developer {
  name: string = "Thiago";
  salary: number = 2000;
  hours: number = 20;

  salaryCalc(): number {
    return this.salary * this.hours;
  }

  solveBug(): boolean {
    return false;
  }
}

class Senior implements Developer {
  name: string = "João";
  salary: number = 3000;
  hours: number = 30;

  salaryCalc(): number {
    const bonus = this.salary * this.hours * 0.1;
    return this.salary * this.hours + bonus;
  }

  solveBug(): boolean {
    return true;
  }
}

class Payment {
  pay(person: Developer) {
    const salary: number = person.salaryCalc();
    return `Paying ${salary} to ${person.name}`;
  }
}

const devs: Record<string, Developer> = {
  intern: new Intern(),
  junior: new Junior(),
  senior: new Senior(),
};

setDependency(Developer, Junior);

app.get("/devs", (req, res) => {
  const dev = useDependency(Developer);
  res.json(dev);
});

app.get("/payment/:dev", (req, res) => {
  const dev = devs[req.params.dev];
  const payment = new Payment();
  res.json({ message: payment.pay(dev) });
});
