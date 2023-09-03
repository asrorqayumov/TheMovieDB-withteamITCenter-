import { getPopularMoviesWeek } from "../apis/popularApi.js";
import { filterMovies } from "../apis/popularApi.js";
import config from "../tools/config.js";
let formHandler = document.querySelector('.form__search');

export function FilteredMovies(formHandler, displayPopular) {
  formHandler.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e.target.sortBy.value);
    await filterMovies(e.target.sortBy.value).then((data) => {
      displayPopular(data);
    });
  });
}

export function displayPopular(getPopularMoviesWeek) {
  let cardsWrapper = document.querySelector(".card__list__popularmovie__page");
  let html = "";
  getPopularMoviesWeek.forEach((movie) => {
    let { original_title, release_date, vote_average, backdrop_path, id } =
      movie;
    let vote = Math.round(vote_average * 10);
    html += `
    <div class="col">
      <div class="movie__card">
      <div class="card_box">
        <div class="latest-box">
          <div class="latest-b-img">
            <div class="dropdown-card">
              <span class="dropbtn-card"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></span>
              <div id="myDropdown-card" class="dropdown-contentcard">
                <a href="#"
                  ><span
                    ><i class="fa fa-list" aria-hidden="true"></i
                  ></span>
                  Add to list
                </a>
                <a href="#"
                  ><span
                    ><i class="fa fa-heart" aria-hidden="true"></i
                  ></span>
                  Favorite
                </a>
                <a href="#"
                  ><span
                    ><i class="fa fa-bookmark" aria-hidden="true"></i
                  ></span>
                  Watchlist
                </a>
                <a href="#"
                  ><span
                    ><i class="fa fa-star" aria-hidden="true"></i
                  ></span>
                  Rayting
                  <div id="rayting-dropdown" class="rayting-dropdown">
                
                  </div>
                </a>
              </div>
            </div>
            <img src="${config.BASE_IMG_URL}${backdrop_path}" alt="" id="${id}" class="card__img__poster />
          </div>
          <div class="circle-text">
          <div class="circle-progressbar">
          <div
            role="progressbar"
            aria-valuenow="88"
            aria-valuemin="0"
            aria-valuemax="100"
            style="--value: ${vote}"
          ></div>
        </div>
          <div class="latest-b-text">
            <a href="#"><strong>${original_title}</strong></a>
            <p>${release_date}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      `;
  });
  cardsWrapper.innerHTML = html;
}
