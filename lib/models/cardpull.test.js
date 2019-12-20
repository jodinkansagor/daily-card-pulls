const CardPull = require('../models/CardPull');

describe('Card pull model', () => {
  it('has a required date', () => {
    const cardPull = CardPull({});

    const { errors } = cardPull.validateSync();
    expect(errors.date.message).toEqual('Path `date` is required.');
  });
});
