import { Connection } from "mysql2/typings/mysql/lib/Connection";

export const createUsersChatsTable = async (connection: Connection) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS userschats (
      id int(11) NOT NULL AUTO_INCREMENT,
      chatId int(11) NOT NULL,
      userId int(11) NOT NULL,
      PRIMARY KEY (id),
      KEY UsersChats_Chats_FK (chatId),
      KEY UsersChats_Users_FK (userId),
      CONSTRAINT UsersChats_Chats_FK FOREIGN KEY (chatId) REFERENCES chats (id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT UsersChats_Users_FK FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
    );
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Users_Chats table creating caused error: ", err);
      return;
    }
    console.log("Users_Chats Table created.", result);
  });
};
