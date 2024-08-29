import { createConnection } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const sqlConnection = createConnection({
  host: DB_HOST || "localhost",
  port: DB_PORT ? parseInt(DB_PORT) : 3306,
  user: DB_USER || "root",
  password: DB_PASSWORD || "",
  database: DB_NAME || "root",
});

sqlConnection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database: ", error);
    return;
  }

  console.log("Connected to the database.");
});

export default sqlConnection;
