import {
  displayTodayTrendingMovies,
  displayTodayTrendingMoviesweek,
  displayTvSeriesListMoviesTv,
  displayTvSeriesListMoviesTheater,
} from "./pages/home.js";
import {
  displayPopular,
  FilteredMovies,
  selectCardsAndGivingIds,
} from "./pages/popular-movie.js";



import { getPopularMoviesWeek } from "./apis/popularApi.js";
import { getTrendingMoviesToday } from "./apis/homeApi.js";
import { getTrendingMoviesWeek } from "./apis/homeApi.js";
import { getTvSeriesListMoviesTv } from "./apis/homeApi.js";
import { getTvSeriesListMoviesTheater } from "./apis/homeApi.js";
import { getMovieDetails } from "./apis/movieApi.js";

import { getPopularPeople } from "./apis/popularPeopleApi.js";
import { displayPopularPeople } from "./pages/popularPeople.js";

window.addEventListener('popstate', (e) => {
  location.reload()
})

document.addEventListener("DOMContentLoaded", async (e) => {

  if (location.pathname == "/index.html" || location.pathname == "/") {
    Promise.all([
      getTrendingMoviesToday(),
      getTrendingMoviesWeek(),
      getTvSeriesListMoviesTv(),
      getTvSeriesListMoviesTheater(),
    ]).then((data) => {
      displayTodayTrendingMovies(data[0]);
      displayTodayTrendingMoviesweek(data[1]);
      displayTvSeriesListMoviesTv(data[2]);
      displayTvSeriesListMoviesTheater(data[3]);
      let cards = document.querySelectorAll(".card__img__poster");
      cards.forEach((card) => {
        card.addEventListener("click", (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, "movie.html");
          location.reload();
        });
      });
    });
  } else if (
    location.pathname == "/popularMovie.html" ||
    location.pathname == "popularMovie.html"
  ) {
    let formHandler = document.querySelector(".form__search");
    FilteredMovies(formHandler, displayPopular, selectCardsAndGivingIds);
    getPopularMoviesWeek()
      .then((data) => {
        displayPopular(data);
      })
      .then((data) => {
        selectCardsAndGivingIds()
      });
  } else if (location.pathname == "/movie.html") {
    // ...

  } else if (location.pathname == "/popularPeople.html" ||
    location.pathname == "/popularPeople.html") {
   getPopularPeople().then((data)=>{
    displayPopularPeople(data)
    console.log(data);
   })

  }

});
