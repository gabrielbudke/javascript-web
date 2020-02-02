const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (request, response) => {
  console.log(request.body);
  response.json({ message: "Usuário incluído!" });
});

app.post("/usuarios/:id", (request, response) => {
  console.log(request.params.id);
  console.log(request.body);
  response.json({ message: "Usuário alterado!" });
});

app.listen(3003);
