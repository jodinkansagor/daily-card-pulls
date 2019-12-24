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
    type: String,
    enum: ['love', 'work', 'home', 'family', 'friends', 'activities']
  },
  explanation: String
});

module.exports = mongoose.model('CardPull', schema);
