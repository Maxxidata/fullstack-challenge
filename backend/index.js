const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);