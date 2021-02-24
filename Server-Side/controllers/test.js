const Tests = require('../models').Tests;

module.exports = {
  list(req, res) {
    res.status(200).send('IT IS WORKING')
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
