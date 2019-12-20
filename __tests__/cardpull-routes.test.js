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

});
