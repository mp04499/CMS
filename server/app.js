const express = require('express');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const Post = require('./db/models/post');
const User = require('./db/models/user');
const { makeExecutableSchema } = require('graphql-tools');
const jwt = require('express-jwt');
require('./db/mongoose');

const articlesRouter = require('./routes/articles');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();

const authMiddleware = jwt({
    secret: process.env.SECRET_KEY,
    credentialsRequired: false
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(authMiddleware);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use('/articles', articlesRouter);
app.use('/graphql', graphqlHttp(req => ({
    schema: schema,
    context: { user: req.user },
    graphiql: true
})));

module.exports = app;
