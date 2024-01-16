// const mainDiv = document.querySelector("main");
const mainContainer = document.querySelector("#mainContainer");

const imgBase = `https://image.tmdb.org/t/p/`;
const imgBackdropSize = "w400/";

function displayMovie(movie) {
  for (const movieList of movie.results) {
    console.log(movieList);
    const movieCardDiv = document.createElement("div");
    createAndAppendEl(
      "img",
      imgBase + imgBackdropSize + movieList.poster_path,
      movieCardDiv
    );
    createAndAppendEl("h2", movieList.title, movieCardDiv);
    createAndAppendEl("p", movieList.release_date, movieCardDiv);
    createAndAppendEl("p", movieList.overview, movieCardDiv);

    mainContainer.append(movieCardDiv);
  }
}
function topRated(movie) {
  for (const topRatedMovie of movie.results.splice(10)) {
    const movieCardDiv = document.createElement("div");
    createAndAppendEl(
      "img",
      imgBase + imgBackdropSize + topRatedMovie.poster_path,
      movieCardDiv
    );
    createAndAppendEl("h2", topRatedMovie.title, movieCardDiv);
    createAndAppendEl("p", topRatedMovie.release_date, movieCardDiv);
    createAndAppendEl("p", topRatedMovie.overview, movieCardDiv);

    mainContainer.append(movieCardDiv);
  }
}

function displayActor(movie) {}
function displayError() {}

function createAndAppendEl(type, content, container) {
  const element = document.createElement(type);
  container.append(element);

  if (type === "img") {
    element.src = content;
  } else {
    element.innerHTML = content;
  }
  return element;
}

export { displayMovie, displayActor, displayError, topRated };
