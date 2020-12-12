const router = require('express').Router();
const recipeController = require('../controllers').recipe;

router.get('/', recipeController.list);

module.exports = router;
