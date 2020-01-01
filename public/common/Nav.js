import Component from '../Component.js';

class Nav extends Component {
  renderHTML() {
    return /*html*/ `
      <div class = "nav">
        <a href = "../cardinput.html" class ="nav">Post New Card</a>
        <a href = "../cardpulls.html" class="nav">See Card Pulls</a>
      </div>
    `;
  }
}

export default Nav;
