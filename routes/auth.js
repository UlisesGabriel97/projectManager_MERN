const express = require('express');
const router = express.Router();

const { changePassword, checkedUser, login, register, sendToken, verifyToken } = require('../controllers/authController')

/* /api/auth/... */

router
    .post('/register', register)
    .post('/login', login)
    .get('/checkedUser', checkedUser)
    .post('/send-token', sendToken)
    .route('/reset-password')
        .get(verifyToken)
        .post(changePassword)
    /* .get('/reset-password', verifyToken)
    .post('/reset-password', changePassword) */

module.exports = router;
