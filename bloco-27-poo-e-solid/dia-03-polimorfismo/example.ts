class Animal {
  constructor(public name: string) {}
  move() {
    console.log(`${this.name} está se movendo.`);
  }
}

class Bird extends Animal {
  move() {
    super.move();
    console.log(`${this.name} está voando.`);
  }
}

class Mammal extends Animal {
  move() {
    console.log(`${this.name} está correndo.`);
  }
}

const a = new Animal("Animal");
const b = new Bird("Bird");
const c = new Mammal("Mammal");

const myMove = (animal: Animal) => {
  animal.move();
};

myMove(a);
myMove(b);
myMove(c);

/*
SAÍDA:
Animal está se movendo.
Bird está se movendo.
Bird está voando.
Mammal está correndo.
*/
