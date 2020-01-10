require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const User = require('../lib/models/User');
const CardPull = require('../lib/models/CardPull');


describe('crud routes', () => {

  beforeAll(() => {
    connect();
  });


  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  const agent = request.agent(app);

  let date;
  let cardPull;
  beforeEach(async () => {
    user = {
      username: 'jbj',
      email: 'jbj@jbj.com',
      password: 'password'
    };

    const res = await agent
      .post('/api/v1/auth/signup')
      .send(user);
    date = new Date();
    cardPull = await CardPull.create({
      date,
      card: 'The Empress',
      explanation: 'She has the power.',
      user: res.body._id
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a new cardpull', async () => {


    const date = new Date();
    return agent
      .post('/api/v1/cardpulls')
      .send({
        date,
        card: 'The Empress',
        explanation: 'She got power.',
        deck: 'Collective Tarot',
        category: []
      })
      .then(res => {
        console.log(res.body, 'RES!!!!')
        expect(res.body).toEqual({
          _id: expect.any(String),
          date: date.toISOString(),
          card: 'The Empress',
          explanation: 'She got power.',
          deck: 'Collective Tarot',
          category: [],
          __v: 0,
          user: expect.any(String)
        });
      });

  });

  it('can get one card', async () => {
    const agent = request.agent(app);

    await agent
      .post('/api/v1/auth/signup')
      .send({ email: 'jbj@jbj.com', username: 'jbj', password: 'password' });

    return agent
      .get(`/api/v1/cardpulls/${cardPull._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: cardPull.id,
          date: date.toISOString(),
          card: 'The Empress',
          explanation: 'She has the power.',
          category: [],
          __v: 0,
          user: expect.any(String)
        });
      });
  });

  it('can get all cards', async () => {
    // const agent = request.agent(app);

    // await agent
    //   .post('/api/v1/auth/signup')
    //   .send({ email: 'jbj@jbj.com', username: 'jbj', password: 'password' });

    return agent
      .get('/api/v1/cardpulls/')
      .then(res => {
        expect(res.body).toEqual([{
          _id: cardPull.id,
          date: date.toISOString(),
          card: 'The Empress',
          explanation: 'She has the power.',
          category: [],
          user: expect.any(String),
          __v: 0
        }]);
      });
  });


  it('can update a card by id', async () => {
    const agent = request.agent(app);

    await agent
      .post('/api/v1/auth/signup')
      .send({ email: 'jbj@jbj.com', username: 'jbj', password: 'password' });
    return agent
      .patch(`/api/v1/cardpulls/${cardPull.id}`)
      .send({ explanation: 'She still has the power.' })
      .then(res => {
        expect(res.body).toEqual({
          _id: cardPull.id,
          date: date.toISOString(),
          card: 'The Empress',
          explanation: 'She still has the power.',
          category: [],
          user: expect.any(String),
          __v: 0
        });
      });
  });

  it.skip('can delete a card by id', async () => {
    const agent = request.agent(app);

    await agent
      .post('/api/v1/auth/signup')
      .send({ email: 'jbj@jbj.com', username: 'jbj', password: 'password' });
    return agent
      .delete(`/api/v1/cardpulls/${cardPull.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: cardPull.id,
          date: date.toISOString(),
          card: 'The Empress',
          explanation: 'She has the power.',
          user: expect.any(String),
          category: [],
          __v: 0
        });
      });
  });

});
