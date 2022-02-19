// Crie uma interface cujo objeto represente um Automóvel
interface Vehicle {
  model: string;
  year: number;
  color: string;
  engine: string;
  doors: number;
}

let vehicle: Vehicle = {
  model: "Ford",
  year: 2020,
  color: "Black",
  engine: "V8",
  doors: 4,
};

// Crie uma interface cujjo objeto represente um Felino.
interface Cat {
  name: string;
  age: number;
  color: string;
  species: string;
}

let cat: Cat = {
  name: "Garfield",
  age: 10,
  color: "Orange",
  species: "Cat",
};

// Crie uma interface cujo objeto represente uma Aeronave.
interface Plane {
  model: string;
  year: number;
  color: string;
  engine: string;
}

let plane: Plane = {
  model: "Boing",
  year: 2020,
  color: "Blue",
  engine: "V8",
};
