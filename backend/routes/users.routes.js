const {Router} = require('express');
const {updateUser, getUsers, updateExperience, updateEducation, followUser, updateSkills} = require('../controllers/users.controller')
const router = Router();

router.put('/', updateUser);
router.put('/skills', updateSkills);
router.put('/follow', followUser);
router.put('/experience', updateExperience);
router.put('/education', updateEducation);
router.get('/', getUsers);
module.exports = router;
