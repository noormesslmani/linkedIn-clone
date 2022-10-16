const {Router} = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth.company.middleware');
const {createJob, getJobs} = require('../controllers/companies.controller')


router.post('/',authMiddleware, createJob);
router.get('/jobs',authMiddleware, getJobs);
module.exports = router;
