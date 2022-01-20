// Importação do driver do banco
const mysql = require("mysql2/promise");

// Criando uma "pool" de conexões com o banco de dados
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "minhasenha",
  database: "users_crud",
});

// Retornando a pool criada para ser utilizada pelo model
module.exports = connection;
