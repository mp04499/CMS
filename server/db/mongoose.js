const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URL}${process.env.MONGO_DB}`,
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(console.log("Connection Successful"))
    .catch(error => console.log(error));

module.exports = mongoose;