module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'GET');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if('OPTIONS' === req.method) {
    res.send(204);
  } else {
    next();
  }
};
