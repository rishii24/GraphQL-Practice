const { gql } = require("apollo-server-express");

const typeDefs = gql`
  #types
  #to create a type, type keyword is used

  type User {
    Name: String!
    Gender: String!
    Home: String!
  }

  #queries
  ## write queries we wanna have regarding data and what it is gonna return
  ## this return User is the type we only created
  ## []! defines we wanna have a list of users as return

  type Query {
    getUsers: [User!]!
  }

  #mutations

  type Mutation {
    createUser(Name: String!, Gender: String!, Home: String!): User!
  }
`;

module.exports = { typeDefs };
