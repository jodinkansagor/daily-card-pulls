import Component from '../Component.js';

class Login extends Component {

  onRender(form) {

    
    form.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(event.target);

      const user = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(() => {
          window.location.assign('/cardpulls.html');
        });
    });
    
  }

  renderHTML() {
    return /*html*/`
          <div class = "login">
            <form class="auth-form standard" id = "form">
                <h4>Sign In</h4>
                <p>
                    <label for="signin-email">Email</label>
                    <input id="signin-email" type="email" name="email" required placeholder="you@somewhere.com">
                </p>
                
                <p>
                    <label for="signin-password">Password</label>
                    <input id="signin-password" type="password" name="password" required
                    placeholder="********">
                </p>

                <div>
                    <button>Sign In</button>
                </div>
            </form>
          </div>
        `;
  }

}

export default Login;
