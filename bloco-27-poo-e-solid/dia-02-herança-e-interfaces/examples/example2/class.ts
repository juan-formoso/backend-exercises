interface Animal {
  name: string;
  getBirthDate(): Date;
  age: number;
}

class Bird implements Animal {
  private _birthDate;
  constructor(public name: string, birthDate: Date) {
    this._birthDate = birthDate;
  }
  get age() {
    return new Date().getFullYear() - this._birthDate.getFullYear();
  }
  getBirthDate() {
    return this._birthDate;
  }
  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const d1 = new Date();
d1.setFullYear(2015);
const b1 = new Bird("Papagaio", d1);
console.log(b1.age);
b1.fly();

/*
Saída (código executado em 2021):

Papagaio está voando!
*/
