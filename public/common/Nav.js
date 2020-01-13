import Component from '../Component.js';

class Nav extends Component {
  onRender(dom) {
    const button = dom.querySelector('button');
    button.addEventListener('click', () => {
      fetch('http://localhost:7890/api/v1/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }

      })
        .then(() => window.location.assign('/'));
    });
  }

  renderHTML() {
    return /*html*/ `
      <div class = "nav">
        <a href = "../cardinput.html" class ="nav">Post New Card</a>
        <a href = "../cardpulls.html" class="nav">See Card Pulls</a>
        <button class='logout'>Logout</button>
      </div>
    `;
  }
}

export default Nav;
