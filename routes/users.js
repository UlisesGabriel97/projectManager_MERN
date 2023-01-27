var express = require('express');
var router = express.Router();

const {profile} = require('../controllers/userController')

/* /api/users/... */
router
  .get('/profile', profile)

module.exports = router;
