import Component from '../Component.js';

class Filter extends Component {
  onRender(form) {
    const cardPullFilterInput = form.querySelectorAll('select[name=category]');
    
    function updateControls() {
      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);
      const category = searchParams.get('category');
      console.log(category);
      if (category) {
        cardPullFilterInput.forEach(filterOption => {
          filterOption.selected === filterOption.value;
          console.log(filterOption.value);
        });
      }
    }

    window.addEventListener('hashchange', () => {
      updateControls();
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(form);
      const queryString = window.location.hash.slice(1);

      const searchParams = new URLSearchParams(queryString);
      searchParams.set('category', formData.get('category'));

      window.location.hash = searchParams.toString();
      // window.location.reload();
    });
  }

  renderHTML() {
    return /*html*/ `
      <form class = "filter">
        <label>Choose a category:
          <select class = "category" name = "category">
            <option value="">All</option>
            <option value="love">Love</option>
            <option value="work">Work</option>
            <option value="home">Home</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="activities">Activites</option>
        </select>
        <section class = "button">
          <button>Get Card Pulls</button>
        </section>
      </form>
    `;
  }
}

export default Filter;
