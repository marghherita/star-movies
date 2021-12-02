import { API, q, render } from "./utils.js"

const main = document.querySelector('main');

fetch(`${API.genresUrl}api_key=${API.apiKey}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.genres.forEach(item => {
            getMoviesByGenres(item.id, item.name)
        })
    })


const getMoviesByGenres = (id, genres) => {
    const randomPage = Math.floor(Math.random() * (10 - 1) + 1);
    fetch(`${API.movieUrl}api_key=${API.apiKey}&with_genres=${id}&include_adult=false&page=${randomPage}`)
        .then(response => response.json())
        .then(data => {
            makeCategoryElement(`${genres}`, data.results);

        })
};


const makeCategoryElement = (category, data) => {

    render(main, `

    <div class="movie-list">
    
        <h1 class="movie-category">${category} Movies</h1>

        <div class="movie-container" id="${category}">

        </div>

    </div>

    `);

    makeCards(category, data);

}

const makeCards = (id, data) => {

    const movieContainer = document.getElementById(id);

    data.forEach(
        (item) => {

            if (item.backdrop_path === null) {
                item.backdrop_path = item.poster_path;
                if (item.backdrop_path == null) {
                    return;
                }
            }

            const movieCards =
                `
        <div class="movie" onclick="location.href = 'movie.html?id=${item.id}'">
            <img src="${API.imgUrl}${item.backdrop_path}" alt="">
            <p class=stars> ★ ${item.vote_average}/10</p>
            <p class="movie-title">${item.title}</p>
            <button class=info-btn>+</button>
        </div>
        `;



            render(movieContainer, movieCards)
            
        })

        
}




