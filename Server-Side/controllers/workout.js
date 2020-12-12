const Workout = require('../models').Workout;

module.exports = {
  list(req, res) {
    return Workout
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
    return Workout
      .create({
        name: req.body.name,
      })
      .then((exercise) => res.status(201).send(exercise))
      .catch((error) => res.status(400).send(error));
  }
};