class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[]
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }
  turnOn(): void {
    console.log(
      `TV ${this._brand} is on, ${this._size} inches, ${this._resolution} resolution, and is connected to ${this._connections}`
    );
  }
}

// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
const tv = new TV("Samsung", 55, "4k", ["HDMI", "USB"]);
tv.turnOn();
