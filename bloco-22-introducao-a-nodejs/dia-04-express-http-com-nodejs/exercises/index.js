const express = require("express");
const bodyParser = require("body-parser");
const rescue = require("express-rescue");
const app = express();
const simpsonsUtils = require("./fs-utils");

app.use(bodyParser.json());

/* GET ROUTE */
app.get("/ping", (_req, res) => res.json({ message: "pong" }));

// Endpoint to Simpsons
app.get(
  "/simpsons",
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();
    res.status(200).json(simpsons);
  })
);

// Endpoint to Simpsons by ID
app.get(
  "/simpsons/:id",
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpson = simpsons.find(({ id }) => id === req.params.id);
    if (!simpson) {
      return res.status(404).json({ message: "simpson not found" });
    }
    return res.status(202).json(simpson);
  })
);

/* POST ROUTE */
app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

// Endpoint to add a new simpson
app.post(
  "/simpsons",
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await simpsonsUtils.getSimpsons();
    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: "id already exists" });
    }
    simpsons.push({ id, name });
    await simpsonsUtils.setSimpsons(simpsons);
    res.status(204).end();
  })
);

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
