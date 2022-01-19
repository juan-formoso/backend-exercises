const db = require("./db"); // arquivo "fictício" que representa a conexão com o banco

const getUser = async (username) => {
  return db.findOne({ username: username }).then((result) => result || null);
};
