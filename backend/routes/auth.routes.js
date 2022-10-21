const {Router} = require('express')
const {login, signup} = require('../controllers/authuser.controller')
const {signupCompany, loginCompany} = require('../controllers/authcompany.controller')
const router = Router();

router.post('/user-signup', signup);
router.post('/user-login', login);
router.post('/company-signup', signupCompany);
router.post('/company-login', loginCompany);

module.exports = router;