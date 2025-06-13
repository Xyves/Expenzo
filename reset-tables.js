const mysql = require("mysql2/promise");
require("dotenv").config();

async function renameColumn() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  try {
    await connection.query(
      "ALTER TABLE `users` RENAME COLUMN `first_name` TO `name`;"
    );
    console.log("Column renamed successfully!");
  } catch (err) {
    console.error("Error renaming column:", err);
  } finally {
    await connection.end();
  }
}

renameColumn();
