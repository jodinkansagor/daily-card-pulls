import Component from '../Component.js';

class CardInput extends Component {

  onRender(form) {

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(event.target);

      const cardPull = {
        date: formData.get('date'),
        card: formData.get('card'), deck: formData.get('deck'),
        category: formData.getAll('category'),
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
    <div class = "main">
    <form class = "post-card">
      <section class = "title">
        <h3>What did you pull today?</h2>
        <button>Submit</button>
      </section>
      <section class = "inputs">
        <section class = "textboxes" >
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
        </section>
        <p> 
          <div class = "category">
            <div class="group1">
              <input type="checkbox" name="category" value="Love">Love
              <input type="checkbox" name="category" value="Work">Work 
              <input type="checkbox" name="category" value="Home">Home
            </div>
            <div class="group2">
              <input type="checkbox" name="category" value="Friends">Friends
              <input type="checkbox" name="category" value="Activities">Activities
              <input type="checkbox" name="category" value="None">None 
            </div>
          </div>
        </p> 
        <p>
            <textarea id="explanation" rows=6 cols=40 name="explanation" required> </textarea>
        </p>
      </div>
      </form>
    </div>
    `;
  }
}

export default CardInput;
