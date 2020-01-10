const CardPull = require('../models/CardPull');

describe('Card pull model', () => {
  it('has a required date', () => {
    const cardPull = new CardPull({});

    const { errors } = cardPull.validateSync();
    expect(errors.date.message).toEqual('Path `date` is required.');
  });

  it('has a required card', () => {
    const cardPull = new CardPull({});

    const { errors } = cardPull.validateSync();
    expect(errors.card.message).toEqual('Path `card` is required.');
  });

});
