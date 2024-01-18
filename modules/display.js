// const mainDiv = document.querySelector("main");
const mainContainer = document.querySelector("#mainContainer");

const imgBase = "https://image.tmdb.org/t/p/";
const imgBackdropSize = "w300";

function displayMovie(movie) {
  const footer = document.querySelector("footer");
  footer.classList.add("footerPosition");
  for (const movieList of movie.results) {
    const movieCardDiv = document.createElement("div");
    movieCardDiv.classList.add("movieCard");
    const moviePoster = movieList.poster_path;
    if (moviePoster !== null) {
      createAndAppendEl(
        "img",
        imgBase + imgBackdropSize + moviePoster,
        movieCardDiv
      );
    } else {
      const noImgFile = "./assets/no-img.svg";
      noImage(movieCardDiv, noImgFile);
    }

    createAndAppendEl("h2", movieList.title, movieCardDiv);
    createAndAppendEl("p", movieList.release_date, movieCardDiv);
    createAndAppendEl("p", movieList.overview, movieCardDiv);

    mainContainer.append(movieCardDiv);
    let movieCardsAnime = document.querySelectorAll(".movieCard");

    anime({
      targets: movieCardsAnime,
      translateY: [200, 0],
      delay: anime.stagger(200, { from: "first" }),
      duration: 700,
    });
  }
}
function displayActor(actor) {
  mainContainer.innerHTML = "";
  const footer = document.querySelector("footer");
  footer.classList.add("footerPosition");
  for (const actorList of actor.results) {
    const movieCardDiv = document.createElement("div");
    movieCardDiv.classList.add("movieCard");
    const actorPoster = actorList.profile_path;
    if (actorPoster !== null) {
      createAndAppendEl(
        "img",
        imgBase + imgBackdropSize + actorPoster,
        movieCardDiv
      );
    } else {
      const noImgFile = "./assets/no-img.svg";
      noImage(movieCardDiv, noImgFile);
    }
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
      createAndAppendEl("ul", item.media_type + ": " + title, movieCardDiv);
    }
    mainContainer.append(movieCardDiv);
    let movieCardsAnime = document.querySelectorAll(".movieCard");

    anime({
      targets: movieCardsAnime,
      translateY: [200, 0],
      delay: anime.stagger(200, { from: "first" }),
      duration: 700,
    });
  }
}

function topRated(movie) {
  const footer = document.querySelector("footer");
  footer.classList.add("footerPosition");
  for (const topRatedMovie of movie.results.splice(10)) {
    const movieCardDiv = document.createElement("div");
    movieCardDiv.classList.add("movieCard");

    const moviePoster = topRatedMovie.poster_path;
    if (moviePoster !== null) {
      createAndAppendEl(
        "img",
        imgBase + imgBackdropSize + moviePoster,
        movieCardDiv
      );
    } else {
      const noImgFile = "./assets/no-img.svg";
      noImage(movieCardDiv, noImgFile);
    }
    createAndAppendEl("h2", topRatedMovie.title, movieCardDiv);
    createAndAppendEl("p", topRatedMovie.release_date, movieCardDiv);
    createAndAppendEl("p", topRatedMovie.overview, movieCardDiv);

    mainContainer.append(movieCardDiv);
    let movieCardsAnime = document.querySelectorAll(".movieCard");

    anime({
      targets: movieCardsAnime,
      translateY: [200, 0],
      delay: anime.stagger(200, { from: "first" }),
      duration: 700,
    });
  }
}
function mostPop(movie) {
  const footer = document.querySelector("footer");
  footer.classList.add("footerPosition");
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
    let movieCardsAnime = document.querySelectorAll(".movieCard");

    anime({
      targets: movieCardsAnime,
      translateY: [200, 0],
      delay: anime.stagger(200, { from: "first" }),
      duration: 700,
    });
  }
}

function displayError(error) {
  mainContainer.innerHTML = "";
  const errorEl = document.createElement("h1");
  if (error === "No result found") {
    errorEl.innerText = error + ", Please try again..";
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
function noImage(movieCardDiv, noImgFile) {
  const noImgEl = document.createElement("img");
  noImgEl.src = noImgFile;
  noImgEl.classList.add("noImgStyle");
  movieCardDiv.append(noImgEl);
}

export { displayMovie, displayActor, displayError, topRated, mostPop };
