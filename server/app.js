require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { makeExecutableSchema } = require('graphql-tools');
const authMiddleware = require('./auth/authMiddleware');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('./db/mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use(authMiddleware);

const server = new ApolloServer({
    schema,
    context: async ({ req, res, connection }) => {
        if (connection)
            return connection.context;

        return {
            user: req.user || '',
            res
        }
    }
});

server.applyMiddleware({
    app,
    cors: { origin: `http://localhost`, credentials: true }
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

mongoose();
httpServer.listen(process.env.SERVER_PORT, () => {
    console.log(
        `🚀 Server ready! 
        Container: ${process.env.SERVER_CONTAINER}
        Port: ${process.env.SERVER_PORT}
        GraphQL Endpoint: ${server.graphqlPath}
        \n
        `);
    console.log(
        `🚀 Subscriptions ready! 
        Container: ${process.env.SERVER_CONTAINER}
        Port: ${process.env.SERVER_PORT}
        Subscription Endpoint: ${server.subscriptionsPath}
        \n
        `);
});
