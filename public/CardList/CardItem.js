import Component from '../Component.js';

class CardItem extends Component {

  onRender(dom) {
    const cardPull = this.props.cardPull;
    const deleteButton = dom.querySelector('button[id="delete"]');

    deleteButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete?')) {
        fetch(`api/v1/cardPulls/${cardPull._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cardPull)
        })
          .then(res => res.json())
          .then(() => {
            window.location.reload();
          });
      } else {
        window.location.reload();
      }
    });
  }
  renderHTML() {
    const cardPull = this.props.cardPull;

    let cardPullCategory = cardPull.category.reduce((acc, curr) => {
      return acc += `<span>${curr} </span>`;
    }, '');
    
    let cardPullDate = new Date(cardPull.date).toString().slice(0, 15);

    return /*html*/ `
      <li class = "card-item" id = "card-item">
        <h2><u>Date pulled:</u> ${cardPullDate}</h2>
        <h2><u>Card:</u> ${cardPull.card}</h2>
        <h2><u>Deck:</u> ${cardPull.deck}</h2>
        <p>${cardPullCategory.toUpperCase()}</p>
        <p class="explanation">${cardPull.explanation}</p>
        <div class="buttons">
          <button id="delete">Delete</button>
        </div>
      </li>
    `;
  }
}

export default CardItem;
