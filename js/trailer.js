import { API, render, q } from "./utils.js"

fetch(`${API.detailUrl}${movieId}/videos?api_key=${API.apiKey}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        makeMovieDeatils(data);
    });
