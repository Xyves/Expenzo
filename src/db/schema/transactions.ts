import { mysqlTable, int, varchar, text, date } from "drizzle-orm/mysql-core";
import { users } from "./users";
import { categories } from "./categories";

export const transactions = mysqlTable("transactions", {
  id: int("id").primaryKey().autoincrement(),
  type: varchar("type", { length: 10 }).notNull(),
  date: date("date").notNull(),
  note: text("note"),
  amount: int("amount").notNull(),
  category_id: int("category_id")
    .notNull()
    .references(() => categories.id),
  user_id: varchar("user_id", { length: 36 })
    .notNull()
    .references(() => users.id),
});
