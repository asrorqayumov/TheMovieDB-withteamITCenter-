import {
  displayTodayTrendingMovies,
  displayTodayTrendingMoviesweek,
  displayTvSeriesListMoviesTv,
  displayTvSeriesListMoviesTheater
} from "./pages/home.js";
import { getTrendingMoviesToday } from "./apis/homeApi.js";
import { getTrendingMoviesWeek } from "./apis/homeApi.js";
import { getTvSeriesListMoviesTv } from "./apis/homeApi.js";
import { getTvSeriesListMoviesTheater } from "./apis/homeApi.js";


// import {
//   displayPopular,
// } from ".pages/popular-movie.js";
// import { getPopularMoviesWeek } from "./apis/popularApi.js";


document.addEventListener("DOMContentLoaded", async (e) => {
  if (location.pathname == "index.html" || location.pathname == "/") {
    let getMovieRequestToday = await getTrendingMoviesToday();
    displayTodayTrendingMovies(getMovieRequestToday).then(() => {
      let cards = document.querySelectorAll('.card__img__poster');
      cards.forEach((card) => {
        card.addEventListener('click', (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, 'movie.html');
          location.reload()
        })
      })
    })

    let getMovieRequestWeek = await getTrendingMoviesWeek();
    displayTodayTrendingMoviesweek(getMovieRequestWeek).then(() => {
      let cards = document.querySelectorAll('.card__img__poster');
      cards.forEach((card) => {
        card.addEventListener('click', (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, 'movie.html');
          location.reload()
        })
      })
    })

    let getMovieRequestOnTv = await getTvSeriesListMoviesTv();
    displayTvSeriesListMoviesTv(getMovieRequestOnTv).then(() => {
      let cards = document.querySelectorAll('.card__img__poster');
      cards.forEach((card) => {
        card.addEventListener('click', (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, 'movie.html');
          location.reload()
        })
      })
    })

    let getMovieRequestTheater = await getTvSeriesListMoviesTheater();
    displayTvSeriesListMoviesTheater(getMovieRequestTheater).then(() => {
      let cards = document.querySelectorAll('.card__img__poster');
      cards.forEach((card) => {
        card.addEventListener('click', (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, 'movie.html');
          location.reload()
        })
      })
    })

  }


  else if (location.pathname == "popularMovie.html") {
    let getMovieRequestPopular = await getPopularMoviesWeek();
    displayPopular(getMovieRequestPopular).then(() => {
      let cards = document.querySelectorAll('.card__img__poster');
      cards.forEach((card) => {
        card.addEventListener('click', (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, 'movie.html');
          location.reload()
        })
      })
    })
  }



  else if (location.pathname == "/movie.html") {
    // ...
    console.log(history.state.id);
  }
});
