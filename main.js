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
const body = document.querySelector("body");
const logo = document.querySelector("#logo");

fetchMovie("Top Rated").then(topRated).catch(displayError);
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
});

topRatedBtn.addEventListener("click", (event) => {
  event.preventDefault();

  mainContainer.innerHTML = "";

  fetchMovie("Top Rated").then(topRated).catch(displayError);

  formEl.reset();
});

mostPopularBtn.addEventListener("click", (event) => {
  event.preventDefault();
  mainContainer.innerHTML = "";

  fetchMovie("Most Popular").then(mostPop).catch(displayError);
  formEl.reset();
});

logo.addEventListener("click", (event) => {
  location.reload();
});
const darkMode = document.querySelector("#switch");
darkMode.addEventListener("click", (event) => {
  event.preventDefault();
  body.classList.toggle("darkMode");
});

anime({
  targets: formEl,
  translateX: [270, 0],
  delay: anime.stagger(100),
});
