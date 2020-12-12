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
};