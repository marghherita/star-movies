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

const main = document.querySelector('main');

const movies = document.querySelector('.movie');


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
    main.innerHTML += `
        <div class="movie-list">
    
            <h1 class="movie-category">${category} Movies</h1>
    
            <div class="movie-container" id="${category}">
    
            </div>
    
    
        </div>
        `;
    makeCards(category, data);

}

const render = (container, content) => (container.innerHTML += content);

const makeCards = (id, data) => {
    
    const movieContainer = document.getElementById(id);

    data.map(
        (item) => {

        if (item.backdrop_path == null) {
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




// const input = document.querySelector('input')
// const titleP =  document.querySelector('.movie-title')

// input.addEventListener('keyup', (event) => {
//     let titleA = item.title;
//     // console.log(event.target.titleA)
//     const value = input.value.toLowerCase();

//         const results = data.filter((element) =>
//         // console.log(titleA))
        
//         element.title.toLowerCase().search(value) > -1);

//        console.log(results)
//     //    console.log(data)

//      render(movieContainer, results)   