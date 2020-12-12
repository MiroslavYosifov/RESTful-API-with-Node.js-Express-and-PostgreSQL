const router = require('express').Router();
const workoutController = require('../controllers').workout;

router.get('/', workoutController.list);
router.post('/', workoutController.add);

module.exports = router;
