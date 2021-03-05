const express = require('express');

var professionalRouter = require("./app/routes/professional");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Challenge Backend by Maycon Silva');
});

app.use("/professional", professionalRouter);


app.listen(3000);