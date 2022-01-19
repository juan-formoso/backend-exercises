const connection = require("./connection");

const getAllAuthors = async () => {
  const result = await connection.query(
    "SELECT first_name, middle_name, last_name FROM authors"
  );
  return result;
};

module.exports = {
  getAllAuthors,
};
