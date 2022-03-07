class Animal {
  /* 
    Ao invés de declarar os atributos antes do construtor, receber parâmetros
    no construtor e colocá-los nos atributos da classe, se não formos 
    validar, podemos utilizar uma forma simplificada de escrita, simplesmente 
    colocando o modificador de visibilidade na frente 
    do nome do parâmetro no construtor. 

    Exemplo
    O seguinte código:

    public x: number;
    constructor(x: number) { this.x = x }

    Pode ser substituído pelo seguinte:

    constructor(public x: number) { }
  */
  constructor(public name: string, private birthDate: Date) {}
  get age() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    if (
      today.getMonth() - this.birthDate.getMonth() <= 0 &&
      today.getDate() <= this.birthDate.getDate()
    ) {
      age -= 1;
    }
    return age;
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} is walking`);
  }
}

const d1 = new Date();
d1.setFullYear(2015);
const m1 = new Mammal("Tatu", d1);

const myFunc = (animal: Animal) => {
  console.log(animal.age);
};

myFunc(m1);
m1.walk();

/* 
Saída (código rodado em 2021):
6
Tatu is walking
*/

/* A sintaxe para uma classe herdar a outra é simples, basta utilizar a palavra reservada extends

Observe que a função myFunc recebe um parâmetro do tipo Animal, mas é passado um objeto da classe Mammal, e o código funciona perfeitamente.

Entretanto, não é possível acessar algo específico da classe Mamífero neste mesmo contexto:

const myFunc = (animal: Animal) => {
  console.log(animal.age);
  animal.walk(); --> Erro, pois a classe Animal não possui o método walk
};

myFunc(m1);
*/

class Bird extends Animal {
  fly() {
    console.log(`${this.name} is flying`);
  }
}

const d2 = new Date();
d2.setFullYear(2017);

const b1 = new Bird("Parrot", d2);
console.log(b1.age);
b1.fly();

/*
Saída (código executado em 2021):
4
Parrot is flying
*/
