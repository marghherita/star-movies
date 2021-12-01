import { API } from "./home.js"

let movieId = location.search.replace("?id=", "");

console.log(movieId)

const render = (container, content) => (container.innerHTML = content);


fetch(`${API.detailUrl}${movieId}?api_key=${API.apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        makeMovieDeatils(data);

    });

    const makeMovieDeatils = (data) => {

        const container = document.querySelector('.movie-info')
        const title = document.querySelector('title');
    
        let originImgUrl = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;

        
        if(data.backdrop_path == null){
            data.backdrop_path = data.poster_path;
        }
        
        container.style.backgroundImage = `url(${originImgUrl}`

        title.innerHTML = data.title;
        
        render(container, `

        <div class="movie-detail">
        <h1 class="movie-name">${data.title}</h1>
        <p class="genres">${data.release_date.split('-')[0]} | ${data.genres[0].name}</p>
        <p class="description">${data.overview}</p>
        <p class="starring"></p>
        </div>
    
        `)

        
    }


    const btnHome = document.querySelector('.btn-home');

    btnHome.addEventListener('click', () => {
        location.href = 'index.html'
    })





    


