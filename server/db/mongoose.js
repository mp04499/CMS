const mongoose = require('mongoose');

const uri = `${process.env.MONGO_PROTOCOL}${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
    .concat(process.env.MONGO_AUTHENTICATION ? '?authSource=admin' : '');

const connect = async () => {
    try {
        await mongoose.connect(
            uri,
            {
                user: process.env.MONGO_USER,
                pass: process.env.MONGO_PASSWORD,
                dbName: process.env.MONGO_DB,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                socketTimeoutMS: 0,
                keepAlive: true,
                keepAliveInitialDelay: 300000
            }
        );
        console.log("Database Connection Successful", uri)
    } catch (error) {
        console.log(error);
    }


}

module.exports = connect;