import Config from "../tools/config.js";



export async function getPopularpersonbiography(id) {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw" ,
      },
    };
    let request = await fetch(
      `${Config.BASE_URL}person/${id}?language=en-US`, 
      options
      );

    let response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}