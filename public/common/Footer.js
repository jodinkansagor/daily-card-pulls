import Component from '../Component.js';

class Footer extends Component {
  renderHTML() {
    return /*html*/ `
      <div class = "footer">
        <h3>&copy 2019 Coffee + Cards PDX</h3>
      </div>
    `;
  }
}

export default Footer;
