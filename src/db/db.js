import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema/index.js";

const client = await mysql.createConnection({
  uri: process.env.DATABASE_URL,
});

export const db = drizzle(client, { schema });
