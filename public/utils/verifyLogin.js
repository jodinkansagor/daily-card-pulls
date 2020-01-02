function verifyLogin() {
  fetch('/api/v1/auth/verify', {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(user => {
      if(user._id) {
        console.log(user);
        window.location.assign('/cardpulls.html');
      } else {
        displayForm();
      }
    });
}

function displayForm() {
  const h1 = document.createElement('h1');
  h1.textContent = user.username;


}
export default verifyLogin;

