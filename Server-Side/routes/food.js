const router = require('express').Router();
const foodController = require('../controllers').food;

router.get('/', foodController.list);
router.post('/', foodController.add);
router.put('/', foodController.updateOne);

module.exports = router;
