const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

/* GET ROUTE */
app.get("/ping", (_req, res) => res.json({ message: "pong" }));

/* POST ROUTE */
app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

/* PUT ROUTE */
app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }
  res.status(200).json({ message: `Hello, ${name}!` });
});

/* ERROR MESSAGE */
app.use(function (err, req, res, next) {
  res.status(500).send(`Something went wrong! Message: ${err.message}`);
});

/* SERVER */
app.listen(3000, () => console.log("Server running on port 3000"));
