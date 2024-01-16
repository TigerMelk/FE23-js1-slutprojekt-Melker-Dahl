import { fetchMovie } from "./modules/fetch.js";
import {
  displayMovie,
  displayActor,
  topRated,
  displayError,
} from "./modules/display.js";
const topRatedBtn = document.querySelector("#topRated");
const mostPopularBtn = document.querySelector("#mostPopular");
const formEl = document.querySelector("form");
console.log(fetchMovie);
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = document.querySelector("#textInput").value;
  const searchType = document.querySelector(
    'input[type="radio"]:checked'
  ).value;

  if (searchType == "Movie") {
    fetchMovie(searchType, userInput).then(displayMovie).catch(displayError);
  } else if (searchType == "Person") {
    fetchMovie(searchType, userInput).then(displayActor).catch(displayError);
  }
  console.log(userInput);
  console.log(searchType);
  console.log(fetchMovie);
  console.log(searchType);
  formEl.reset();
});

topRatedBtn.addEventListener("click", (event) => {
  fetchMovie("Top Rated").then(topRated);
  console.log(event);
  event.preventDefault();
});
