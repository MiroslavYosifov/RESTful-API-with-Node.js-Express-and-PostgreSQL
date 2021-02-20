// const dotenv = require('dotenv');
// dotenv.config();

import config from './config/config.js';
import dbConnection from './config/database.js';
import express from  'express';
import setting from './config/settings.js';
import routes from './config/router.js';

const app = express();

dbConnection().then(() => {

    setting(app);
    routes(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });

    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);