import Component from '../Component.js';

class Nav extends Component {
  renderHTML() {
    return /*html*/ `
      <div class = "nav">
        <a href = "../cardinput.html">Post Card</a>
        <a href = "../cardpulls.html">See Card Pulls</a>
      </div>
    `;
  }
}

export default Nav;
