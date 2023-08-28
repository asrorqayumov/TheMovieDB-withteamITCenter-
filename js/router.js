import {
  displayTodayTrendingMovies,
  displayTodayTrendingMoviesweek,
} from "./pages/home.js";
import { getTrendingMoviesToday } from "./apis/homeApi.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  if (location.pathname == "index.html" || location.pathname == "/") {
    let getMovieRequest = await getTrendingMoviesToday();
    displayTodayTrendingMovies(getMovieRequest).then(() => {
      let cards = document.querySelectorAll(".card__img__poster");
      cards.forEach((card) => {
        card.addEventListener("click", (e) => {
          let id = e.target.id;
          history.pushState({ id }, null, "movie.html");
          location.reload();
        });
      });
    });
  } else if (location.pathname == "popularMovie.html") {
    // ...
  } else if (location.pathname == "/movie.html") {
    // ...
    console.log(history.state.id);
  }
});
