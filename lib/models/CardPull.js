const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  card: {
    type: String,
    required: true
  },
  explanation: String
});

module.exports = mongoose.model('CardPull', schema);
