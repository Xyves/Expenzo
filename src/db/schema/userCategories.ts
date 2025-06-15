import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { users } from "./users";

export const userCategories = mysqlTable("userCategories", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 30 }),
  icon: varchar("icon", { length: 50 }),
  color: varchar("color", { length: 20 }),
  user_id: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id),
});
