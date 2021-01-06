const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = require('./config/router');
const settings = require('./config/settings')
const db = require('./models/index');

const port = process.env.PORT || 3333;

const app = express();
settings(app);
router(app);

db.sequelize.sync().then(() => {
    console.log('DATABASE IS READY!!!');
    // inside our db sync callback, we start the server
    // this is our way of making sure the server is not listening 
    // to requests if we have not made a db connection
    app.listen(port, () => {
      console.log(`App listening on PORT ${port}`);
    });
}).catch(err => {
    console.log('IMA GRESHKA', err);
});

// app.listen(port, () => {
//   console.log(`App listening on PORT ${port}`);
// });

