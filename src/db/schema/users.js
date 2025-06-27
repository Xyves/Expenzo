import { mysqlTable, varchar, datetime, float } from "drizzle-orm/mysql-core";
export const users = mysqlTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  clerkUserId: varchar("clerk_user_id", { length: 191 }).notNull().unique(),
  email: varchar("email", { length: 36 }),
  username: varchar("username", { length: 36 }),
  createdAt: datetime("created_at", { mode: "string" }).default(
    "CURRENT_TIMESTAMP"
  ),
  balance: float("balance"),
});
