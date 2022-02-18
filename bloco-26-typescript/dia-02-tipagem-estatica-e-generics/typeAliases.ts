type Point = {
  x: number;
  y: number;
};

const printCoordinates = (pt: Point) => {
  console.log("O valor da coordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
};

printCoordinates({ x: 10, y: 20 });
// saída:
// O valor da coordenada x é 10
// O valor da coordenada y é 20
