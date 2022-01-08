const pesoBase = 80; // Você pode utilizar o valor que desejar aqui
const alturaBase = 180; // Você pode utilizar o valor que desejar aqui

function calculaImc() {
  const peso = pesoBase;
  const altura = alturaBase;

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calculaImc();
