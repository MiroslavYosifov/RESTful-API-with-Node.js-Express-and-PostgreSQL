const Recipes = require('../models').Recipes;

module.exports = {
  list(req, res) {
    return Recipes
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((recipes) => res.status(200).send(recipes))
      .catch((error) => { res.status(400).send(error); });
  },
  add(req, res) {
    return Tests
      .create({
        name: req.body.name,
        kind: req.body.kind,
        macros: req.body.macros,
        addObj: req.body.addObj,
      })
      .then((test) => res.status(201).send(test))
      .catch((error) => res.status(400).send(error));
  }
};