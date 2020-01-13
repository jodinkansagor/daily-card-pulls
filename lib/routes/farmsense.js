const request = require('superagent');

module.exports = {

  async get(req) {
    const { date } = req.body;

    const URL = `http://api.farmsense.net/v1/moonphases/?d=${date}`;

    const response = await request.get(URL);

    const actualResponse = JSON.parse(response.text);

    const moonData = actualResponse.Phase;

    console.log(moonData);
    console.log(req.body);
    return moonData;
  }
};


