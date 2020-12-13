const Food = require('../models').Food;

module.exports = {
  list(req, res) {
    return Food
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((food) => res.status(200).send(food))
      .catch((error) => { res.status(400).send(error); });
  },
  add(req, res) {
    return Food
      .create({
        name: req.body.name,
        kind: req.body.kind,
        macros: req.body.macros,
      })
      .then((test) => res.status(201).send(test))
      .catch((error) => res.status(400).send(error));
  }
};