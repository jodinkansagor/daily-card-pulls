require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

const CardPull = require('../lib/models/CardPull');


describe('crud routes', () => {

  beforeAll(() => {
    connect();
  });


  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let date;
  let cardPull;
  beforeEach(async () => {
    date = new Date();
    cardPull = await CardPull.create({
      date,
      card: 'The Empress',
      explanation: 'She has the power'
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a new cardpull', () => {
    const date = new Date();
    return request(app)
      .post('/api/v1/cardpulls')
      .send({
        date,
        card: 'The Empress',
        explanation: 'She got power'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          date: date.toISOString(),
          card: 'The Empress',
          explanation: 'She got power',
          __v: 0
        });
      });
  });

  it('can get one card', () => {
    return request(app)
      .get(`/api/v1/cardpulls/${cardPull._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: cardPull.id,
          date: date.toISOString(),
          card: 'The Empress',
          explanation: 'She has the power',
          __v: 0
        });
      });
  });

  it('can get all cards', () => {
    return request(app)
      .get('/api/v1/cardpulls/')
      .then(res => {
        expect(res.body).toEqual([{
          _id: cardPull.id,
          date: date.toISOString(),
          card: 'The Empress',
          explanation: 'She has the power',
          __v: 0
        }]);
      });
  });


  it('can update a card by id', () => {
    return request(app)
      .patch(`/api/v1/cardpulls/${cardPull.id}`)
      .send({ explanation: 'She still has the power.' })
      .then(res => {
        expect(res.body).toEqual({
          _id: cardPull.id,
          date: date.toISOString(),
          card: 'The Empress',
          explanation: 'She still has the power',
          __v: 0
        });
      });
  });

});
