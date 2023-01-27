const express = require('express');
const router = express.Router();

const { changePassword, checked, login, register, sendToken, verifyToken } = require('../controllers/authController')

/* /api/auth/... */

router
    .post('/register', register)
    .post('/login', login)
    .get('/checked', checked)
    .post('/send-token', sendToken)
    .route('/reset-password')
        .get(verifyToken)
        .post(changePassword)
    /* .get('/reset-password', verifyToken)
    .post('/reset-password', changePassword) */

module.exports = router;
