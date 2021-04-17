const express = require("express");
const bodyParser = require("body-parser");
const port = 3003;
const routes = require("./api/routes");

const app = express();

routes(app);

app.listen(port, () => console.log("Servidor rodando"));

module.exports = app;
