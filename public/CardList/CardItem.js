import Component from '../Component.js';

class CardItem extends Component {
  renderHTML() {
    const cardPull = this.props.cardPull;

    let cardPullCategory = cardPull.category.reduce((acc, curr) => {
      return acc += `<span>${curr} </span>`;
    }, '');
    console.log(cardPull);
    
    let cardPullDate = new Date(cardPull.date).toISOString().split('T')[0];

    return /*html*/ `
      <li class = "card-item" id = "card-item">
        <h2>Date Pulled: ${cardPullDate}</h2>
        <h2>Card: ${cardPull.card}</h2>
        <h2>Deck: ${cardPull.deck}</h2>
        <p>${cardPullCategory.toUpperCase()}</p>
        <p>${cardPull.explanation}</p>
      </li>
    `;
  }
}

export default CardItem;
