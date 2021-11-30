// import { API } from "./utils.js";

// const fetchAll = async (API) => {
//     const response = await Promise.all(API.map(url => fetch(url)))
//     const jsons = await Promise.all(response.map(res => res.json()))
//     console.log(jsons)
//     return jsons;
//   }

// fetchAll(API)

export const API = {
    apiKey: `def9899adf29e78728794d71b6213684`,
    imgUrl: `https://image.tmdb.org/t/p/w500`,
    genresUrl: `https://api.themoviedb.org/3/genre/movie/list?`,
    movieUrl: `https://api.themoviedb.org/3/movie/popular?`,
    detailUrl: `https://api.themoviedb.org/3/movie/`,
}

const main = document.querySelector('.main');

const movies = document.querySelector('.movie');


fetch(`${API.genresUrl}api_key=${API.apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.genres.forEach(item => {
            getMoviesByGenres(item.id, item.name)
        })
    })


const getMoviesByGenres = (id, genres) => {
    const randomPage = Math.floor(Math.random() * (10 - 1) + 1 ) ;
    fetch(`${API.movieUrl}api_key=${API.apiKey}&with_genres=${id}&include_adult=false&page=${randomPage}`)
        .then(response => response.json())
        .then(data => {
            makeCategoryElement(`${genres}`, data.results);
            
        })
};


const makeCategoryElement = (category, data) => {
    main.innerHTML += `
        <div class="movie-list">
    
            <h1 class="movie-category">${category} Movies</h1>
    
            <div class="movie-container" id="${category}">
    
            </div>
    
    
        </div>
        `;
    makeCards(category, data);

}

const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id);
    data.forEach((item) => {

        if (item.backdrop_path == null) {
            item.backdrop_path = item.poster_path;
            if (item.backdrop_path == null) {
                return;
            }
        }

        movieContainer.innerHTML += 
        `
        <div class="movie" onclick="location.href = 'movie.html?id=${item.id}'">
        <img src="${API.imgUrl}${item.backdrop_path}" alt="">
        <p class="movie-title">${item.title}</p>
        </div>
        `;


    })

}
