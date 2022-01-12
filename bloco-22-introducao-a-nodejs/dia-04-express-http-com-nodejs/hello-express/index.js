const express = require("express");
const app = express();

app.get("/hello", handleHelloWorldRequest);

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});

function handleHelloWorldRequest(request, response) {
  response.status(200).send("Hello World");
}
