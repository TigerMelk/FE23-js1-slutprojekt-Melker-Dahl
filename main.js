import { fetchMovie } from "./modules/fetch.js";
import { displayMovie, displayActor, displayError } from "./modules/display.js";
const formEl = document.querySelector("form");

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
  formEl.reset();
});
