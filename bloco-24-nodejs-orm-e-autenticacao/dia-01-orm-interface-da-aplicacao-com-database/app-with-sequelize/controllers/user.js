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

// findByPk é um método do Sequelize para buscar um usuário pelo id.
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });
    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

// findOne é um método do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/user/search/1?email=aqui-o-email
router.get("/search/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email } });
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });
    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

// create é um método do Sequelize para salvar um usuário no banco.
router.post("/", async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await User.create({ fullName, email });
    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

// update é um método do sequelize para alterar um usuário no banco.
router.put("/:id", async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;
    const [updateUser] = await User.update(
      { fullName, email },
      { where: { id } }
    );
    console.log(updateUser);
    if (!updateUser)
      return res.status(404).json({ message: "Usuário não encontrado" });
    return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

// destroy é um método do Sequelize para remover um usuário do banco.
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy({ where: { id } });
    console.log(deleteUser);
    return res.status(200).json({ message: "Usuário removido com sucesso!" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

module.exports = router;
