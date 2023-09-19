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

import {
   displayPopularperson_biography,
   displayPopularperson
} from "./pages/person.js";


import { getPopularPersonMovie, getPopularpersonbiography } from "./apis/personApi.js";

import { getPopularMoviesWeek } from "./apis/popularApi.js";
import { getTrendingMoviesToday } from "./apis/homeApi.js";
import { getTrendingMoviesWeek } from "./apis/homeApi.js";
import { getTvSeriesListMoviesTv } from "./apis/homeApi.js";
import { getTvSeriesListMoviesTheater } from "./apis/homeApi.js";
import { favouriteRequest, getMovieDetails } from "./apis/movieApi.js";
import { displayMoviesDetails } from "./pages/movieImport.js";
import { getMoviesPeoples } from "./apis/movieApi.js";
import { displayMoviesPeople } from "./pages/movieImport.js";

import { getMoviesSocialReview } from "./apis/movieApi.js";
import { displayMoviesSocialReview } from "./pages/movieImport.js";

import { getMovieRecommandations } from "./apis/movieApi.js";
import { displayMoviesRecommandation } from "./pages/movieImport.js";
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
          let type = e.target.type
          history.pushState({ id, type }, null, "movie.html");
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

  } else if (location.pathname == "/movie.html" ||
    location.pathname == "movie.html") {
    Promise.all([
      getMovieDetails(history.state.id),
      getMoviesPeoples(history.state.id),
      getMoviesSocialReview(history.state.id),
      getMovieRecommandations(history.state.id),
    ]).then((data) => {
      displayMoviesDetails(data[0]);
      displayMoviesPeople(data[1]);
      displayMoviesSocialReview(data[2]);
      displayMoviesRecommandation(data[3]);
      let peoplecard = document.querySelectorAll(".people_img");
      peoplecard.forEach((card) => {
        card.addEventListener("click", (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, "/person.html");
          location.reload();
        });
      });
      let recommandationcard = document.querySelectorAll(".recommandation_img");
      recommandationcard.forEach((card) => {
        card.addEventListener("click", (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, "/movie.html");
          location.reload();
        });
      });

      let like = document.querySelector(".like");
      console.log(like);
      like.addEventListener("click", () => {
        if (like.value = "click") {
          like.style.color = "Red";
          // like.classList.add('Red')
        }
        else {
          // like.style.color.diplay = "none"
          like.remove('style')
        }

      });

      let bookmark = document.querySelector(".bookmark");
      console.log(bookmark);
      bookmark.addEventListener("click", () => {
        if (bookmark.value = "click") {
          bookmark.style.color = "Black";
          // like.classList.add('Red')
        }
        else {
          // bookmark.style.color.diplay = "none"
          like.remove(style)
        }

      });
    });

  } else if (location.pathname == "/popularPeople.html" ||
    location.pathname == "/popularPeople.html") {
    getPopularPeople().then((data) => {
      displayPopularPeople(data)
      console.log(data);
      let cards = document.querySelectorAll(".people_page");
      cards.forEach((card) => {
        card.addEventListener("click", (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, "/person.html");
          location.reload();
        });
      });
    })

  }


  else if (location.pathname == "/person.html" ||
    location.pathname == "person.html") {
    getPopularpersonbiography(history.state.id).then(data => {
      displayPopularperson_biography(data)

    });
    getPopularPersonMovie(history.state.id).then((data)=>{
      displayPopularperson(data);
      let moviecard = document.querySelectorAll(".img_movie");
      moviecard.forEach((card) => {
        card.addEventListener("click", (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, "movie.html");
          location.reload();
        });
      });      
    })
  }
})
