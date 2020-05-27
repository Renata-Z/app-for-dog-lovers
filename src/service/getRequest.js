export const getFacts = async (amount) => {
  const url = "https://cat-fact.herokuapp.com/";
  const endpoint = `facts/random?animal_type=dog&amount=${amount}`;
  const urlToFetch = `${url}${endpoint}`;
  const response = await fetch(urlToFetch);
  if (response.ok) {
    const jsonresponse = await response.json();
    return jsonresponse;
  }
  throw new Error("Some problems occurred! Please try again later.");
};
