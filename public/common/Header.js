import Component from '../Component.js';

class Header extends Component {
  renderHTML() {
    return /*html*/`
      <header>
        <div class = "header-contents">
          <div class="name">
            <h1>COFFEE + CARDS PDX</h1>
          </div>
          <div class="subtitle">
            <h2>Daily Card Pulls</h2>
          </div>
        </div>
      
        
      </header>
    `;
  }
}

export default Header;
