const fs = require("fs");

module.exports = (file, content) => {
  fs.writeFileSync(`${__dirname}/${file}`, content);
  return ok;
};
