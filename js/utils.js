export { render, q, API, urlYt };

const q = (selector) => document.querySelector(selector);

const render = (container, content) => (container.innerHTML += content);

const API = {
    apiKey: `def9899adf29e78728794d71b6213684`,
    imgUrl: `https://image.tmdb.org/t/p/w500`,
    genresUrl: `https://api.themoviedb.org/3/genre/movie/list?`,
    movieUrl: `https://api.themoviedb.org/3/movie/popular?`,
    detailUrl: `https://api.themoviedb.org/3/movie/`,
}

const urlYt = "https://www.youtube.com/watch?v=";



// -------- NAV BAR HEADER 
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
