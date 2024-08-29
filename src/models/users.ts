import { Connection } from "mysql2/typings/mysql/lib/Connection";

export const createUsersTable = async (connection: Connection) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id int(11) NOT NULL AUTO_INCREMENT,
      username VARCHAR(100) DEFAULT NULL,
      firstName VARCHAR(100) DEFAULT NULL,
      lastName VARCHAR(100) DEFAULT NULL,
      createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    );
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Users table creating caused error: ", err);
      return;
    }
    console.log("Users Table created.", result);
  });
};
