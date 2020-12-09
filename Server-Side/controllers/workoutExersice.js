const WorkoutExersice = require('../models').WorkoutExersice;

module.exports = {
  list(req, res) {
    return WorkoutExersice
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
    return WorkoutExersice
      .create({
        name: req.body.name,
      })
      .then((exercise) => res.status(201).send(exercise))
      .catch((error) => res.status(400).send(error));
  }
};