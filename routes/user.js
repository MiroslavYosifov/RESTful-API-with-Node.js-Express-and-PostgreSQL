const router = require('express').Router();
const userController = require('../controllers').user;

router.get('/', userController.list);
router.post('/', userController.add);

module.exports = router;
