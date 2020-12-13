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
        name: req.body.orderData.name,
        kind: req.body.orderData.kind,
        protein: Number(req.body.orderData.protein),
        fat: Number(req.body.orderData.fat),
        carbohydrate: Number(req.body.orderData.carbohydrate),
      })
      .then((test) => res.status(201).send(test))
      .catch((error) => res.status(400).send(error));
  }
};