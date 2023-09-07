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


export async function getMoviesPeoples() {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
            },
        };
        let request = await fetch(
            `${Config.BASE_URL}movie/${id}/credits?language=en-US`, options,
            options
        );

        let response = await request.json();
        return response.results;
    } catch (error) {
        console.log(error);
    }
}




export async function getMoviesSocialReview() {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
            },
        };
        let request = await fetch(
            `${Config.BASE_URL}movie/${id}/reviews?language=en-US&page=1'`, options,
            options
        );

        let response = await request.json();
        return response.results;
    } catch (error) {
        console.log(error);
    }
}



export async function getMovieRecommandations() {
    try {
        const options = {
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjM2ZDI2Yjc0MDIxMzQ1MjgxZDVkNGY2YWFlMmNiMiIsInN1YiI6IjY0ZDUzMDAyYjZjMjY0MTE1NGY3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KsAIE9wp69o-UDwt4eKPGq9GNBKmfcSjBD_iORozxJw",
            },
        };
        let request = await fetch(
            `${Config.BASE_URL}movie/${id}/recommendations?language=en-US&page=1`, options,
            options
        );

        let response = await request.json();
        return response.results;
    } catch (error) {
        console.log(error);
    }
}