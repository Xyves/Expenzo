import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "drizzle-graphql";
import { db } from "./db/db.js"; // your DB instance

async function startApolloServer() {
  try {
    const { schema } = buildSchema(db);

    const server = new ApolloServer({
      schema,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4100 },
    });

    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.error("Failed to start Apollo Server:", error);
    process.exit(1);
  }
}

startApolloServer();
