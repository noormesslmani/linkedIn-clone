const {Router} = require('express');
const {updateUser, getUsers, updateExperience} = require('../controllers/users.controller')
const router = Router();

router.put('/', updateUser);
router.put('/experience', updateExperience);
router.get('/', getUsers);
module.exports = router;
