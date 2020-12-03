const router = require('express').Router();
const studentController = require('../controllers').student;

router.get('/', studentController.list);
router.get('/', studentController.getById);
router.post('/', studentController.add);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

module.exports = router;
