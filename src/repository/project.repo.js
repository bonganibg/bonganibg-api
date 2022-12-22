const Project = require('../models/project.model');
const Tag = require('../models/project-tab.model');
const {v4: uuidv4} = require('uuid');

module.exports = class {
    constructor(request){
        this.request = request;
    }

    async createProject(){
        const project = {
            _id: uuidv4().toString(),
            name: this.request.body.name,
            img_url: this.request.body.img_url,
            short_description: this.request.body.description,
            tags: this.request.body.tags
        }
        return await new Project(project).save();
    }

    async getProjects(){
        return await Project.find();
    }

    async createTag(){
        const tag = {
            _id: uuidv4(),
            name: this.request.body.name
        }

        return await new Tag(tag).save();
    }
    
    async getTags(){
        return await Tag.find();
    }
}