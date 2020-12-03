const router = require('express').Router();
const classroomController = require('../controllers').classroom;

/* Classroom Router */
router.get('/', classroomController.list);
router.get('/:id', classroomController.getById);
router.post('/', classroomController.add);
router.put('/:id', classroomController.update);
router.delete('/:id', classroomController.delete);

module.exports = router;