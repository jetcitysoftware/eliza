'use strict';

const router = require('express').Router();

// Home page
router.get('/', rootHandler);

function rootHandler(req, res) {
  res
    .status(200)
    .send(
      'Welcome to the your server!'
    );
}

module.exports = router;
