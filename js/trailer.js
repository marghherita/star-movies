import { API, render, q, urlYt, movieId } from "./utils.js"


fetch(`${API.detailUrl}${movieId}/videos?api_key=${API.apiKey}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {

        // console.log(data)
        makeTrailer(data.results);
        // console.log(data.results)
    });



const makeTrailer = (data) => {

    // console.log(item)
    const trailer = q('.trailer');


    render(trailer, `
            
            <iframe width="520" height="315"
            src="${urlYt}${data[0].key}">
            </iframe>
            `)

}
