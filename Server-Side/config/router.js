const routes = require('../routes/index');

module.exports = (app) => {
    app.use('/api/user', routes.user);
    app.use('/api/course', routes.course);
    app.use('/api/workout', routes.workoutExersice);
}
