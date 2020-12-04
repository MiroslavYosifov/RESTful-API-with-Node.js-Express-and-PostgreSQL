const Course = require('../models').Course;

module.exports = {
  add(req, res) {
    return Course
      .create({
        name: req.body.name,
      })
      .then((course) => res.status(201).send(course))
      .catch((error) => res.status(400).send(error));
  },
};