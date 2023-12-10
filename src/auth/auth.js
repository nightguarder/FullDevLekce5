const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

const { userLogin, tokenRefresh } = require('../server/middleware');

dotenv.config();

//Authenticated route for login
// Log in route
router.post('/login', userLogin, async (req, res) => {
  res.json({
    message: 'Log In',
    content: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
});

//Refresh token after expiration
router.post('/refresh', tokenRefresh, async (req, res) => {
  res.json({
    message: 'Refresh',
    content: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
});

module.exports = router;