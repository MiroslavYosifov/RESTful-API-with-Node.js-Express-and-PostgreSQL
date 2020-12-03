const routes = require('../routes/index');

module.exports = (app) => {
    app.use('/api/classroom', routes.classroom);
    app.use('/api/course', routes.course);
    app.use('/api/lecturer', routes.lecturer);
    app.use('/api/student', routes.student);
}
