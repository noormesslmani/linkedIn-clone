const {Router} = require('express');
const {updateUser, getUsers, updateExperience, updateEducation, followUser, updateSkills, apply,getApplications,getUser,followCompany,getFollowingJobs} = require('../controllers/users.controller')
const router = Router();

router.put('/', updateUser);
router.put('/apply', apply);
router.get('/apply', getApplications);
router.get('/jobs/:id', getFollowingJobs);
router.put('/skills', updateSkills);
router.put('/follow-user', followUser);
router.put('/follow-company', followCompany);
router.put('/experience', updateExperience);
router.put('/education', updateEducation);
router.get('/', getUsers);
router.get('/:id', getUser);
module.exports = router;
