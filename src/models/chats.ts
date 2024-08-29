import { Connection } from "mysql2/typings/mysql/lib/Connection";

export const createChatsTable = async (connection: Connection) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS chats (
      id int(11) NOT NULL AUTO_INCREMENT,
      title varchar(100) DEFAULT NULL,
      creatorId int(11) NOT NULL,
      createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY Chats_Users_FK (creatorId),
      CONSTRAINT Chats_Users_FK FOREIGN KEY (creatorId) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
    );
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Chats table creating caused error: ", err);
      return;
    }
    console.log("Chats Table created.", result);
  });
};
