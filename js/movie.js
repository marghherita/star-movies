import { API, render, q, movieId } from "./utils.js";

const title = q("title");
const infoContainer = q(".movie-info");

// console.log(movieId)

fetch(`${API.detailUrl}${movieId}?api_key=${API.apiKey}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        makeMovieDeatils(data);
    });

fetch(`${API.detailUrl}${movieId}/credits?api_key=${API.apiKey}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
        const cast = q('.cast');
        for (let i = 0; i < 5; i++) {
            cast.innerHTML += data.cast[i].name += ", "
        }
    });



const makeMovieDeatils = (detail) => {


    // ---------- Gestione title pagina
    title.innerHTML = detail.title;

    // ---------- Gestione immagine background 
    const originImgUrl = `https://image.tmdb.org/t/p/original${detail.backdrop_path}`;
    infoContainer.style.backgroundImage = `url(${originImgUrl}`;

    if (detail.backdrop_path === null) {
        detail.backdrop_path = detail.poster_path;
    }

    // ---------- Gestione dettagli film 


    const details =
        `
    
    <div class="movie-detail">
    <h1 class="movie-name">${detail.title}</h1>
    <div class="trailer"></div>
    <div class="stars" style="--rating: ${detail.vote_average};" aria-label="Rating of this product is 2.3 out of 5.">
    <p class="genres">${detail.release_date.split("-")[0]} | ${detail.genres[0].name} | ${detail.runtime}'</p>
    <p class="description">${detail.overview}</p>
    <p class="cast"><span>Cast: </span></p>
    </div>
    
    `;



    render(infoContainer, details);

};

// ----------- REDIRECT ALLA HOME TRAMITE PULSANTE

const btnHome = q(".btn-home");

btnHome.addEventListener("click", () => {
    location.href = "index.html";
});
