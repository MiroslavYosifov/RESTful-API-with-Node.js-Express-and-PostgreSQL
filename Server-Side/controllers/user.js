
const jwt = require('../utils/jwt');
const config = require('../config/config');
const User = require('../models').User;
const TokenBlackList = require('../models').TokenBlackList;

module.exports = {
  list(req, res) {
    return User
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },
  add(req, res) {
    return User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        comments: req.body.comments
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },
  login(req, res) {

    console.log(req.body);
    const { firstName, password } = req.body.orderData;
  
    return User
      .findOne({
        where: {
          firstName: firstName,
        }
      }).then((user) => {
        user.validPassword(password).then((isValid) => {
          if(!isValid) {
            console.log('Inavlid username or password');
            res.status(401).send('Invalid username or password');
            return;
          }

          const token = jwt.createToken({ id: user._id });
          res.cookie(config.development.authCookieName, token).send( { user: user, token: token});
        })
       
      }
    ).catch((error) => { res.status(400).send(error); });
  },
  logout(req, res) {
    const token = req.cookies[config.development.authCookieName];
    TokenBlackList
      .create({ token: token })
      .then(() => {
        res.clearCookie(config.development.authCookieName).send('Logout successfully!');
      }).catch((error) => { res.status(400).send(error); });
  }
};
