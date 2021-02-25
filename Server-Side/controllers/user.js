
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
  registration(req, res) {
    const { username, firstName, lastName, email, password } = req.body;
    return User
      .create({ username, firstName, lastName, email, password})
      .then((user) => {
        user.validPassword(password).then((isValid) => {
          if(!isValid) {
            console.log('Invalid username or password');
            res.status(401).send('Invalid username or password');
            return;
          }
          const token = jwt.createToken({ id: user._id });
          console.log(user.dataValues);
          res.cookie(config.development.authCookieName, token, { sameSite: 'None', secure: true,  httpOnly: true })
          .send({ user: user.dataValues, token: `x-auth-token=${token}` });
        }).catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  login(req, res) {
    const { username, password } = req.body;
    return User
      .findOne({
        where: {
          username: username,
        }
      })
      .then((user) => {
        user.validPassword(password).then((isValid) => {
          if(!isValid) {
            console.log('Inavlid username or password');
            res.status(401).send('Invalid username or password');
            return;
          }
          const token = jwt.createToken({ id: user._id });
          // for development
          //res.cookie(config.authCookieName, token).send({ username: user.username, token: token });

          // for production
          res.cookie(config.development.authCookieName, token, { sameSite: 'None', secure: true,  httpOnly: true })
          .send( { user: user.dataValues, token: `x-auth-token=${token}` });
        })
      }
    ).catch((error) => { res.status(400).send(error); });
  },
  logout(req, res) {
    const token = req.cookies[config.development.authCookieName];
    TokenBlackList
      .create({ token: token })
      .then(() => {
        res.clearCookie(config.development.authCookieName).send({ success: 'Logout successfully!'});
      }).catch((error) => { res.status(400).send(error); });
  }
};