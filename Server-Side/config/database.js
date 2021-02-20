import mongoose from 'mongoose';
import config from './config.js';

export default () => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};