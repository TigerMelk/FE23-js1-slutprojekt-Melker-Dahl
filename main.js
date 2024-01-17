import {
  displayMovie,
  displayActor,
  topRated,
  mostPop,
  displayError,
} from "./modules/display.js";
import { fetchMovie } from "./modules/fetch.js";
const mainContainer = document.querySelector("#mainContainer");
const topRatedBtn = document.querySelector("#topRated");
const mostPopularBtn = document.querySelector("#mostPopular");
const formEl = document.querySelector("form");
// fetchMovie("Top Rated").then(topRated).catch(displayError);
// !

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  mainContainer.innerHTML = "";
  const userInput = document.querySelector("#textInput").value;
  const searchType = document.querySelector(
    'input[type="radio"]:checked'
  ).value;
  if (searchType === "movie") {
    fetchMovie(searchType, userInput).then(displayMovie).catch(displayError);
  } else if (searchType === "person") {
    fetchMovie(searchType, userInput).then(displayActor).catch(displayError);
  }
  formEl.reset();
  console.log(userInput);
  console.log(searchType);
  console.log(fetchMovie());
});
// !
topRatedBtn.addEventListener("click", (event) => {
  event.preventDefault();

  mainContainer.innerHTML = "";

  fetchMovie("Top Rated").then(topRated).catch(displayError);
  console.log(fetchMovie());

  formEl.reset();
});

mostPopularBtn.addEventListener("click", (event) => {
  event.preventDefault();
  mainContainer.innerHTML = "";

  fetchMovie("Most Popular").then(mostPop).catch(displayError);
  formEl.reset();

  console.log(fetchMovie());
});

console.log(anime());
