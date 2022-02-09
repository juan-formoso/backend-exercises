const connect = async () => {
  const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASS } = process.env;
  
  const connection = await mysql.createConnection(
    `mysql://${MYSQL_USER}:${MYSQL_PASS}@${MYSQL_HOST}:${MYSQL_PORT}/products`
  );

  global.connection = connection;
  return connection;
};
