const req = new XMLHttpRequest();
req.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=3206e39e86eabbd67afc597cdeafe219");
let movieData = [];
req.onload = () => {
    movieData = JSON.parse(req.responseText).results;
    console.log(movieData)
    // const genreList = sortGenre(movieData);
    // const select = document.querySelector('#genres');
    // populateGenre(genreList);
    // select.addEventListener('change', (e) => {
    //     selectedGenre(movieData, e.target.value);
    // })
}
req.send();

function selectedGenre(movieData, selection){
    const choice = movieData.filter(movie => movie.genre === selection);
    console.log(choice);
    let idx = 0;
    const moviePoster = document.querySelector('#moviePoster');
    const movieName = document.querySelector('#movieText');
    moviePoster.innerHTML = `<img src = ${choice[idx].image} />`;
    movieName.textContent = choice[idx].movie;
}
function sortGenre(movieData){
    const genre = [];
    movieData.forEach(element => {
        !genre.includes(element.genre) && genre.push(element.genre);
    });
    return genre;
}
function populateGenre(genreList){
    const select = document.querySelector('#genres');
    genreList.forEach(genre => {
        let option = document.createElement('option');
        option.innerText = genre;
        select.appendChild(option);
    });
}