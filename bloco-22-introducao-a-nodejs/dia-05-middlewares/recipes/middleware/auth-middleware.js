const validUser = {
  username: "Patolino",
  password: "12345678",
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  if (!username || !password) {
    return res
      .status(401)
      .json({ message: "Username or password can not be blank!" });
  }
  if (username !== validUser.username || password !== validUser.password) {
    return res
      .status(401)
      .json({ message: "Username or password is incorrect!" });
  }
  next();
};

module.exports = authMiddleware;
