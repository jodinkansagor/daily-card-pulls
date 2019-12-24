import Component from '../Component';
import Header from '../common/Header';

class CardListApp extends Component {


  onRender(dom) {
    const header = new Header();
    dom.prepend(header.renderDOM());
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
