// Criamos um array de strings com as unidades de medidas
// O tipo inferido pelo TypeScript será "string[]", essa é a sintaxe para tipar um array
const units = ["m", "cm", "mm", "km", "dm", "dam", "hm"];

const error = (unity: string) => {
  throw new Error(`A unidade ${unity} não é válida.`);
};

const convert = (value: number, forUnity: string, toUnity: string): number => {
  if (!units.includes(forUnity)) error(forUnity); // se a unidade base não for válida, lança um erro
  if (!units.includes(toUnity)) error(toUnity); // se a unidade para conversão não for válida, lança um erro

  const forIndex = units.indexOf(forUnity); // pega o index da unidade base no array
  const toIndex = units.indexOf(toUnity); // pega o index da unidade para a conversão
  const exponent = toIndex - forIndex; // calcula o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
};
