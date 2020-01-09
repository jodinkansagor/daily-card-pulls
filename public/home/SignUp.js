import Component from '../Component.js';

class SignUp extends Component {

  onRender(form) {

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(form);
      const user = {
        userName: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password')
      };
      fetch('/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then((user) => {
          fetch('/api/v1/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          });
        });
    });

  }



  renderHTML() {
    return /*html*/ `
 
      <form class = "auth-form standard">
        <p>
          <label for="username">Name</label>
          <input id="username" name="username" required placeholder="Your Name">
                </p>

          <p>
            <label for="email">Email</label>
            <input id="email" type="email" name="email" required placeholder="you@somewhere.com">
                </p>

            <p>
              <label for="password">Password</label>
              <input id="password" type="password" name="password" required>
                </p>

              <p>
                <button>Sign Up</button>
              </p>

            </form>

            `;
  }
}

export default SignUp;
