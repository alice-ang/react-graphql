var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var {
  buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = new GraphQLSchema({
  query: GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello World",
      },
    }),
  }),
});

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(3001);
console.log("Running a GraphQL API server at http://localhost:3001/graphql");
