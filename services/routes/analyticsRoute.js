const express = require('express');
const router = express.Router();
const Analytics = require('../models/analyticsModel');

router.post('', (req,res) => {
    const analytics = {
        date: req.body.date,
        note: req.body.note
    }
    new Analytics(analytics).save()
    .then(results => {
        res.status(204).json();
    })
    .catch(err => {
        console.log(err);
        res.status(401).json();
    });
});

module.exports = router;