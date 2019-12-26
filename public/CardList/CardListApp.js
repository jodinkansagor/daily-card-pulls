import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import Loading from '../common/Loading.js';
import { getcardPulls } from '../services/cardpulls-api.js';
import CardList from '../cardlist/CardList.js';

class CardListApp extends Component {


  onRender(dom) {
    const header = new Header();
    dom.prepend(header.renderDOM());

    const main = dom.querySelector('main');
    // const filter = new filter({ cardPulls: [] });
    // main.appendChild(filter.renderDOM());

    const list = new CardList({ cardPulls: [] });
    main.appendChild(list.renderDOM());

    const loading = new Loading({ loading: true });
    dom.appendChild(loading.renderDOM());

    const footer = new Footer();
    dom.appendChild(footer.renderDOM());

    async function loadcardPulls() {
      const cardPulls = await getcardPulls();
      list.update({ cardPulls });
      loading.update({ loading: false });
    }

    loadcardPulls();

    window.addEventListener('hashchange', () => {
      loadcardPulls;
    });

  }

  renderHTML() {
    return /*html*/`
      <div>
        <main></main>
      </div>
      `;
  }
}

export default CardListApp;
