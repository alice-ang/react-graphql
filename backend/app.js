const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema, GraphQLObjectType } = require("graphql");
const {
  GraphgQLID,
  GraphQLString,
  GraphQLList,
  GraphQLType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphObjectType,
} = require("graphql");
const mongoose = require("mongoose");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello world!";
  },
};

const app = express();

const TaskModel = mongoose.model("task", {
  text: String,
  description: String,
  priority: String,
  status: String,
});

const TaskType = new GraphQLObjectType({
  name: "Task",
  fields: {
    id: { type: GraphgQLID },
    description: { type: GraphQLString },
    priority: { type: GraphQLString },
    status: { type: GraphQLString },
  },
});
async function loadTaskCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://admin:8oUk9TBD@cluster0-xmesc.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  return client.db("vue_express").collection("tasks");
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(3001);
console.log("Running a GraphQL API server at http://localhost:3000/graphql");
module.exports = app;
