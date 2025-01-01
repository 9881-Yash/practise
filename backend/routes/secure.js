const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/dashboard', auth, (req, res) => {
    res.json({ msg: `Welcome, User ${req.user}` });
});

module.exports = router;
