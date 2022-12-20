const About = require('../models/about.model');
const { v4: uuidv4 } = require('uuid');

module.exports = class {
    
    constructor(request){
        this.request = request;        
    }

    async getAbout(){
        return await About.find();
    }

    async createAboutSection(){
        const section = {
            _id: uuidv4().toString(),
            heading: this.request.body.heading,
            paragraph: this.request.body.paragraph
        };

        return await new About(section).save();
    }


}