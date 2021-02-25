const Food = require('../models').Food;

const validations = (function () {

  function isExist(props) {
    return props.every(input => input === "" || input === null || input === undefined ? false : true);
  }

  return {
    isExist
  }
})();


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

    if(!validations.isExist([name, kind, protein, fat, carbohydrate, imgUrl, price])) {
      console.log('DATA IS NOT VALLID');
      return res.status(400).send({
        message: 'DATA IS NOT VALLID',
      });
    };

    return Food
      .create({
        name: name,
        kind: kind,
        protein: Number(protein),
        fat: Number(fat),
        carbohydrate: Number(carbohydrate),
        imgUrl: imgUrl,
        calories: Number(calories),
        price: Number(price),
        availability: availability
      })
      .then((test) => res.status(201).send(test))
      .catch((error) => {
        res.status(400).send(error);
      })
  },
  updateOne(req, res) {
    //console.log('I AM HERE', req.body);
    const { name, kind, protein, fat, carbohydrate, imgUrl, id } = req.body;
    const calories = (Number(protein) * 4) + (Number(carbohydrate) * 4) + (Number(fat) * 4);

    if(!validations.isExist([name, kind, protein, fat, carbohydrate, imgUrl, price])) {
      console.log('DATA IS NOT VALLID');
      return res.status(400).send({
        message: 'DATA IS NOT VALLID',
      });
    };

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
  pagination(req, res) {

    const { page } = req.body;
    const skip = Number(page) > 0 ? (Number(page) - 1) * 14 : 1;
    console.log(skip);
    return Food
      .findAll({
        offset: skip, limit: 14
      })
      .then((food) => {
        res.status(200).send(food)
      })
      .catch((error) => { res.status(400).send(error); });
  }
};