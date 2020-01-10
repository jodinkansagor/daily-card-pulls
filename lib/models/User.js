const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.passwordHash;
    }
  }
});

schema.virtual('cardPulls', {
  ref: 'CardPull',
  localField: '_id',
  foreignField: 'user'
});

schema.virtual('password').set(function(password) {
  this.passwordHash = bcrypt.hashSync(password, 14);
});

schema.statics.findByToken = function(token) {
  try {
    const tokenPayload = jwt.verify(token, process.env.APP_SECRET);
    return Promise.resolve(this.hydrate({
      id: tokenPayload._id,
      email: tokenPayload.email,
      __v: tokenPayload.__v
    }));
  } catch(err) {
    return Promise.reject(err);
  }
};

schema.statics.authenticate = async function({ email, password }) {
  const user = await this.findOne({ email });
  if(!user) {
    const err = new Error('Invalid Email/Password');
    err.status = 401;
    throw err;
  }

  const validPassword = bcrypt.compareSync(password, user.passwordHash);
  if(!validPassword) {
    const err = new Error('Invalid Email/Password');
    err.status = 401;
    throw err;
  }

  return user;
};

schema.methods.authToken = function() {
  return jwt.sign(this.toJSON(), process.env.APP_SECRET, {
    expiresIn: '24h'
  });
};

module.exports = mongoose.model('User', schema);
