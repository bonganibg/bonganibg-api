const express = require('express');
const router = express.Router();
const Project = require('../models/projectModel');
const authCheck = require('../middleware/auth');

router.post('', authCheck,(req, res) => {
	const project = {
		name: req.body.name,
		platform: req.body.platform,
		image: req.body.image,
		description: req.body.description,
		link: req.body.link,
		repoLink: req.body.repoLink
	}
	new Project(project).save()
	.then(results => {
		console.log(project);
		res.status(201).json({
			message: "Project Added"
		});
	})
	.catch(err => {
		console.log(err)
		res.status(401).json({
			error: err
		});
	});
});


router.get('', (req, res) => {
	Project.find()
	.exec()
	.then((doc) => {
		if (doc.length > 0)
		{
			res.status(200).json({
				projects: doc
			});
		}
		else{			
			res.status(204).json();
		}
	})
	.catch((err) => {
		res.status(404).json();
	});
});

router.put('', authCheck,(req, res) => {
	const project = {
		name: req.body.name,
		platform: req.body.platform,
		image: req.body.image,
		description: req.body.description,
		link: req.body.link,
		repoLink: req.body.repoLink
	}
	Project.updateOne({_id: req.headers.id}, project)
	.then(() => {
		res.status(200).json({
			message: "Updated"
		});
	})
	.catch((err) => {
		res.status(400).json({
			message: "Not Updated"
		});
	});
});

router.delete('', authCheck, (req, res) => {
	Project.deleteOne({_id: req.headers.id})
	.then(() => {
		res.status(200).json({
			message: "Deleted"
		});
	});
});

module.exports = router;