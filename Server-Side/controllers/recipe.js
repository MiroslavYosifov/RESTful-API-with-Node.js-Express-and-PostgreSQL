const Recipe = require('../models').Recipe;

module.exports = {
  list(req, res) {
    return Recipe
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((recipe) => res.status(200).send(recipe))
      .catch((error) => { res.status(400).send(error); });
  },
};