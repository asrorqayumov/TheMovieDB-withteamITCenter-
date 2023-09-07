import {
  displayTodayTrendingMovies,
  displayTodayTrendingMoviesweek,
  displayTvSeriesListMoviesTv,
  displayTvSeriesListMoviesTheater,
} from "./pages/home.js";
import { displayPopular,
         FilteredMovies, 
         selectCardsAndGivingIds,
         } from "./pages/popular-movie.js";



import { getPopularMoviesWeek } from "./apis/popularApi.js";
import { getTrendingMoviesToday } from "./apis/homeApi.js";
import { getTrendingMoviesWeek } from "./apis/homeApi.js";
import { getTvSeriesListMoviesTv } from "./apis/homeApi.js";
import { getTvSeriesListMoviesTheater } from "./apis/homeApi.js";
import { getMovieDetails } from "./apis/movieApi.js";
import { displayMoviesDetails } from "./pages/movieImport.js";
import { getMoviesPeoples } from "./apis/movieApi.js";
import { displayMoviesPeople } from "./pages/movieImport.js";
import { getMoviesSocialReview } from "./apis/movieApi.js";
import { displayMoviesSocialReview } from "./pages/movieImport.js";


window.addEventListener('popstate', (e)=>{
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
    FilteredMovies(formHandler,displayPopular,selectCardsAndGivingIds);
    getPopularMoviesWeek()
      .then((data) => {
        displayPopular(data);
      })
      .then((data) => {
        selectCardsAndGivingIds()
      });
  } else if (location.pathname == "/movie.html" ||
  location.pathname == "movie.html" ) {
    getMovieDetails(history.state.id).then((data)=>{
      displayMoviesDetails(data)
      console.log(data);
    });

    getMoviesPeoples().then((data)=>{
      displayMoviesPeople(data)
      console.log(data);
    });

    getMoviesSocialReview().then((data)=>{
      displayMoviesSocialReview(data)
    });
    
  }

});
