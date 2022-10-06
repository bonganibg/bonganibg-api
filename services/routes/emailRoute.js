const express = require('express');
const router = express.Router();
const Email = require('../models/emailModel');
const authCheck = require('../middleware/auth');


router.post('', (req, res) => {
    const email = {
        Name: req.body.name,
        Email: req.body.email,
        Subject: req.body.subject,
        Message: req.body.messafe,
        SentOn: req.body.date
    }
    new Email(email)
    .save()
    .then((response) => {
        res.status(201).json();
    })
    .catch((error) => {
        console.log(error);
        res.status(400)
    });
});


router.get('', authCheck, (req, res) => {

    Email.find()
    .then((response) =>{
        res.status(200).json({
            Emails: response
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json();
        });
    });
});



module.exports = router;