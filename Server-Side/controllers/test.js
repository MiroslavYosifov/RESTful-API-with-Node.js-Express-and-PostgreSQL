const Tests = require('../models').Tests;

module.exports = {
  list(req, res) {
    return Tests
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((test) => res.status(200).send(test))
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
