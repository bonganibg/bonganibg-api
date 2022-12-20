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


module.exports = router;