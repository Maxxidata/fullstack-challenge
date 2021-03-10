const express = require("express")
const routes = require('./routes')

require('./database')

const app = express();

app.use(express.json());
app.use('/',routes);

module.exports = app