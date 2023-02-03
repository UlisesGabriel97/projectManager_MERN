var express = require('express');
var router = express.Router();
const checkToken = require('../middlewares/checkToken')

const {profile} = require('../controllers/userController')

/* /api/users/... */
router
  .get('/profile', checkToken , profile)

module.exports = router;
