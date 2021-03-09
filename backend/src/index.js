const express = require("express");
const app = express();
const appConfig = require("./config/appConfig");

const { json } = require("body-parser");
app.use(json());

require("./models");

const routes = require("./routes");

app.use(routes);

const port = appConfig.port;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
