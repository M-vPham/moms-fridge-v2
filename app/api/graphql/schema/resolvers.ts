import { gql } from "graphql-tag";

const resolvers = {
    Query: {
      hello: () => "Hello world!",
    },
  };

export default resolvers;