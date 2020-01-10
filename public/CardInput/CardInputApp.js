import Component from '../Component.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';
import CardInput from './CardInput.js';
import Nav from '../common/Nav.js';

class CardInputApp extends Component {

  onRender(dom) {
    const header = new Header();
    dom.prepend(header.renderDOM());

    const nav = new Nav();
    dom.appendChild(nav.renderDOM());

    const cardInput = new CardInput();
    dom.appendChild(cardInput.renderDOM());

    const footer = new Footer();
    dom.appendChild(footer.renderDOM());

  }

  renderHTML() {
    return /*html*/`
      <div>
      </div>
      `;
  }
}

export default CardInputApp;
