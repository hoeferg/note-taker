const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

const app = express();

app.use('/apiRoutes', apiRoutes);
app.use('/htmlRoutes', htmlRoutes);

module.exports = app;