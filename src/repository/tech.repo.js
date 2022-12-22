const Tech = require('../models/technologies.model');
const TechDetails = require('../models/tech-detail.model');
const {v4: uuidv4} = require('uuid');

module.exports = class {
    constructor(request){
        this.request = request;
    }

    async createTechSection(){
        const tech = {
            _id: uuidv4().toString(),
            heading: this.request.body.heading,
            technologies: this.request.body.technologies
        }

        return await new Tech(tech).save();
    }

    async createTechDetail(){
        const details = {
            _id: uuidv4().toString(),
            name: this.request.body.name,
            description: this.request.body.description,
            score: this.request.body.score,
            icon: this.request.body.icon
        };

        return await new TechDetails(details).save();
    }

    async getTechSection(){
        return await Tech.find();
    }

    async getTechDetails(id){        
        return await TechDetails.find({"_id": id});
    }

    async getAllTechDetails(){
        return await TechDetails.find({},{"description": 0, "icon": 0, "score": 0});
    }


}