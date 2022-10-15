const {Router} = require('express');
const {login, signup} = require('../controllers/auth.controller')
const {signupCompany} = require('../controllers/authcompany.controller')
const router = Router();

router.post('/user-signup', signup);
router.post('/user-login', login);
router.post('/company-signup', signupCompany);


module.exports = router;