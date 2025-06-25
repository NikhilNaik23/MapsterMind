import pg from "pg";
import { configDotenv } from "dotenv";
configDotenv();

const db = new pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default db;
