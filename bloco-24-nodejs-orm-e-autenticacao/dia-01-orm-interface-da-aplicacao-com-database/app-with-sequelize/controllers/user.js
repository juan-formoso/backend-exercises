const express = require("express");
const { User } = require("../models/user");
const router = express.Router();

// findAll é um método do Sequelize para retornar todos os users.
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

module.exports = router;
