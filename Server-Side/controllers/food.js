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

    const { name, kind, protein, fat, carbohydrate, imgUrl} = req.body;
    const calories = (Number(protein) * 4) + (Number(carbohydrate) * 4) + (Number(fat) * 4);

    return Food
      .create({
        name: name,
        kind: kind,
        protein: Number(protein),
        fat: Number(fat),
        carbohydrate: Number(carbohydrate),
        imgUrl: imgUrl,
        calories: calories
      })
      .then((test) => res.status(201).send(test))
      .catch((error) => res.status(400).send(error));
  }
};