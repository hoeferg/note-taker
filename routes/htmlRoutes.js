const path = require("path")
const router = require("express").Router()

// Get information from database
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);
// adds new notes to database
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router;