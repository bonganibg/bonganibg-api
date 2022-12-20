const router = require('express').Router();
const AboutRepo = require('../repository/about.repo');
const QuestionsRepo = require('../repository/questions.repo');
const TechRepo = require('../repository/tech.repo');
const authMW = require('../middleware/authorization.middleware');

router.post('/me', authMW ,(req,res) => {
    const about = new AboutRepo(req);

    about.createAboutSection().then((response) => {
        res.status(201).json();
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json();
    });
})

router.get('/me', (req,res) => {
    const about = new AboutRepo(req);

    about.getAbout().then((response) => {
        res.status(200).json({
            about: response
        })
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json()
    })

})


router.post('/tech/detail', authMW,(req,res) => {
    const tech = new TechRepo(req);

    tech.createTechDetail().then((response) => {
        res.status(201).json({})
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({})
    })
});

router.get('tech/detalil/:id', (req,res) => {
    const tech = new TechRepo(req);

    tech.getTechDetails(req.params.id).then((response) => {
        res.status(200).json({
            details: response
        })
    }).catch((error) => {
        console.log(error);
        res.status(400).json()
    })
})

router.post('/tech', authMW, (req,res) => {
    const tech = new TechRepo(req);

    tech.createTechSection().then((response) => {
        res.status(201).json();
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json();
    });
})

router.get('/tech', (req,res) =>{
    const tech = new TechRepo(req);

    tech.getTechSection().then((response) => {
        res.status(200).json({
            technologies: response
        })        
    })
    .catch((error) => {
        res.status(400).json()
    });
})


router.post('/question', authMW,(req,res) => {
    const question = new QuestionsRepo(req);

    question.createQuestion().then((response) => {
        res.status(201).json();
    })
    .catch((error) => {
        console.warn(error);
        res.status(400).json();
    })
})


router.get('/question', (req,res) => {
    const question = new QuestionsRepo(req);

    question.getQuestions().then((response) => {
        res.status(200).json({
            questions: response
        })
    })
    .catch((error) => {
        console.warn(error);
        res.status(400).json()
    })
})

module.exports = router;