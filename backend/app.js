import express from 'express';
import routes from './src/routes';
import { database } from './src/database';

// Test DB
database.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(error => console.log(error));

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT);

console.log('Server running on port 3333');
