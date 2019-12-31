const { Router } = require('express');
const CardPull = require('../models/CardPull');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()

  .post('/', ensureAuth, (req, res, next) => {
    CardPull
      .create(req.body)
      .then(cardPull => res.send(cardPull))
      .catch(next);
  })

  .get('/:id', ensureAuth, (req, res, next) => {
    CardPull
      .findById(req.params.id)
      .then(cardPull => {
        res.send(cardPull);
      })

      .catch(next);
  })

  .get('/', ensureAuth, (req, res, next) => {
    const { page = 1, perPage = 20 } = req.query;
    if(req.query.category) {
      CardPull
        .find({ 'category': req.query.category })
        .limit(Number(perPage))
        .skip((Number(page) - 1) * Number(perPage))
        .then(cardPulls => res.send(cardPulls))
        .catch(next);
    } else {
      CardPull
        .find()
        .limit(Number(perPage))
        .skip((Number(page) - 1) * Number(perPage))
        .then(cardPulls => res.send(cardPulls))
        .catch(next);
    }
  })

  .patch('/:id', ensureAuth, (req, res, next) => {
    CardPull
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(cardPull => res.send(cardPull))
      .catch(next);
  })

  .delete('/:id', ensureAuth, (req, res, next) => {
    CardPull
      .findByIdAndDelete(req.params.id)
      .then(cardPull => res.send(cardPull))
      .catch(next);
  });
