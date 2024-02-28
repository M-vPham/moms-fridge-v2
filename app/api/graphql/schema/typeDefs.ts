import { gql } from 'graphql-tag';


const typeDefs = gql`
  type Recipe {
    id: ID!
    name: String!
  }

  type Query {
    recipes: [Recipe]
  }
`;

export default typeDefs;