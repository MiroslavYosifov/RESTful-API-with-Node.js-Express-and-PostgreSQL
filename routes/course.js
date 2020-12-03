const router = require('express').Router();
const courseController = require('../controllers').course;

router.get('/', courseController.list);
router.get('/:id', courseController.getById);
router.post('/', courseController.add);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);

module.exports = router;
