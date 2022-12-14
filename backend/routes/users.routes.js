const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.user.middleware');
const {getNotifications, unfollowCompany, updateUser, getUsers, me, updateExperience, updateEducation, updateSkills, apply,getApplications,getUser,followCompany,getFollowingJobs, getCompanies} = require('../controllers/users.controller')
const router = Router();

router.put('/',authMiddleware, updateUser);
router.put('/experience',authMiddleware, updateExperience);
router.put('/education',authMiddleware, updateEducation);
router.put('/skills',authMiddleware, updateSkills);

router.put('/apply', authMiddleware,apply);
router.get('/applications',authMiddleware, getApplications);

router.get('/jobs',authMiddleware, getFollowingJobs);
router.get('/notifications',authMiddleware, getNotifications);

router.put('/follow-company',authMiddleware, followCompany);
router.put('/unfollow-company',authMiddleware, unfollowCompany);

router.get('/me',authMiddleware, me);
router.get('/companies',authMiddleware, getCompanies);
router.get('/',authMiddleware, getUsers);
router.get('/:id',authMiddleware, getUser);
module.exports = router;
