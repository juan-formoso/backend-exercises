interface Contract {
  subject: string;
  clauses: string[];
  signatories: Person[];
  describe(): void;
}

class Person {
  private _name;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

class NaturalPerson extends Person {
  private _cpf;
  constructor(name: string, cpf: string) {
    super(name);
    this._cpf = cpf;
  }
  get cpf() {
    return this._cpf;
  }
}

class LegalPerson extends Person {
  private _cnpj;
  constructor(name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  }
}

class SalesContract implements Contract {
  private _signatories: Person[];
  private _clauses: string[];
  constructor() {
    this._signatories = [];
    this._clauses = [];
  }
  get signatories() {
    return [...this._signatories];
  }
  get clauses() {
    return [...this._clauses];
  }
  get ubject() {
    return "Sales Contract";
  }
  sign(signatory: Person) {
    this._signatories.push(signatory);
  }
  addClause(clause: string) {
    if (this._signatories.length > 0) return;
    this._clauses.push(clause);
  }
  describe() {
    console.log("-------------------------------------");
    console.log(`Contrato: ${this.ubject}`);
    this.clauses.forEach((clause) => {
      console.log(`Cláusula: ${clause}`);
    });
    this.signatories.forEach((signatory) => {
      console.log(`Assinado por: ${signatory.name}`);
    });
    console.log("-------------------------------------\n");
  }
}

const salesContract = new SalesContract();
const p1 = new NaturalPerson("João", "123.456.789-00");
const p2 = new NaturalPerson("Maria", "987.654.321-00");
const lp = new LegalPerson("Empresa", "987654321000100");

salesContract.describe();
salesContract.addClause("Cláusula 1");
salesContract.addClause("Cláusula 2");
salesContract.describe();
salesContract.sign(p1);
salesContract.sign(p2);
salesContract.describe();
salesContract.addClause("Cláusula 3");
salesContract.sign(lp);
salesContract.describe();
