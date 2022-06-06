// entry point of api where we set express server and and tell it to listen to a port
// and here is applied graphql middleware
//
//it runs before every request, enables us handling data
// no http request we have mutations and queries
// queries - get request from rest
// mutation - crud operation

const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/Resolvers");

const express = require("express");
// const app = express();

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    const PORT = 3001
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    
    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
})
}

startApolloServer(typeDefs, resolvers);

// const server = new ApolloServer({ typeDefs, resolvers }); //these vari are passed to start our server

// server.applyMiddleware({ app }); //server is the middleware and and we are applying on app (our express server instance)

// app.listen({ port: 3001 }, () => console.log("server running"));

//
// typeDefs : the queries the mutations the functions the requests which are gonna be performed on our data come under this
// resolvers : just functions which are called when requests are made to type definitions.
