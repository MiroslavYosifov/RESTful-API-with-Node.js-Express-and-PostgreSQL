import { Food } from '../models/index.js';

export default {
  get: {
    list(req, res, next ) {
      Food.find()
      .then((foods) => {
        res.status(200).send(foods);
      })
      .catch(next);
    },
    pagination(req, res) {

      const { page } = req.body;
      const skip = Number(page) > 0 ? (Number(page) - 1) * 7 : 1;
  
     Food.find()
        .limit(page)
        .skip(skip)
        .then((food) => res.status(200).send(food))
        .catch((error) => { res.status(400).send(error); });
    }
  },
  post: {
    add(req, res, next) {
      const { name, kind, protein, fat, carbohydrate, imgUrl, availability, price } = req.body;
      const calories = (Number(protein) * 4) + (Number(carbohydrate) * 4) + (Number(fat) * 4);
      
      Food.create({
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
    
  },

  put: {
    updateOne(req, res) {
      //console.log('I AM HERE', req.body);
      const { name, kind, protein, fat, carbohydrate, imgUrl, id } = req.body;
      const calories = (Number(protein) * 4) + (Number(carbohydrate) * 4) + (Number(fat) * 4);

      Food.findOneAndUpdate({ name: name }, {
          name: name,
          kind: kind,
          protein: Number(protein),
          fat: Number(fat),
          carbohydrate: Number(carbohydrate),
          imgUrl: imgUrl,
          calories: calories
        })
        .exec( function( err, updatedRecipe ) {
          if(err){ console.log(err); return; }
          res.send(updatedRecipe);
        });
    },
  },

  delete: {
    deleteOne(req, res, next) {
      const { id } = req.body;
      
      Food.findOneAndDelete({ _id: id })
          .then(food => {
            if (!food) {
              return res.status(400).send({
                message: 'Food Not Found',
              });
            }
            res.send(food);
        })
        .catch((error) => res.status(400).send(error));
    },
  }
};