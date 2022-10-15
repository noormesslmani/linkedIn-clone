const {Router} = require('express');
const router = Router();
const {getAllJobs} = require('../controllers/jobs.controller')

router.get('/', getAllJobs);
module.exports = router;