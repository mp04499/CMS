const express = require('express');
const graphqlHttp = require('express-graphql');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { makeExecutableSchema } = require('graphql-tools');
const expressjwt = require('express-jwt');
const session = require('express-session');
const authMiddleware = require('./auth/authMiddleware');
require('./db/mongoose');

const articlesRouter = require('./routes/articles');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();

// const authMiddleware = expressjwt({
//     secret: process.env.SECRET_KEY,
//     credentialsRequired: false,
//     getToken: fromHeaderOrQuerystring = (req) => {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             return req.headers.authorization.split(' ')[1];
//         } else if (req.query && req.query.token) {
//             return req.query.token;
//         }
//         return null;
//     }
// });

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use('/articles', articlesRouter);

app.use(authMiddleware);
app.use('/graphql', graphqlHttp((req, res) => ({
    schema: schema,
    context: {
        user: req.user || '',
        res
    },
    graphiql: true
})));

module.exports = app;
