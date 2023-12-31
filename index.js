'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const validator = require('validator');
const userRoutes = require('./routes/user');

// Middleware for request parsing
app.use(express.json());

// Restricts api requests to a different domain
app.use(cors());

app.use((req, res, next) => {
  // Sanitize and trim all request body parameters
  for (const key in req.body) {
    req.body[key] = validator.escape(req.body[key]);
    req.body[key] = validator.trim(req.body[key]);
  }
  next();
});

// Register routes
app.use('/v1/api/users', userRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
