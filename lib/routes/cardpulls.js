const { Router } = require('express');
const CardPull = require('../models/CardPull');

module.exports = Router()

  .post('/', (req, res, next) => {
    CardPull
      .create(req.body)
      .then(cardPull => res.send(cardPull))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    CardPull
      .findById(req.params.id)
      .then(cardPull => {
        res.send(cardPull);
      })

      .catch(next);
  })
