// Crie uma classe chamada Superclass
class Superclass {
  constructor(public isSuper: boolean) {
    this.isSuper = true;
  }
  public sayHello(): void {
    console.log("Olá mundo!");
  }
}

class Subclass extends Superclass {
  constructor(public isSub: boolean) {
    super(true);
    this.isSub = false;
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log(object.isSuper ? "Super!" : "Sub!");
};

// Crie um objeto da Superclass e outro da Subclass
const superObj = new Superclass(true);
const subObj = new Subclass(true);

// Chame a função 2 vezes, passando os objetos criados
myFunc(superObj);
myFunc(subObj);
