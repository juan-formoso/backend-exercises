function dividirNumeros(num1, num2) {
  const prommise = new Promise((resolve, reject) => {
    const resultado = num1 / num2;
    resolve(resultado);
  });
  return Promise;
}

dividirNumeros(2, 1)
  .then((result) => console.log(`resultado: ${result}`))
  .catch((err) => console.log(err.message));
