import { Connection } from "mysql2/typings/mysql/lib/Connection";

export const createMessagesTable = async (connection: Connection) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS messages (
      id int(11) NOT NULL AUTO_INCREMENT,
      text text DEFAULT NULL,
      chatId int(11) NOT NULL,
      creatorId int(11) NOT NULL,
      createdAt timestamp NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      repliedMessageId int(11) DEFAULT NULL,
      status tinyint(1) DEFAULT 1,
      forwardedChatId int(11) DEFAULT NULL,
      forwardedFromUserId int(11) DEFAULT NULL,
      PRIMARY KEY (id),
      KEY Messages_Chats_FK (chatId),
      KEY Messages_Users_FK (creatorId),
      KEY Messages_Messages_FK (repliedMessageId),
      KEY Messages_Messages_FK_1 (forwardedChatId),
      KEY Messages_Users_FK_1 (forwardedFromUserId),
      CONSTRAINT Messages_Chats_FK FOREIGN KEY (chatId) REFERENCES chats (id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT Messages_Messages_FK FOREIGN KEY (repliedMessageId) REFERENCES messages (id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT Messages_Messages_FK_1 FOREIGN KEY (forwardedChatId) REFERENCES messages (id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT Messages_Users_FK FOREIGN KEY (creatorId) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT Messages_Users_FK_1 FOREIGN KEY (forwardedFromUserId) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
    );
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Messages table creating caused error: ", err);
      return;
    }
    console.log("Messages Table created.", result);
  });
};
