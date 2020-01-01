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
  deck: String,
  category: {
    type: [String],
    enum: ['Love', 'Work', 'Home', 'Friends', 'Activities', 'None']
  },
  explanation: String
});

module.exports = mongoose.model('CardPull', schema);
