// API Key (v3 auth)
// 710ec8049b122e8353c33604f1d5fbe2
// https://api.themoviedb.org/3/search/movie?api_key=710ec8049b122e8353c33604f1d5fbe2&language=en-US&query=titanic&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/550?api_key=710ec8049b122e8353c33604f1d5fbe2

////////////////////////////////////////////////////////////////////////////////
// DOM Constants

const searchMovie = document.getElementById("searchmovie");
const submit = document.getElementById("submit");
const movieTitleSection = document.getElementById("title-of-film");
const movieImageSection = document.getElementById("image-of-film");
const description = document.getElementById("description");
const myForm = document.getElementById("form");

// query link
//https://api.themoviedb.org/3/movie/550?api_key=710ec8049b122e8353c33604f1d5fbe2&query=%3Ckeyword%3E
////////////////////////////////////////////////////////////////////////////////
// Globals

const API = `https://api.themoviedb.org/3/search/movie?api_key=710ec8049b122e8353c33604f1d5fbe2&language=en-US&query=titanic&page=1&include_adult=false`;

let genres = null;
axios
  .get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=710ec8049b122e8353c33604f1d5fbe2&"
  )
  .then((e) => {
    genres = e;
    submit.removeAttribute("disabled");
  });
////////////////////////////////////////////////////////////////////////////////
// Functions
const getfilm = async (e) => {
  e.preventDefault();
  movieImageSection.innerHTML = "";
  try {
    userInput = e.target.searchmovie.value;
    //userInput = "Titanic";
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=710ec8049b122e8353c33604f1d5fbe2&language=en-US&query=${userInput}&page=1&include_adult=false`
      );
      const imagesbaseUrl = "https://image.tmdb.org/t/p/w500";
      console.log(res);
      // const resultsUser = res.data.results;
      // let title = res.data.title;
      // console.log(title)
      for (const movie of res.data.results) {
      movieImageSection.innerHTML += `<h1>${movie.title}</h1>`;
      if (movie.backdrop_path !== null) {
        movieImageSection.innerHTML += `<img src="${imagesbaseUrl}${movie.backdrop_path}"/>`;
      }
      movieImageSection.innerHTML += `<p>${movie.overview}`;
    }
   
    // for (let genreId of movie.genre_ids) {

      
    // }
    //  movie.genre_ids.map()
    //movieTitle.innerHTML += "<img src='" + IMG + "'/>";
    // secondSection.innerHTML += res.data.name;
  } catch (error) {
    console.error(error);
  }
};



myForm.addEventListener("submit", getfilm);
