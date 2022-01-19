const userModel = require("./userModel");

const getUserMiddleware = async (req, res, next) => {
  const { username } = req.body;
  try {
    const user = await userModel.getUser(username);
    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }
    return res.status(200).json(user);
  } catch (e) {
    res.status(500).send({ message: "Erro ao buscar usuário" });
  }
};

// Dessa forma, caso os usuários passem a estar armazenados em outro lugar, como num arquivo, ou num outro banco de dados, só será necessário alterar o arquivo userModel.js e, automaticamente, tudo volta a funcionar.
