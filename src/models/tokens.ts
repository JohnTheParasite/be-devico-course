import { Connection } from "mysql2/typings/mysql/lib/Connection";

export const createTokensTable = async (connection: Connection) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS tokens (
      id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      userId INT NOT NULL,
      accessToken varchar(100) NOT NULL,
      refreshToken varchar(100) NOT NULL,
      expiresAt TIMESTAMP NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
    );
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Tokens creating caused error: ", err);
      return;
    }
    console.log("Tokens created.", result);
  });
};
