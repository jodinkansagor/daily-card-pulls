const signUpContainer = dom.querySelector('#signup-container');
          const logInContainer = dom.querySelector('#login-container');

          const login = new Login();
          logInContainer.appendChild(login.renderDOM());
          const signUp = new SignUp();
          signUpContainer.appendChild(signUp.renderDOM());

          const switchToSignUp = dom.querySelector('#signup-button');
          switchToSignUp.addEventListener('click', () => {
            signUpContainer.classList.remove('no-display');
            logInContainer.classList.add('no-display');
          });

          const switchToLogin = dom.querySelector('#login-button');
          switchToLogin.addEventListener('click', () => {
            signUpContainer.classList.add('no-display');
            logInContainer.classList.remove('no-display');
          });

          <div>
          <section class ="no-display" id="signup-container">
            <p class="switch">
              <button id="login-button">Already a user?</button>
            </p>
          </section>
          <section class ="no-display" id="login-container">
            <p class="switch">
              <button class="log-in">Need to create an account?</button>
            </p>
          </section>
        </div>