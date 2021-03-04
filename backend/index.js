const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Challenge Backend by Maycon Silva');
});

app.listen(3000);