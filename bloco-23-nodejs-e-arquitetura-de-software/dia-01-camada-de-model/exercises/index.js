// Importamos as libs que vamos usar
const express = require("express");
const bodyParser = require("body-parser");

// Criamos a aplicação do express
const app = express();

// Instalamos o middleware que faz a leitura e conversão do corpo das requisições em JSON
app.use(bodyParser.json());

/*
    - Middlewares de cada rota vêm aqui

    */

// Definimos a porta
const PORT = 3000;

// Iniciamos o servidor
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
