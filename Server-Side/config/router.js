const routes = require('../routes/index');

module.exports = (app) => {
    app.use('/api/user', routes.userController);
    app.use('/api/workout', routes.workoutController);
    app.use('/api/food', routes.foodController);
    app.use('/api/food', routes.recipeController);
    app.use('/api/test', routes.testController);
}
