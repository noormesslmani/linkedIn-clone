const {Router} = require('express');
const {updateUser, getUsers} = require('../controllers/users.controller')
const router = Router();

router.put('/', updateUser);
router.get('/', getUsers);
module.exports = router;
