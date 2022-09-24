const mongoose = require('mongoose');

const stringParams = {type: String, required: true};

const project = new mongoose.Schema({
	name: stringParams,
	platform: stringParams,
	image: stringParams,
	description: stringParams,
	link: stringParams,
	repoLink: stringParams
});

module.exports = mongoose.model('Project', project);
