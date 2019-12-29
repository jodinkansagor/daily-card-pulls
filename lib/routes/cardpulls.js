const { Router } = require('express');
const CardPull = require('../models/CardPull');
const ensureAuth = require('../middleware/ensure-auth');
const corsMiddleware = require('../middleware/corsmiddleware');

module.exports = Router()

  .post('/', corsMiddleware, ensureAuth, (req, res, next) => {
    CardPull
      .create(req.body)
      .then(cardPull => res.send(cardPull))
      .catch(next);
  })

  .get('/:id', corsMiddleware, ensureAuth, (req, res, next) => {
    CardPull
      .findById(req.params.id)
      .then(cardPull => {
        res.send(cardPull);
      })

      .catch(next);
  })

  .get('/', corsMiddleware, ensureAuth, (req, res, next) => {
    CardPull
      .find()
      .then(cardPulls => res.send(cardPulls))
      .catch(next);
  })

  .patch('/:id',  corsMiddleware, ensureAuth, (req, res, next) => {
    CardPull
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(cardPull => res.send(cardPull))
      .catch(next);
  })

  .delete('/:id', corsMiddleware, ensureAuth, (req, res, next) => {
    CardPull
      .findByIdAndDelete(req.params.id)
      .then(cardPull => res.send(cardPull))
      .catch(next);
  });
