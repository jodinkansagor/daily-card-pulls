const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(__dirname + '/../public'));
// app.use(cors({ credentials: true, origin: 'http://localhost:8080c' }));
// app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(require('cookie-parser')());

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/cardpulls', require('./routes/cardpulls'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
