import Component from '../Component.js';
import CardItem from './CardItem.js';

class CardList extends Component {
  onRender(dom) {
    const cardPulls = this.props.cardPulls;

    cardPulls.forEach(cardPull => {
      const props = { cardPull };
      const cardItem = new cardItem(props);
      const cardItemDOM = cardItem.renderDOM();
      dom.appendChild(cardItemDOM);
    });
  }


  renderHTML() {
    return `
      <section class="card-list" id="card-list>
        <ul class="cardpulls" id="cardpulls"></ul>
      </section>
        `;
  }
}

export default CardList;
