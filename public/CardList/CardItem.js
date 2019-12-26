import Compnent from '../Component.js';

class CardItem extends Compnent {
  renderHTML() {
    const cardpull = this.props.cardpull;
    return /*html*/ `
      <li class = "card-item" id = "card-item">
        <h2>Date Pulled: ${cardpull.date}</h2>
        <h2>Card: ${cardpull.card}</h2>
        <h2>Deck: ${cardpull.deck}</h2>
        <p>${cardpull.explanation}</p>
    `;
  }

}

export default CardItem;
