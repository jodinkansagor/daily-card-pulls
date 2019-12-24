const CardPull = require('../models/CardPull');

describe('Card pull model', () => {
  it('has a required date', () => {
    const cardPull = CardPull({});

    const { errors } = cardPull.validateSync();
    expect(errors.date.message).toEqual('Path `date` is required.');
  });

  it('has a required card', () => {
    const cardPull = CardPull({});

    const { errors } = cardPull.validateSync();
    expect(errors.card.message).toEqual('Path `card` is required.');
  });

  it('has a category that is one of our choices', () => {
    const cardPull = new CardPull({ category: 'my life' });

    const { errors } = cardPull.validateSync();
    expect(errors.category.message).toEqual('`my life` is not a valid enum value for path `category`.');
  });
});
