import Component from '../Component.js';
import Header from '../common/Header.js';
// import SignUp from './SignUp.js';
import Login from './Login.js';
import Footer from '../common/Footer.js';


class App extends Component {

  onRender(dom) {
    const header = new Header();
    dom.prepend(header.renderDOM());


    const login = new Login();
    dom.appendChild(login.renderDOM());

    const footer = new Footer();
    dom.appendChild(footer.renderDOM());

  }

  renderHTML() {
    return /*html*/ `
    <div>
    </div>
    `;
  }

}

export default App;
