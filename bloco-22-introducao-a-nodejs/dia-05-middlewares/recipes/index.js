/* CONSTANTES */
const express = require("express");
const bodyParser = require("body-parser");
const authMiddleware = require("./middleware/auth-middleware");
const app = express();

app.use(bodyParser.json());
app.get("/open", function (req, res) {
  res.send("Open");
});

const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
];

/* GET RECIPES */
app.get("/recipes", function (req, res) {
  res.status(200).json(recipes);
});

// SEARCH
app.get("/recipes/search", function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) => r.name.includes(name) && r.price < parseInt(maxPrice)
  );
  res.status(200).json(filteredRecipes);
});

// ID
app.get("/recipes/:id", function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: "Recipe not found!" });

  res.status(200).json(recipe);
});

// Validate Name
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === "")
    return res.status(400).json({ message: "Invalid data. Name is required!" });
  next();
}

// Validate Price
function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!price || price === "")
    return res
      .status(400)
      .json({ message: "Invalid data. Price is required!" });
  if (price <= 0)
    return res
      .status(400)
      .json({ message: "Invalid data. Price must be greater than 0!" });
  next();
}

/* POST RECIPES */
app.post("/recipes", validateName, validatePrice, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: "Recipe created successfully!" });
});

/* PUT RECIPES */
app.put("/recipes/:id", validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

/* DELETE RECIPES */
app.delete("/recipes/:id", function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

/* NON-EXISTENT ROUTE */
app.all("*", function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

/* PORT */
app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
