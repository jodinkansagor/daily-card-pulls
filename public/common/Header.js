import Component from '../Component.js';

class Header extends Component {
  renderHTML() {
    return /*html*/`
      <header>
        <div class = "header-contents">
          <h1>COFFEE + CARDS PDX</h1>
          <h2>Daily Card Pulls</h2>
          <hr>
        </div>
      </header>
    `;
  }
}

export default Header;
