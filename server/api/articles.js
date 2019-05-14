const axios = require('axios');

const retrieveArticles = (country = 'us', callback) => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=d5342e381e0748ada294675b8bca5fef`)
        .then(response => {
          callback(undefined, response.data.articles);
        })
        .catch(error => callback(error, undefined));
}

module.exports = retrieveArticles;