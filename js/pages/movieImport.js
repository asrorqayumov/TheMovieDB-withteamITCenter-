import config from "../tools/config.js";

export function displayMoviesDetails(getMovieRequestDetailes) {
    let cardsWrapper = document.querySelector(".movie-card");
    console.log(getMovieRequestDetailes);
    let html = "";
    let { backdrop_path, poster_path, vote_average, original_title, genres, overview, release_date, runtime, tagline } =
        getMovieRequestDetailes;
    let vote = Math.round(vote_average * 10);
    function looping(genres) {
        let html;
        genres.forEach((data) => {
            html += `
           <span><a href="#">${data.name},</a></span>
           `;

        })
        return html
    }
    html += `
    <div class="container-movie">

        <a href="#"><img
                src="${config.BASE_IMG_URL}${poster_path}"
                alt="cover" class="cover" /></a>

        <div class="hero">
            <a href="#" class="hero-img"><img
                    src="${config.BASE_IMG_URL}${backdrop_path}" /></a>

            <div class="details">

                <div class="title1"><a href="#">${original_title}</a><span>(2023)</span></div>

                <div class="title2"><span><i class="fa fa-picture-o" aria-hidden="true"></i></span>
                ${release_date} (US) <span><i class="fa fa-circle" aria-hidden="true">
                            ${looping(genres)}
                        </i></span>
                    <span><i class="fa fa-circle" aria-hidden="true">
                        </i>${runtime}</span>
                </div>

                <div class="circles-box">
                    <div class="circle-text">
                        <div class="circle-progressbar">
                            <div role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"
                                style="--value: ${vote}"></div>
                        </div>
                        <div class="latest-b-text">
                            <a href="#"><strong></strong></a>
                            <p></p>
                        </div>
                    </div>
                    <span class="persenteg-title">
                        <p>User</p>
                        <p>Score</p>
                    </span>
                    <div class="different-circles">
                        <span><i class="fa fa-list" aria-hidden="true"></i></span>
                        <span><i class="fa fa-heart" aria-hidden="true"></i></span>
                        <span><i class="fa fa-bookmark" aria-hidden="true"></i></span>
                        <span><i class="fa fa-star" aria-hidden="true">
                                <div class="star-main">
                                   

                                </div>
                            </i></span>
                    </div>
                </div>

                <p class="title3">${tagline}</p>

                <h2>Overwiev</h2>
                <p class="text">
                ${overview}
                </p>

                <div class="about-title">
                    <div class="about-title-name">
                        <a href="">Peter Sohn</a>
                        <p>Director story</p>
                    </div>
                    <div class="about-title-name">
                        <a href="">John Hoberg</a>
                        <p>Screenplay, Story</p>
                    </div>
                    <div class="about-title-name">
                        <a href="">Kat Likkel</a>
                        <p>Screenplay, Story</p>
                    </div>
                </div>

                <div class="about-title2">
                    <a href="">Brenda Hsueh</a>
                    <p>Screenplay, Story</p>
                </div>
            </div>
        </div>
    </div>

      `;
    cardsWrapper.innerHTML = html;


}


export async function displayMoviesPeople(getMovieRequestPeople) {
    let cardsWrapper = document.querySelector(".about-actors");
    let html = "";
    getMovieRequestPeople.forEach((movie) => {
        let { name, character, profile_path , id} =
            movie;
        html += `
      <div class="actors-card">
          <div class="actors-img">
              <img src="${config.BASE_IMG_URL}${profile_path}" class="people_img" id="${id}"
                  alt=""> 
          </div>
          <div class="actors-name">
              <h4><a href="">${name}</a></h4>
              <p>${character}</p>
          </div>
      </div>
        `;
    });
    cardsWrapper.innerHTML = html;
}


export function displayMoviesSocialReview(data) {
    let cardsWrapper = document.querySelector(".reviews");
    let html = "";
    function random(max) {
        return Math.floor(Math.random() * max);
      }
    let {avatar_path, author,  author_details, content, updated_at} =
    data[random(data.length)];

    html += `
    <div class="content">
    <div class="inner_content">
        <div class="card">
            <div class="grouped">
                <div class="avatar">
                    <a href="">
                        <img loading="lazy" class="avatar"
                            src="${config.BASE_IMG_URL}${avatar_path}"
                            alt="">
                    </a>
                </div>

                <div class="info">

                    <h3><a href="">A review by
                            ${author}</a></h3>
                    <div class="flex">
                        <div class="rounded rating"><span
                                class="glyphicons_v2 star invert svg"><i class="fa fa-star" aria-hidden="true"></i>
                          </span>${author_details.rating}.0
                        </div>
                        <h5>Written by <a href="">${author}</a> on ${updated_at}</h5>
                    </div>
                </div>
            </div>

            <div class="teaser">
                <p>${content}</p>

                </p>
            </div>
        </div>
    </div>

</div>
      `;
    cardsWrapper.innerHTML = html;


}






export async function displayMoviesRecommandation(getMovieRequestRecommandation) {
    let cardsWrapper = document.querySelector(".recommendation_waypoint");
    let html = "";
    getMovieRequestRecommandation.forEach((movie) => {
        let { original_title, backdrop_path, id, release_date, vote_average } =
            movie;
        let vote = Math.round(vote_average * 10);
        html += `
      <div id="recommendation_scroller" class="scroller_wrap should_fade is_fading">
                    <div class="scroller">

                        <div class="item mini backdrop mini_card">
                            <div class="image_content">
                                <a href="">
                                    <img loading="lazy" class="backdrop recommandation_img" src="${config.BASE_IMG_URL}${backdrop_path}" 
                                        alt="" id="${id}">

                                    <div class="meta">
                                        <span class="release_date"><span class="glyphicons_v2 calendar"></span>
                                            ${release_date}</span>
                                        <span>
                                            <span id="rating_5f0cbd05498ef90036861a5f"
                                                class="glyphicons_v2 star right rating"></span>
                                            <span id="favourite_5f0cbd05498ef90036861a5f"
                                                class="glyphicons_v2 heart favourite list_action"
                                                data-media-type="movie"></span>
                                            <span id="favourite_5f0cbd05498ef90036861a5f_value" class="hide">Add to your
                                                favorite list</span>
                                            <span id="watchlist_5f0cbd05498ef90036861a5f"
                                                class="glyphicons_v2 bookmark watchlist list_action"
                                                data-media-type="movie"></span>
                                            <span id="watchlist_5f0cbd05498ef90036861a5f_value" class="hide">Add to your
                                                watchlist</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <p class="movie flex">
                                <a class="title" href="" title=""
                                    alt=""><bdi>${original_title}</bdi></a>
                                <span class="vote_average">${vote}%</span>
                            </p>
                        </div>

                    </div>
                </div>
        `;
    });
    cardsWrapper.innerHTML = html;
}








