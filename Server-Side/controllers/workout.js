const Workouts = require('../models').Workouts;

module.exports = {
  list(req, res) {
    return Workouts
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((exercise) => res.status(200).send(exercise))
      .catch((error) => { res.status(400).send(error); });
  },
  add(req, res) {
    console.log('TUKAAAAAAAAAA SYM', req.body.name)
    return Workouts
      .create({
        name: req.body.name,
      })
      .then((exercise) => res.status(201).send(exercise))
      .catch((error) => res.status(400).send(error));
  }
};