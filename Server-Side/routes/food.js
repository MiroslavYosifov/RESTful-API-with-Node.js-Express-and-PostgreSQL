const router = require('express').Router();
const foodController = require('../controllers').food;

router.get('/', foodController.list);

module.exports = router;
