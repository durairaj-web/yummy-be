// index.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

// Middleware for request parsing
app.use(express.json());

// Use routes
app.use('/v1/api/users', userRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
