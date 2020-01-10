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
        .then((user) => {
          if (user._id) {
            window.location.assign('/cardpulls.html');
          } else {
            const error = document.createElement('div');
            error.innerHTML = '<p>User does not exist</p>';
            form.appendChild(error);
            if(form.children.length > 2) form.removeChild(form.lastChild);
          }
        });
    });

  }

  renderHTML() {
    return /*html*/`
          <div class = "login">
          
            <form class="auth-form standard" id = "form">
                
                <h4>Log In</h4>
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
                    <button>Log In</button>
                </div>
            </form>
          </div>
        `;
  }

}

export default Login;
