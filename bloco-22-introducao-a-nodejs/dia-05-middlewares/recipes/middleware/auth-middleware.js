const validUser = [
  { username: "Patolino", password: "12345678" },
  { username: "Pernalonga", password: "abcd1234" },
  { username: "Papaleguas", password: "abcd1234" },
  { username: "Frajola", password: "abcd1234" },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  if (!username || !password) {
    return res
      .status(401)
      .json({ message: "Username or password can not be blank!" });
  }
  const foundUser = validUser.find((user) => user.username === username);
  if (!foundUser) return res.status(401).json({ message: "Invalid username!" });
  if (username !== validUser.username || password !== validUser.password) {
    return res
      .status(401)
      .json({ message: "Username or password is incorrect!" });
  }
  req.user = foundUser;
  next();
};

module.exports = authMiddleware;
