class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[]
  ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }
  turnOn() {
    console.log(
      `TV ${this.brand} is on, ${this.size} inches, ${this.resolution} resolution, and is connected to ${this.connections}`
    );
  }
}

// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
const tv = new TV("Samsung", 55, "4k", ["HDMI", "USB"]);
tv.turnOn();
