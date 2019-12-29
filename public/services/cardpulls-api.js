
const URL = 'http://localhost:27017/card-pulls';

export async function getcardPulls() {
  let queryString = window.location.hash.slice(1);
  const url = `${URL}`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  return data;
}

// const URL = 'http://coffee-plus-cards.herokuapp.com/api/v1/cardpulls';
