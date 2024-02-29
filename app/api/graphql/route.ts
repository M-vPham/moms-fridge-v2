// @ts-nocheck
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { Mongoose } from "mongoose";
import {gql} from "graphql-tag";

import { MONGODB_URI } from "@/app/lib/constants";
import { MyContext } from "@/app/interfaces/type";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = gql`
  Query: {
    hello: () => "Hello World"
  }
`;

const server = new ApolloServer<MyContext>({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at ${url}`);