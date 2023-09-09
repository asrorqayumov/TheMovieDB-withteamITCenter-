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
           <span><a href="#">${data.name}</a></span>
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
                                    <fieldset class="rating">
                                        <input type="radio" id="star5" name="rating" value="5" /><label
                                            class="full" for="star5" title="Awesome - 5 stars"></label>
                                        <input type="radio" id="star4half" name="rating"
                                            value="4 and a half" /><label class="half" for="star4half"
                                            title="Pretty good - 4.5 stars"></label>
                                        <input type="radio" id="star4" name="rating" value="4" checked /><label
                                            class="full" for="star4" title="Pretty good - 4 stars"></label>
                                        <input type="radio" id="star3half" name="rating"
                                            value="3 and a half" /><label class="half" for="star3half"
                                            title="Meh - 3.5 stars"></label>
                                        <input type="radio" id="star3" name="rating" value="3" /><label
                                            class="full" for="star3" title="Meh - 3 stars"></label>
                                        <input type="radio" id="star2half" name="rating"
                                            value="2 and a half" /><label class="half" for="star2half"
                                            title="Kinda bad - 2.5 stars"></label>
                                        <input type="radio" id="star2" name="rating" value="2" /><label
                                            class="full" for="star2" title="Kinda bad - 2 stars"></label>
                                        <input type="radio" id="star1half" name="rating"
                                            value="1 and a half" /><label class="half" for="star1half"
                                            title="Meh - 1.5 stars"></label>
                                        <input type="radio" id="star1" name="rating" value="1" /><label
                                            class="full" for="star1" title="Sucks big time - 1 star"></label>
                                        <input type="radio" id="starhalf" name="rating" value="half" /><label
                                            class="half" for="starhalf"
                                            title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>

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
        let { name, character, profile_path } =
            movie;
        html += `
      <div class="actors-card">
          <div class="actors-img">
              <img src="${config.BASE_IMG_URL}${profile_path}"
                  alt="">
          </div>
          <div class="actors-name">
              <h4><a href="">${name}</a></h4>
              <p>${character}(voice)</p>
          </div>
      </div>
        `;
    });
    cardsWrapper.innerHTML = html;
}


// export function displayMoviesSocialReview(getMovieRequestSocialReview) {
//     let cardsWrapper = document.querySelector(".media_panel");
//     console.log(getMovieRequestSocialReview);
//     let html = "";
//     // let {name, username, avatar_path, rating, content, created_at} =
//     // getMovieRequestSocialReview;
//     html += `
//     <div class="content">
//     <div class="original_content">
//         <div class="review_container four">
//             <div class="content four">
//                 <div class="inner_content">
//                     <div class="content">
//                         <div class="inner_content">
//                             <div class="card">
//                                 <div class="grouped">
//                                     <div class="avatar">
//                                         <a href="/u/garethmb">
//                                             <img loading="lazy" class="avatar"
//                                                 src="https://secure.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg?s=45"
//                                                 srcset="https://secure.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg?s=45 1x, https://secure.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg?s=90 2x"
//                                                 alt="garethmb">
//                                         </a>
//                                     </div>

//                                     <div class="info">

//                                         <h3><a href="/review/64836616bf31f2505880d52a">A review by
//                                                 garethmb</a></h3>
//                                         <div class="flex">
//                                             <div class="rounded rating"><span
//                                                     class="glyphicons_v2 star invert svg"><i
//                                                         class="fa fa-star" aria-hidden="true"></i>
//                                                     </i></span> 8.0
//                                             </div>
//                                             <h5>Written by <a href="/u/garethmb">garethmb</a> on June 9,
//                                                 2023</h5>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div class="teaser">
//                                     <p>Finding your way in the world can be very difficult and even more
//                                         so when you are a fire element with an explosive temper. In the
//                                         new Pixar film "Elemental" audiences are introduced to Ember
//                                         (Leah Lewis), a young flame being who lives with her mother and
//                                         father in their combination home and business that caters to
//                                         other fire beings. In a city where the various elements live and
//                                         work can have its challenges, especially to the destructive
//                                         nature of fire which causes some prejudice against them as well
//                                         as their natural distrust of water.</p>

//                                     <p>Ember is preparing for the day that she will take over th... <a
//                                             class="underline"
//                                             href="/review/64836616bf31f2505880d52a">read the rest.</a>
//                                     </p>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <p class="new_button"><a href="/movie/976573-elemental/reviews">Read All Reviews</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>

// </div>
//       `;
//     cardsWrapper.innerHTML = html;


// }




export async function displayMoviesRecommandation(getMovieRequestRecommandation) {
    let cardsWrapper = document.querySelector(".recommendation_waypoint");
    let html = "";
    getMovieRequestRecommandation.forEach((movie) => {
        let { original_title, backdrop_path, release_date, vote_average} =
            movie;
        let vote = Math.round(vote_average * 10);
        html += `
      <div id="recommendation_scroller" class="scroller_wrap should_fade is_fading">
                    <div class="scroller">

                        <div class="item mini backdrop mini_card">
                            <div class="image_content">
                                <a href="">
                                    <img loading="lazy" class="backdrop"
                                        src="${config.BASE_IMG_URL}${backdrop_path}" class="card__img__poster"
                                        alt="">

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








