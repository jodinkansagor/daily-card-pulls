const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    User
      .create(req.body)
      .then(user => {
        res.cookie('session', user.authToken(), { maxAge: 86400000 });
        res.send(user);
      })
      .catch(next);
  })

  .post('/login', (req, res, next) => {
    User
      .authenticate(req.body)
      
      .then(user => {
        res.cookie('session', user.authToken(), { maxAge: 86400000 });
        res.send(user);
      })
      .catch(next);
  });
  
