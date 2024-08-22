import { createConnection } from "mysql2";

const sqlConnection = createConnection({
  host: "localhost",
  port: 3306,
  user: "chatuser",
  password: "Fishki123!",
  database: "chatapp",
});

sqlConnection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database: ", error);
    return;
  }

  console.log("Connected to the database.");
});

export default sqlConnection;
