import Component from '../Component.js';

class CardInput extends Component {

  onRender(form) {

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(event.target);

      const cardPull = {
        date: formData.get('date'),
        card: formData.get('card'), deck: formData.get('deck'),
        category: formData.get('category'),
        explanation: formData.get('explanation')
      };
      fetch('/api/v1/cardpulls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardPull)
      })
        .then(res => res.json())
        .then(() => {
          window.location.assign('/cardpulls.html');
        });
    });

  }

  renderHTML() {
    return /*html*/ `
    <form class = "post-card">
      <h2>What did you pull today?</h2>
    <p>
          <button>Submit</button>
      </p>
      <p>
        <label for="date">Date</label>
        <input id="date" type="date" name="date" required>
      </p>
                
      <p>
          <label for="card">Card</label>
          <input id="card" type="text" name="card" required>
      </p>

      <p>
          <label for="deck">Deck</label>
          <input id="deck" type="text" name="deck" required>
      </p>

      <p> 
        <input type="checkbox" name="category" value="love">Love
        <input type="checkbox" name="category" value="work">work 
        <input type="checkbox" name="category" value="home">Home
        <input type="checkbox" name="category" value="family">family<input type="checkbox" name="category" value="friends">friends
        <input type="checkbox" name="category" value="activities">Activities 
      </p> 
      <p>
          <label for="explanation">Explanation</label>
          <input id="explanation" type="text" rows=6 name="explanation" required>
      </p>
            </form>
    `;
  }
}

export default CardInput;
