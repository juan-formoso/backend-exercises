class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }
  sleep() {
    console.log(`${this.name}: zzzzzzzz`);
  }
}

const p1 = new Person("Maria", 171, 58);
const p2 = new Person("João", 180, 70);
console.log(p1);
console.log(p2);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Person { name: 'Maria', height: 171, weight: 58 }
Person { name: 'João', height: 180, weight: 70 }
Maria: zzzzzzzz
João: zzzzzzzz
*/
