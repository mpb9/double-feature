import { toLowerCaseDash } from "../services/string-service";

export default class FilmSpecs {
  id;
  title;
  url;
  year;
  country;
  directors;
  actors;
  genres;
  constructor(title, url, year, country, directors, actors, genres) {
    this.id = `${toLowerCaseDash(title)}-${String(year)}`;
    this.title = String(title);
    this.url = String(url);
    this.year = String(year) || null;
    this.country = String(country) || null;
    this.directors = [...String(directors)] || null;
    this.actors = [...String(actors)] || null;
    this.genres = [...String(genres)] || null;
  }
  // constructor(json) {
  //   this.title = String(json.title);
  //   this.year = String(json.year) || null;
  //   this.country = String(json.country) || null;
  //   this.directors = [...String(json.directors)] || null;
  //   this.actors = [...String(json.actors)] || null;
  //   this.genres = [...String(json.genres)] || null;
  // }
}
