const router = require('express').Router();
const courseController = require('../controllers').course;

router.post('/', courseController.add);

module.exports = router;
