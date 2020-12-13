const router = require('express').Router();
const recipeController = require('../controllers').recipe;

router.get('/', recipeController.list);
router.post('/', recipeController.add);

module.exports = router;
