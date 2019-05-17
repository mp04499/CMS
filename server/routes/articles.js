const express = require('express');
const articlesAPI = require('../api/articles');
const router = express.Router();

router.get('/', (req, res, next) => {

  articlesAPI(req.query.country, (error, data) => {
    if (error)
      return res.send({ error });

    return res.send(data);
  });
});

module.exports = router;
