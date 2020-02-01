const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (request, response) => {
  console.log(request.body);
  response.send("Parabéns");
});

app.listen(3003);
