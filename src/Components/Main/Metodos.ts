export const getAllAnimes = `
    fetch('https://fakestoreapi.com/animes')
      .then(res => res.json()) 
      .then(json => console.log(json))
      .catch(error => console.error('Error:', error));
    `;