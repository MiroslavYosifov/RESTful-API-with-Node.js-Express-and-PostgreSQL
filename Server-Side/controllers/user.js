// import { User, TokenBlacklist } from '../models.js';
import { User, TokenBlacklist } from '../models/index.js';
import config from '../config/config.js';
import utils from '../utils/index.js'

export default {
  get: {

  },

  post: {
    register: (req, res, next) => {
      const { username, firstName, lastName, email, password } = req.body;
      console.log(username, firstName, lastName, email, password);
      //if(password !== rePassword) { console.log('password must be equael'); return; }

      User.create({ username, firstName, lastName, email, password })
        .then((createdUser) => res.send(createdUser))
        .catch(next)
    },
    
    login: (req, res, next) => {

      const { username, password } = req.body;

      User.findOne({ username })
        .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, null])
        .then(([user, match]) => {
          if (!match) {
            res.status(401).send('Invalid username or password');
            return;
          }
          const token = utils.jsonwebtoken.createToken({ id: user._id });
          // for development
          //res.cookie(config.authCookieName, token).send({ username: user.username, token: token });
          console.log(user);
          // for production
          res.cookie(config.authCookieName, token, { 
            sameSite: 'None', 
            secure: true,  
            httpOnly: true
           }).send({ username: user.username, token: `x-auth-token=${token}` });
         
        })
        .catch(next);
    },

    logout: (req, res, next) => {

      const { token } = req.body;

      console.log('-'.repeat(100));
      console.log(token);
      console.log('-'.repeat(100));

      TokenBlacklist.create({ token })
        .then(() => {
          res.clearCookie(config.authCookieName).send('Logout successfully!');
        })
        .catch(next);
    },


  },

  put: {
  
  },

  delete: (req, res, next) => {
    // const id = req.params.id;
    // models.User.deleteOne({ _id: id })
    //   .then((removedUser) => res.send(removedUser))
    //   .catch(next)
  }
};
