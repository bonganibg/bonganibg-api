const express = require('express');
const router = express.Router();
const Analytics = require('../models/analyticsModel');

router.post('', (req,res) => {
   const model = {
	date : 'today',
	note: req.body.data
   }
   new Analytics(model).save()
   .then((results) => {
		res.status(204).json();
	})
	.catch((err) => {
		res.status(401).json()
	});
});

router.post('/decrypt', (req,res) => {

    if (isDataValid(req.body.data)){
        const decoded = atob(req.body.data);
        const analytics = JSON.parse(decoded);
        new Analytics(analytics).save()
        .then(results => {
            res.status(204).json();
        })
        .catch(err => {
            console.log(err);
            res.status(401).json();
        });
    }
    else 
    {
        res.status(400).json();
    }
});


const isDataValid = (input) => {       
    try{
        
        const decoded = atob(input);
        const model = JSON.parse(decoded);
        if (model.date !== undefined && model.note !== undefined)
        {
            return true;
        }        
    }    
    catch(error){
        console.log(error);
    }
    
    return false;
}

module.exports = router;
