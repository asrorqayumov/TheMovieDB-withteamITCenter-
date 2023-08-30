import config from "../tools/config.js";

export function displayMoviesPeople(getMovieRequestPeople) {
  let cardsWrapper = document.querySelector("");
  let html = "";
  getMovieRequestPeople.forEach((movie) => {
    let { original_title, release_date, vote_average, backdrop_path, id } =
      movie;
    let vote = Math.round(vote_average * 10);
    html += `
     
      `;
  });
  cardsWrapper.innerHTML = html;


}



export  async function displayMoviesPeople(getMovieRequestPeople) {
    let cardsWrapper = document.querySelector("");
    let html = "";
    getMovieRequestPeople.forEach((movie) => {
      let { original_title, release_date, vote_average, backdrop_path, id } =
        movie;
      let vote = Math.round(vote_average * 10);
      html += `
       
        `;
    });
    cardsWrapper.innerHTML = html;
  
  
  }