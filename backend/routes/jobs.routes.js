const {Router} = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth.company.middleware');
const {getAllJobs} = require('../controllers/jobs.controller')

router.get('/',authMiddleware, getAllJobs);
module.exports = router;