const {Router} = require('express');
const router = Router();
const {createJob, getJobs} = require('../controllers/companies.controller')


router.post('/', createJob);
router.get('/:id', getJobs);
module.exports = router;
