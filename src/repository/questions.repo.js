const Question = require('../models/questions.model');
const {v4: uuidv4} = require('uuid');
module.exports = class {
    constructor(request){
        this.request = request;
    }

    async createQuestion(){
        const question = {
            _id: uuidv4(),
            question: this.request.body.question,
            answer: this.request.body.answer
        }

        return await new Question(question).save();
    }

    async getQuestions(){
        return await Question.find();
    }
}