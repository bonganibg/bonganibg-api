const router = require('express').Router();
const ProjectRepo = require('../repository/project.repo');
const authMW = require('../middleware/authorization.middleware');

router.post('', authMW,(req,res) => {
    let project = new ProjectRepo(req);

    project.createProject().then((response) => {
        res.status(201).json()
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json();
    })
})

router.get('', (req,res) => {
    let project = new ProjectRepo(req);

    project.getProjects().then((response) => {
        res.status(200).json({
            projects: response
        })
    })
    .catch((error) => {
        res.status(400).json()
    })
})


router.post('/tag', authMW,(req,res) => {
    let project = new ProjectRepo(req);

    project.createTag().then((response) => {
        res.status(201).json();
    })
    .catch((error) => {
        res.status(400).json()
    })
});

router.get('/tag', (req,res) => {
    let project = new ProjectRepo(req);

    project.getTags().then((response) => {
        res.status(200).json({
            tags: response
        });
    })
    .catch((error) => {
        res.status(400).json()
    })
});


module.exports = router;