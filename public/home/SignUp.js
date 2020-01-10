import Component from '../Component.js';

class SignUp extends Component {

  onRender(form) {

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(form);
      const user = {
        username: formData.get('username'),
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
          if (user._id) {
            window.location.assign('/cardpulls.html');
          } else {
            const error = document.createElement('div');
            error.innerHTML = '<p>User does not exist</p>';
            form.appendChild(error);
            if (form.children.length > 2) form.removeChild(form.lastChild);
          }
        });

    });

  }



  renderHTML() {
    return /*html*/ `
      <div class ="signup">
      <form class = "auth-form standard" id="form">
        <h4>Create an account</h4>
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

        <div>
          <button>Sign Up</button>
        </div>

      </form>
    </div>
            `;
  }
}

export default SignUp;
