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
function mostPop(movie) {
  for (const mostPopMovie of movie.results.splice(10)) {
    const movieCardDiv = document.createElement("div");
    createAndAppendEl(
      "img",
      imgBase + imgBackdropSize + mostPopMovie.poster_path,
      movieCardDiv
    );
    createAndAppendEl("h2", mostPopMovie.title, movieCardDiv);
    createAndAppendEl("p", mostPopMovie.release_date, movieCardDiv);
    createAndAppendEl("p", mostPopMovie.overview, movieCardDiv);
    mainContainer.append(movieCardDiv);
  }
}

function displayActor(actor) {
  mainContainer.innerHTML = "";
  for (const actorList of actor) {
    const movieCardDiv = document.createElement("div");
    createAndAppendEl(
      "img",
      imgBase + imgBackdropSize + actorList_profile.path,
      movieCardDiv
    );
    createAndAppendEl("h2", actorList.name, movieCardDiv);
    createAndAppendEl(
      "p",
      "Known for:" + actorList.known_for_department,
      movieCardDiv
    );
    for (const item of actorList) {
      let movieTitle;
      if (item.movieTitle === null) {
        movieTitle = item.name;
      } else {
        movieTitle = item.movieTitle;
      }
      createAndAppendEl("p", item.media_type + ":" + movieTitle, movieCardDiv);
    }
    mainContainer.append(movieCardDiv);
  }
}
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

export { displayMovie, displayActor, displayError, topRated, mostPop };
