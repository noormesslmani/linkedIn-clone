const {Router} = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth.company.middleware');
const {createJob, getJobs,getApplicants} = require('../controllers/companies.controller')


router.post('/',authMiddleware, createJob);
router.get('/jobs',authMiddleware, getJobs);
router.get('/applicants',authMiddleware, getApplicants);
module.exports = router;
