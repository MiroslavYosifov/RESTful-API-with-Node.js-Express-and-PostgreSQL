const router = require('express').Router();
const foodController = require('../controllers').food;

router.get('/', foodController.list);
router.post('/', foodController.pagination); //should be get method
router.post('/', foodController.add);
router.put('/', foodController.updateOne);
router.delete('/', foodController.deleteOne);

module.exports = router;
