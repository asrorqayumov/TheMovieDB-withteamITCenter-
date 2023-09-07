import config from "../tools/config.js";

import { getMovieDetails } from "./apis/movieApi.js";

export function displayMoviesDetails(getMovieRequestDetailes) {
    let cardsWrapper = document.querySelector(".movie-card");
    let html = "";
    getMovieRequestDetailes.forEach((movie) => {
        let { backdrop_path, name, poster_path, original_title, id, overview, popularity, origin_country } =
            movie;
        let vote = Math.round(vote_average * 10);
        html += `
    <div class="container-movie">

        <a href="#"><img
                src="${config.BASE_IMG_URL}${backdrop_path}"
                alt="cover" class="cover" /></a>

        <div class="hero">
            <a href="#" class="hero-img"><img
                    src="${config.BASE_IMG_URL}${poster_path}" /></a>

            <div class="details">

                <div class="title1"><a href="#">${original_title} </a><span>(2023)</span></div>

                <div class="title2"><span><i class="fa fa-picture-o" aria-hidden="true"></i></span>
                    06/16/2023${origin_country} <span><i class="fa fa-circle" aria-hidden="true">
                            <span><a href="#">Animation,</a></span>
                            <span><a href="#">Comedy,</a></span>
                            <span><a href="#">Family,</a></span>
                            <span><a href="#">Fantasy,</a></span>
                            <span><a href="#">Romance,</a></span>
                        </i></span>
                    <span><i class="fa fa-circle" aria-hidden="true">
                            <p></p>
                        </i>p1h 42m</span>
                </div>

                <div class="circles-box">
                    <div class="circle-text">
                        <div class="circle-progressbar">
                            <div role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"
                                style="--value: ${popularity}"></div>
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

                <p class="title3">Opposites react.</p>

                <h2>Overwiev</h2>
                <p class="text">
                ${overview}
                </p>

                <div class="about-title">
                    <div>
                        <a href="">Peter Sohn</a>
                        <p>Director story</p>
                    </div>
                    <div>
                        <a href="">John Hoberg</a>
                        <p>Screenplay, Story</p>
                    </div>
                    <div>
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
    });
    cardsWrapper.innerHTML = html;


}
displayMoviesDetails(getMovieRequestDetailes)



export async function displayMoviesPeople(getMovieRequestPeople) {
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