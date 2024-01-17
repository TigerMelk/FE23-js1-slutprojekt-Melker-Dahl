// const mainDiv = document.querySelector("main");
const mainContainer = document.querySelector("#mainContainer");

const imgBase = "https://image.tmdb.org/t/p/";
const imgBackdropSize = "w300";

function displayMovie(movie) {
  for (const movieList of movie.results) {
    const movieCardDiv = document.createElement("div");
    movieCardDiv.classList.add("movieCard");

    createAndAppendEl(
      "img",
      imgBase + imgBackdropSize + movieList.poster_path,
      movieCardDiv
    );
    createAndAppendEl("h2", movieList.title, movieCardDiv);
    createAndAppendEl("p", movieList.release_date, movieCardDiv);
    createAndAppendEl("p", movieList.overview, movieCardDiv);

    mainContainer.append(movieCardDiv);
    anime(animeInfo);
  }
}
function displayActor(actor) {
  mainContainer.innerHTML = "";
  for (const actorList of actor.results) {
    const movieCardDiv = document.createElement("div");
    movieCardDiv.classList.add("movieCard");
    createAndAppendEl(
      "img",
      imgBase + imgBackdropSize + actorList.profile_path,
      movieCardDiv
    );
    createAndAppendEl("h2", actorList.name, movieCardDiv);
    createAndAppendEl(
      "p",
      "Known for: " + actorList.known_for_department,
      movieCardDiv
    );
    for (const item of actorList.known_for) {
      let title;
      if (item.title == null) {
        title = item.name;
      } else {
        title = item.title;
      }
      createAndAppendEl("p", item.media_type + ": " + title, movieCardDiv);
    }
    mainContainer.append(movieCardDiv);
    anime(animeInfo);
  }
}

function topRated(movie) {
  for (const topRatedMovie of movie.results.splice(10)) {
    const movieCardDiv = document.createElement("div");
    movieCardDiv.classList.add("movieCard");

    createAndAppendEl(
      "img",
      imgBase + imgBackdropSize + topRatedMovie.poster_path,
      movieCardDiv
    );
    createAndAppendEl("h2", topRatedMovie.title, movieCardDiv);
    createAndAppendEl("p", topRatedMovie.release_date, movieCardDiv);
    createAndAppendEl("p", topRatedMovie.overview, movieCardDiv);

    mainContainer.append(movieCardDiv);
    anime(animeInfo);
  }
}
function mostPop(movie) {
  for (const mostPopMovie of movie.results.splice(10)) {
    const movieCardDiv = document.createElement("div");
    movieCardDiv.classList.add("movieCard");

    createAndAppendEl(
      "img",
      imgBase + imgBackdropSize + mostPopMovie.poster_path,
      movieCardDiv
    );
    createAndAppendEl("h2", mostPopMovie.title, movieCardDiv);
    createAndAppendEl("p", mostPopMovie.release_date, movieCardDiv);
    createAndAppendEl("p", mostPopMovie.overview, movieCardDiv);
    mainContainer.append(movieCardDiv);
    anime(animeInfo);
  }
}

function displayError(error) {
  mainContainer.innerHTML = "";
  const errorEl = document.createElement("h1");
  if (error === "No result found") {
    errorEl.innerText = error + "Please try again..";
  } else {
    errorEl.innerText = "Somethings wrong, I can feel it";
  }
  console.log(error);
  mainContainer.append(errorEl);
}

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
const animeInfo = {
  targets: ".movieCard",
  translateY: anime.stagger[(50, 0)],
  loop: true,
  delay: anime.stagger(500, { from: "last" }),
  duration: 3000,
};
console.log(anime(animeInfo));

export { displayMovie, displayActor, displayError, topRated, mostPop };
