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

math(10, 20, 30)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

math(10, 20, "30")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

math(1, 2, 3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
