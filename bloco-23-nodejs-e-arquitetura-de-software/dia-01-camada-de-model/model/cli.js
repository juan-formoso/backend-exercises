const readline = require("readline-sync");
const userModel = require("./userModel");

const start = async () => {
  const username = readline.question("Digite o nome de usuário: ");
  const user = await userModel.getUser(username);
  if (user) {
    return console.log("Usuário não encontrado");
  }
  console.log("Aqui estão os dados do usuário");
  console.log(user);
};

start();
