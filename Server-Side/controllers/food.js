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
    const { name, kind, protein, fat, carbohydrate, imgUrl, availability, price } = req.body;
    const calories = (Number(protein) * 4) + (Number(carbohydrate) * 4) + (Number(fat) * 4);
    console.log(req.body);
    return Food
      .create({
        name: name,
        kind: kind,
        protein: Number(protein),
        fat: Number(fat),
        carbohydrate: Number(carbohydrate),
        imgUrl: imgUrl,
        calories: calories,
        availability: availability,
        price: price
      })
      .then((test) => res.status(201).send(test))
      .catch((error) => res.status(400).send(error));
  },
  updateOne(req, res) {
    //console.log('I AM HERE', req.body);
    const { name, kind, protein, fat, carbohydrate, imgUrl, id } = req.body;
    const calories = (Number(protein) * 4) + (Number(carbohydrate) * 4) + (Number(fat) * 4);
    return Food
      .update({
        name: name,
        kind: kind,
        protein: Number(protein),
        fat: Number(fat),
        carbohydrate: Number(carbohydrate),
        imgUrl: imgUrl,
        calories: calories
      }, 
      { where: {id: id} })
      .then((food) => {
        return Food
          .findOne({ where: {id: id} })
          .then((updatedFood) => {
            console.log(updatedFood);
            res.status(201).send(updatedFood);
          })
          .catch((error) => res.status(400).send(error));;
       
      })
      .catch((error) => res.status(400).send(error));;
  },
  deleteOne(req, res) {
    const { id } = req.body;
    return Food
      .findByPk(id)
      .then(food => {
        if (!food) {
          return res.status(400).send({
            message: 'Food Not Found',
          });
        }
        return food
          .destroy()
          .then(() => { 'RABOTI SI', res.status(201).send(req.body)})
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};