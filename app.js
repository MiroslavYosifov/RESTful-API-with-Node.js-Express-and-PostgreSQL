const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = require('./config/router');
const settings = require('./config/settings')


const app = express();
settings(app);
router(app);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
});
