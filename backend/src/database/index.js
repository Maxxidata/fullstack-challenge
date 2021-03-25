import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const database = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);