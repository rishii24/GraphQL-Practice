// here the functon is written to run the query we just wrote in the typedefs
// here we also make database calls and handle the data

//Its a func which is called and executed when a query or mutaion is called
const { users } = require("../Data");

const resolvers = {
  Query: {
    getUsers() {
      return users;
    },
  },

  Mutation: {
    createUser(parent, args) {
      const newUser = args;
      users.push(newUser);
      return newUser;
    },
  },
};

module.exports = { resolvers };
