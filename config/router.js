const routes = require('../routes/index');

module.exports = (app) => {
    app.use('/api/user', routes.user);
}
