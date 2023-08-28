import Config from "../tools/config.js";

export async function getTrendingMoviesToday() {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
      },
    };
    let request = await fetch(
      `${Config.BASE_URL}trending/movie/day?language=en-US`,
      options
    );

    let response = await request.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
}



export async function getTrendingMoviesWeek() {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
      },
    };
    let request = await fetch(
      `${Config.BASE_URL}/trending/all/week?language=en-US`,
      options
    );

    let response = await request.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
}



export async function getTvSeriesListMoviesTv() {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
      },
    };
    let request = await fetch(
      `${Config.BASE_URL}/tv/airing_today?language=en-US&page=1`,
      options
    );

    let response = await request.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
}



export async function getTvSeriesListMoviesTheater() {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
      },
    };
    let request = await fetch(
      `${Config.BASE_URL}/tv/popular?language=en-US&page=1`,
      options
    );

    let response = await request.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
}
