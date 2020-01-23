import Component from '../Component.js';

class Filter extends Component {
  onRender(form) {
    const cardPullFilterInput = form.querySelectorAll('select[name=category]');
    
    function updateControls() {
      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);
      const category = searchParams.get('category');
      if (category) {
        cardPullFilterInput.forEach(filterOption => {
          filterOption.selected === filterOption.value;
         
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
      searchParams.set('startDate', formData.get('startDate'));
      searchParams.set('endDate', formData.get('endDate'));

      window.location.hash = searchParams.toString();
    });
  }

  renderHTML() {
    return /*html*/ `
      <form class = "filter">
        <label>Choose a category:
          <select class = "category" name = "category">
            <option value="">All</option>
            <option value="Love">Love</option>
            <option value="Work">Work</option>
            <option value="Home">Home</option>
            <option value="Friends">Friends</option>
            <option value="Activities">Activities</option>
            <option value="activities">None</option>None
        </select>
        <section class = "date-range">
            <label for="date">Start Date</label>
            <input class="date" type="date" name="startDate" required>
            <label for="date">End Date</label>
            <input class="date" type="date" name="endDate" required>
        </section>
        <section class = "button">
          <button>Get Card Pulls</button>
        </section>
      </form>
    `;
  }
}

export default Filter;
