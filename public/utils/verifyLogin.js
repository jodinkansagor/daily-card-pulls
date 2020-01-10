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

export default verifyLogin;

