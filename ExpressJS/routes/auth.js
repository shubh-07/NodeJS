const express = require('express');

const router = express.Router();

router.post('/token', (req, res) => {
    res.send({ msg: 'Sign in Successful.' });
});

router.post('/signIn', (req, res) => {
    res.send({ msg: 'Sign in Successful.' });
});

module.exports = router;