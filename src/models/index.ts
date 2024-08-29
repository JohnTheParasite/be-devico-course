import { createChatsTable } from "./chats";
import { createMessagesTable } from "./messages";
import { createUsersTable } from "./users";
import { createUsersChatsTable } from "./usersChats";
import { createTokensTable } from "./tokens";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

export const initializeTables = async (connection: Connection) => {
  await createUsersTable(connection);
  await createChatsTable(connection);
  await createMessagesTable(connection);
  await createUsersChatsTable(connection);
  await createTokensTable(connection);
};
