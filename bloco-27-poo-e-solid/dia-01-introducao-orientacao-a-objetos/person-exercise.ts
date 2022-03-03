class Person {
  name: string;
  private _age: number;
  private _weight: number;
  readonly height: number;

  constructor(name: string, age: number, weight: number, height: number) {
    this.name = name;
    this._age = age;
    this._weight = weight;
    this.height = height;
  }
  getWeight() {
    return this._weight;
  }
  // Esta sintaxe permite acessar o valor retornado via person.age(como se fosse um atributo normal)
  get age() {
    return this._age;
  }
  // Do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
  set age(newValue: number) {
    if (newValue >= 0 && newValue <= 120) {
      this._age = newValue;
    }
  }
  birthday() {
    this._age += 1;
  }
}

const person1 = new Person("João", 30, 80, 1.8);
const person2 = new Person("Maria", 25, 70, 1.6);

// Alteração direta de variável pública
person1.name = "Mary";
// Acesso direito a variável pública
console.log(person1.name);
// Acesso a método público que manipula atributo privado
console.log(person1.getWeight());
// Acesso a método com getter para manipular atributi privado como se fosse público
console.log(person2.age);
// Acesso a método público que manipula atributo privado
person2.birthday();
console.log(person2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
person2.age = 40;
console.log(person2.age);
// Leitura de atributo readonly
console.log(person1.height);

/*
Saída:
Mary
30
80
25
40
1.8
*/

/* Observe que há uma validação de dados no set age. É para este tipo de coisa que utilizamos atributos privados: para validar alterações nos dados. Considere, após o código anterior, rodar o seguinte código */

person2.age = 300;
console.log(person2.age);
// Saída: 40

/* A idade da person2 continua 40, pois a validação no set age impede que existam pessoas com 300 anos de idade. Esse é o poder do encapsulamento.

Agora, um exemplo de sintaxes que são inválidas neste contexto:

 - Acesso externo à classe a atributo privado
p1._weight;
p1._weight = 1;
 - Acesso a atributo inexistente
p1.weight;
p1.weight = 1;
 - Escrita em atributo readonly
p1.height = 1;
*/
