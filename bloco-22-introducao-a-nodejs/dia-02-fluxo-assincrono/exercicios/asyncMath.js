const math = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      reject("Invalid input, only numbers are allowed");
    }
    const result = (a + b) * c;
    if (result < 50) {
      reject("Result is too low");
    }
    resolve(result);
  });
};

/* math(10, 20, 30)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

math(10, 20, "30")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

math(1, 2, 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); */

const generateNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const asyncMath = async () => {
  const a = generateNumber();
  const b = generateNumber();
  const c = generateNumber();
  /* const randomNumbers = Array.from({ length: 3 }).map(generateNumber); */
  try {
    const result = await math(a, b, c);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
