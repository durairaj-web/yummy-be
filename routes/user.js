'use strict';

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const UserController = require('../controllers/userController');
const validate = require('./validator/user');

// Define routes for user management
router.post('/register', validate('register'), UserController.registerUser);

module.exports = router;
