interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}
  myFunc = (myParam: number): string => {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  };
}

// Crie um objeto da classe MyClass e o utilize acessando myNumber e chamando myFunc
const myClass = new MyClass(10);
console.log(myClass.myNumber);
console.log(myClass.myFunc(5));
