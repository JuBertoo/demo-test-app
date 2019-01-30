const User = require('../models').User;

module.exports = {
  index: (req, res, next) => {
    User.findAll()
      .then((users) => res.json({ users }))
      .catch((err) => console.log(err))
  },
  show: (req, res, next) => {
    User.findByPk(req.params.id)
      .then((user) => res.json({ user }))
      .catch((err) => console.log(err))
  },
  create: (req, res, next) => {
    User.create({
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    })
      .then((user) => res.json({ user }))
      .catch((err) => console.log(err))
  },
  edit: (req, res, next) => {
    User.findByPk(req.params.id)
      .then((user) => {
        user.update({
          email: req.body.email,
          password: req.body.password,
          age: req.body.age,
        })
          .then((user) => res.json({ user }))
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  },
  delete: (req, res, next) => {
    User.findByPk(req.params.id)
      .then((user) => {
        user.destroy()
          .then((user) => res.json({ user }))
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  },
}