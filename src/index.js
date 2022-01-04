import { GraphQLServer, PubSub } from "graphql-yoga";
import Subscription from "./resolvers/Subscription";
import Mutation from "./resolvers/Mutation";
import Comment from "./resolvers/Comment";
import Query from "./resolvers/Query";
import Post from "./resolvers/Post";
import User from "./resolvers/User";
import db from "./db";

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    User,
    Post,
    Comment,
    Subscription,
  },
  context: {
    db,
    pubsub,
  },
});

server.start(() => {
  console.log("Server is up");
});
