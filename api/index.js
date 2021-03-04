const express = require("express");
const bodyparser = require("body-parser");
const port = 3003;

const app = express();

app.use(bodyparser.json());

app.get("/teste", (req, res) => res.status(200).send({ mensage: "oi" }));

app.listen(port, () => console.log("Servidor rodando"));

module.exports = app;
