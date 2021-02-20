import jwt from './jwt.js';
import config from '../config/config.js';
import {User, TokenBlacklist} from '../models/index.js';

export default (redirectAuthenticated = true) => {

    return function (req, res, next) {
        const token = req.cookies[config.authCookieName] || '';
        console.log('i am here');
        Promise.all([
            jwt.verifyToken(token),
            TokenBlacklist.findOne({ token })
        ])
            .then(([data, blacklistToken]) => {
                if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                User.findById(data.id)
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