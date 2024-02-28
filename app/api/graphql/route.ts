import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import mongoose from "mongoose";

import typeDefs from "./schema/typeDefs";
import resolvers from "./schema/resolvers";

//you can view the apollo playground on localhost:3000/api/graphql

const uri = "mongodb+srv://michellepham000:test@cluster-0.niqmbaz.mongodb.net/";

const connectDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log("🎉 connected to database successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
  plugins: [
    // Install a landing page plugin based on NODE_ENV
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: 'my-graph-id@my-graph-variant',
          footer: false,
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req }),
});

export { handler as GET, handler as POST };
