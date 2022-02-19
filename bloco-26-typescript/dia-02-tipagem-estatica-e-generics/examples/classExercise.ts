// Crie uma classe que represente um cachorro
class Dog {
  name: string;
  color: string;
  age: number;
  weight: number;
  constructor(name: string, color: string, age: number, weight: number) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
  }
  bark(): void {
    console.log("Woof!");
  }
}

// Crie uma classe cujo objeto represente uma casa.
class House {
  color: string;
  numberOfRooms: number;
  address: string;
  constructor(color: string, numberOfRooms: number, address: string) {
    this.color = color;
    this.numberOfRooms = numberOfRooms;
    this.address = address;
  }
}

// Crie uma classe cujo objeto represente um Voo.
class Flight {
  airline: string;
  flightNumber: number;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: Date;
  arrivalTime: Date;
  constructor(
    airline: string,
    flightNumber: number,
    departureAirport: string,
    arrivalAirport: string,
    departureTime: Date,
    arrivalTime: Date
  ) {
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
  }
}
