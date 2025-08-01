import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "mysql", // 'mysql' | 'sqlite' | 'turso'
    schema: "./src/db/schema",
    // out: "./drizzle",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});
