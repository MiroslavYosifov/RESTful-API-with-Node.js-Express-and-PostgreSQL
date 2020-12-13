const router = require('express').Router();
const testController = require('../controllers').test;

router.get('/', testController.list);
router.post('/', testController.add);

module.exports = router;
