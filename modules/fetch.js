/*
 * Module for fetching all info depending on users selected searchtype
 */

const BAERER_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzcyZWNiZDdhZjNiNWFiMWFjNTNkYTRjN2VmMzA4YyIsInN1YiI6IjY1YTU5OTg0ODI4OWEwMDBjNmFkYjk0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NfXn4XR0kfhsYz43CpaOPu69w7V5cS-ctYBEV_19NHA";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${BAERER_KEY}`,
  },
};

async function fetchMovie(searchType, userInput) {
  let url;
  if (searchType === "movie" || searchType === "person") {
    url = `https://api.themoviedb.org/3/search/${searchType}?query=${userInput}&include_adult=false&language=en-US&page=1`;
  } else if (searchType === "Top Rated") {
    url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  } else if (searchType === "Most Popular") {
    url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  } else {
    url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
  }
  const response = await fetch(url, options);
  const movieData = await response.json();
  if (response.ok && movieData.results.length !== 0) {
    return movieData;
  } else if (movieData.results.length == 0) {
    throw "No result found";
  } else if (response.status === 404) {
    throw 404;
  }
}

export { fetchMovie };
