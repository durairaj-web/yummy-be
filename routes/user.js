'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const validate = require('./validator/user');

router.post('/register', validate('register'), UserController.registerUser);
router.post('/login', validate('login'), UserController.loginUser);

module.exports = router;
