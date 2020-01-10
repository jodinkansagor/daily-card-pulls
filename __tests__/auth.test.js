require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const User = require('../lib/models/User');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can sign up a user with email and password', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({ username: 'jbj', email: 'jbj@jbj.com', password: 'password' })
      .then(res => {
        expect(res.header['set-cookie'][0]).toEqual(expect.stringContaining('session='));
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'jbj',
          email: 'jbj@jbj.com',
          __v: 0
        });
      });
  });

  it('can login a user', async () => {
    const user = await User.create({ username: 'jbj', email: 'jbj@jbj.com', password: 'mydumbpassword' });
    return request(app)
      .post('/api/v1/auth/login')
      .send({ username: 'jbj', email: 'jbj@jbj.com', password: 'mydumbpassword' })
      .then(res => {
        expect(res.body).toEqual({
          _id: user.id,
          username: 'jbj',
          email: 'jbj@jbj.com',
          __v: 0
        });
      });
  });


  it('fails when a bad email is entered', async () => {
    await User.create({ username: 'jbj', email: 'jbj@jbj.com', password: 'mydumbpassword' });
    return request(app)
      .post('/api/v1/auth/login')
      .send({ username: 'jbj', email: 'notjbj@notjbj.com', password: 'mydumbpassworkd' })
      .then(res => {
        expect(res.status).toEqual(401);
        expect(res.body).toEqual({
          message: 'Invalid Email/Password',
          status: 401
        });
      });
  });

  it('fails when a bad password is entered', async () => {
    await User.create({ username: 'jbj', email: 'jbj@jbj.com', password: 'mydumbpassword' });
    return request(app)
      .post('/api/v1/auth/login')
      .send({ username: 'jbj', email: 'jbj@jbj.com', password: 'mystupidpassword' })
      .then(res => {
        expect(res.status).toEqual(401);
        expect(res.body).toEqual({
          message: 'Invalid Email/Password',
          status: 401
        });
      });
  });


  it('can verify if a user is logged in', async () => {
    const user1 = await User.create({
      username: 'jbj',
      email: 'test@test.com',
      password: 'password'
    });

    const agent = request.agent(app);

    await agent
      .post('/api/v1/auth/login')
      .send({ username: 'jbj', email: 'test@test.com', password: 'password' });

    return agent
      .get('/api/v1/auth/verify')
      .then(res => {
        expect(res.body).toEqual({
          _id: user1.id,
          email: 'test@test.com',
          __v: 0
        });
      });
  });

});
