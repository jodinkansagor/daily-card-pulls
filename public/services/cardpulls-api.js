
const URL = 'http://localhost:27017/card-pulls';

export async function getcardPulls() {
  let queryString = window.location.hash.slice(1);
  const url = `${URL}?${queryString}`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  return data;
}


