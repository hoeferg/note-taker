const router = require('express').Router();


// Import our modular routers for /tips and /feedback
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');
// Set up path for router
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
