import { ALL_ARTICLES } from "../data/article-data";
import { FILM_DATA } from "../data/film-data";
import { TV_DATA } from "../data/tv-data";

// MARK: ARTICLE
export function getArticleSpecsById(id) {
  const data = ALL_ARTICLES.find((file) => file.id === id);
  if (!data) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Article - ID Not Found",
    });
  }
  return data;
}

// MARK: FILM
export function getFilmSpecsById(id) {
  const data = FILM_DATA.find((film) => film.id === id);
  if (!data) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Film - ID Not Found",
    });
  }
  return data;
}
export function getFilmSpecsByTitle(title) {
  const data = FILM_DATA.find((film) => film.title === title);
  if (!data) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "Film - Title Not Found",
    });
  }
  return data;
}

// MARK: TV
export function getTvSpecsById(id) {
  const data = TV_DATA.find((show) => show.id === id);
  if (!data) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "TV Show - ID Not Found",
    });
  }
  return data;
}
export function getTvSpecsByTitle(title) {
  const data = TV_DATA.find((show) => show.title === title);
  if (!data) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "TV Show - Title Not Found",
    });
  }
  return data;
}
