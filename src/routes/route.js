
const express = require('express');
const formatter = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
  formatter.trim()
  formatter.getlowercase()
  formatter.getUppercase()
  res.send('my 1st api')

});

module.exports = router;







