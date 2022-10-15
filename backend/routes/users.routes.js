const {Router} = require('express');
const {updateUser, getUsers, updateExperience, updateEducation, followUser} = require('../controllers/users.controller')
const router = Router();

router.put('/', updateUser);
router.put('/follow', followUser);
router.put('/experience', updateExperience);
router.put('/education', updateEducation);
router.get('/', getUsers);
module.exports = router;
