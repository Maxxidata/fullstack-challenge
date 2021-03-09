const express = require("express");
const app = express();

const { json } = require("body-parser");
app.use(json());

require("./models");

const routes = require("./routes");

app.use(routes);

app.listen(3000);
