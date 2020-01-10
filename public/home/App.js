import Component from '../Component.js';
import Header from '../common/Header.js';
import Login from './Login.js';
import Footer from '../common/Footer.js';
import SignUp from './SignUp.js';



class App extends Component {

  onRender(dom) {

    const header = new Header();
    dom.prepend(header.renderDOM());


    function verifyLogin() {
      fetch('/api/v1/auth/verify', {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(user => {
          if (user.id) {
            window.location.assign('/cardpulls.html');
          } else {

            const login = new Login();
            const loginElement = login.renderDOM();
            dom.appendChild(loginElement);
            // const footer = new Footer();
            // dom.appendChild(footer.renderDOM());
            const signUpButton = dom.querySelector('button');

            signUpButton.addEventListener('click', () => {
              const signUp = new SignUp();
              loginElement.style.display = 'none';
              dom.appendChild(signUp.renderDOM());
              signUpButton.style.display = 'none';
            });
          }
        });
    }

    verifyLogin();


  }


  renderHTML() {
    return /*html*/ `
    <div>
      <section class=switch>
        <button id="switch">I need to create an account.</button>
      </section>
    </div>
    `;
  }

}

export default App;
