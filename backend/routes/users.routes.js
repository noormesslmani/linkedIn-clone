const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.user.middleware');
const {updateUser, getUsers, me, updateExperience, updateEducation, followUser, updateSkills, apply,getApplications,getUser,followCompany,getFollowingJobs} = require('../controllers/users.controller')
const router = Router();

router.put('/',authMiddleware, updateUser);
router.put('/apply', apply);
router.get('/me',authMiddleware, me);
router.get('/apply', getApplications);
router.get('/jobs/:id', getFollowingJobs);
router.put('/skills', updateSkills);
router.put('/follow-user', followUser);
router.put('/follow-company', followCompany);
router.put('/experience', updateExperience);
router.put('/education', updateEducation);
router.get('/',authMiddleware, getUsers);
router.get('/:id', getUser);
module.exports = router;
