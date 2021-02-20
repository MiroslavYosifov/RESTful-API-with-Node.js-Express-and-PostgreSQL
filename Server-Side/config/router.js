import routes from '../routes/index.js';

export default (app) => {
    app.use('/api/user', routes.userController);
    app.use('/api/workout', routes.workoutController);
    app.use('/api/food', routes.foodController);
}
