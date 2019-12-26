const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(cors());
app.use(require('cookie-parser')());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/cardpulls', require('./routes/cardpulls'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
