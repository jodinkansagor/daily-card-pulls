
const URL = 'https://coffeepluscardspdx.herokuapp.com/api/v1/cardpulls';

export async function getcardPulls() {
  let queryString = window.location.hash.slice(1);
  const url = `${URL}?${queryString}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


