const router = require('express').Router();
const workoutExersice = require('../controllers').workoutExersice;

router.get('/', workoutExersice.list);
router.post('/', workoutExersice.add);

module.exports = router;
