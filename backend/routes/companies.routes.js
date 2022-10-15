const {Router} = require('express');
const router = Router();
const {createJob} = require('../controllers/companies.controller')


router.post('/', createJob);

module.exports = router;
