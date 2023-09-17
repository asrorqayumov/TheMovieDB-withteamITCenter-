import Config from "../tools/config.js";

export async function getMovieDetails(id) {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
            },
        };
        let request = await fetch(
            `${Config.BASE_URL}movie/${id}?language=en-US`,
            options
        );

        let response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}


export async function getMoviesPeoples(id) {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
            },
        };
        let request = await fetch(
            `${Config.BASE_URL}movie/${id}/credits?language=en-US`,
            options
        );

        let response = await request.json();
        return response.cast;
    } catch (error) {
        console.log(error);
    }
}




export async function getMoviesSocialReview(id) {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
            },
        };
        let request = await fetch(
            `${Config.BASE_URL}movie/${id}/reviews?language=en-US&page=1'`,
            options
        );

        let response = await request.json();
        return response.results;
    } catch (error) {
        console.log(error);
    }
}



export async function getMovieRecommandations(id) {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
            },
        };
        let request = await fetch(
            `${Config.BASE_URL}movie/${id}/recommendations?language=en-US&page=1`,
            options
        );

        let response = await request.json();
        return response.results;
    } catch (error) {
        console.log(error);
    }
}

// export async function favouriteRequest(accountid, id, mediatype,) {
//     try {


//         let request = await fetch(
//             `${Config.BASE_URL}account/20285554/favorite`, {
//             method: 'POST',
//             headers: {
//                 accept: "application/json",
//                 Authorization:
//                     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
//             },
//             body: JSON.stringify({
//                 media_type: 'tv',
//                 media_id: 615656,
//                 favorite: true,
//             }),
//         }

//         );

//         let response = await request.json();
//         console.log(response.results);
//         return response.results;
//     } catch (error) {
//         console.log(error);
//     }
// }

export async function favouriteRequest(id,type,why) {
    try {
      const request = await fetch(
       `${Config.BASE_URL}/account/20285554/favorite`,
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw'
          },
          body: JSON.stringify({media_type: type, media_id: id, favorite:why })
        }
      );
      let response = await  request.json();
     
      return await response;
    } catch (error) {
      console.log(error);
    }
  }

  


// const request = await fetch(
//     ${Config.BASE_URL}/account/20195959/watchlist,
//     {
//       method: 'POST',
//       headers: {
//         accept: 'application/json',
//         'content-type': 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEyMGFlNDg1NDY3NDVkMmM5YmMzMzFhZWVlOTc1MSIsInN1YiI6IjY0YmUyM2IwMGVkMmFiMDEzOGY5MTc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrsZNttCB7jIOZxzkqXeWwyQPOet1AuqkZ5BzY-Ytfo'
//       },
//       body: JSON.stringify({media_type: type, media_id: id, watchlist:why })
//     }
//   );
//   let response = await  request.json();