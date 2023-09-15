
import { getPopularpersonbiography } from "../apis/personApi.js";
import config from "../tools/config.js";

export function displayPopularperson(getPopularPerson) {
  let cardsWrapper = document.querySelector(".card__list__popularmovie__page");
  let html = "";
  getPopularPerson.forEach((movie) => {
    let { original_title, release_date, vote_average, backdrop_path, id } =
      movie;
    let vote = Math.round(vote_average * 10);
    html += `
      <div class="col mb-100 ">
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


export function displayPopularperson_biography(person) {
  let cardsWrapper = document.querySelector(".container_person");
  let html = "";
  let {profile_path, biography} = person;

console.log(person);
    html += `  <div class="img_person">
      <img src="${config.BASE_IMG_URL}${profile_path}" alt="">
  </div>
  <div class="about_person">
      <div class="biography">
          <h1>Jackie Chan</h1>
          <b>Biography</b>
          <p>${biography}</p>
     
      </div>`

  cardsWrapper.innerHTML = html;
}











//************************************************************ */



let myBtn = document.getElementById('myBtn');


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


myBtn.addEventListener('click', myFunction)

