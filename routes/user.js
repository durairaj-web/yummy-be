const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define routes for user management
router.post('/register', UserController.registerUser);

module.exports = router;