import Component from '../Component.js';
import Header from '../common/Header.js';

class App extends Component {

  onRender(dom) {
    const header = new Header();
    dom.prepend(header.renderDOM());

  }

  renderHTML() {
    return /*html*/ `
    <div>
      <main>
      </main>
    </div>
    `;
  }

}

export default App;
