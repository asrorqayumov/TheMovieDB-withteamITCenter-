import Config from "../tools/config.js";

export async function getPopularMoviesWeek() {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
      },
    };
    let request = await fetch(
      `${Config.BASE_URL}movie/popular?language=en-US&page=1`,
      options
    );

    let response = await request.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
}


export async function filterMovies(value) {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw'
      }
    };
    let request = await fetch(
      `${Config.BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${value}`,
      options
    );
    let response = await request.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMovies(value) {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw'
      }
    };
    let request = await fetch(
      `${Config.BASE_URL}search/movie?query=${value}&include_adult=false&language=en-US&page=1&sort_by`, options)
      ;
    let response = await request.json();
    return response.results;
  } catch (error) {
    console.log(error);
  }
}