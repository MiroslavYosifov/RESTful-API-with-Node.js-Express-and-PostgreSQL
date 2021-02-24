const jwt = require('./jwt');
const config = require('../config/config');
const TokenBlackList = require('../models').TokenBlackList;
const User = require('../models').User;

module.exports = (redirectAuthenticated = true) => {

    return function (req, res, next) {
        const token = req.cookies[config.development.authCookieName] || '';

        Promise.all([
            jwt.verifyToken(token),
            TokenBlackList.findOne({
                where: {
                  token: token,
                }
            })
        ])
            .then(([data, blacklistToken]) => {
                if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                User.find({
                        where: {
                            id: data.id
                        }
                    })
                    .then((user) => {
                        req.user = user;
                        next();
                    });
            })
            .catch(err => {
                if (!redirectAuthenticated) { next(); return; }
                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    res.status(401).send('UNAUTHORIZED!');
                    return;
                }
                next(err);
            })
    }
};